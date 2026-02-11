"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";

export default function ThankYouContent() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center pt-20">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
                {/* Success Icon */}
                <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center border-2 border-[#D07A2D]">
                    <CheckCircle className="w-10 h-10 text-[#D07A2D]" />
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Thank You!
                </h1>

                {/* Message */}
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
                    We've received your quote request and will get back to you within a
                    few hours. If you need immediate assistance, feel free to give us a
                    call.
                </p>

                {/* Phone CTA */}
                <a
                    href="tel:+19403279977"
                    onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion("tel:+19403279977")}
                    className="inline-flex items-center gap-3 text-white bg-[#111] border border-white/10 hover:border-[#D07A2D]/50 px-8 py-4 mb-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,122,45,0.15)]"
                >
                    <Phone className="w-5 h-5 text-[#D07A2D]" />
                    <span>Call Now: (940) 327-9977</span>
                </a>

                {/* Back to Portfolio Button */}
                <div className="mt-4">
                    <Button
                        asChild
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5 hover:border-[#D07A2D] rounded-none px-6 py-3"
                    >
                        <Link href="/#portfolio" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            View Our Portfolio
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
