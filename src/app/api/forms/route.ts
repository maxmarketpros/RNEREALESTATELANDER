import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        // Convert FormData to object for logging/processing
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            if (key !== "bot-field") {
                data[key] = value.toString();
            }
        });

        // Check honeypot
        const botField = formData.get("bot-field");
        if (botField) {
            return NextResponse.json({ error: "Bot detected" }, { status: 400 });
        }

        // For Netlify, we need to submit to their forms endpoint
        // This works in production on Netlify
        const netlifyFormData = new URLSearchParams();
        formData.forEach((value, key) => {
            netlifyFormData.append(key, value.toString());
        });
        netlifyFormData.append("form-name", "quote");

        // Submit to Netlify forms endpoint (works on Netlify)
        if (process.env.NODE_ENV === "production") {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: netlifyFormData.toString(),
            });
        }

        return NextResponse.redirect(new URL("/thank-you", request.url));
    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json(
            { error: "Failed to submit form" },
            { status: 500 }
        );
    }
}
