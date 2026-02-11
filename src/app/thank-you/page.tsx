import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYouContent from "@/components/ThankYouContent";

export const metadata: Metadata = {
    title: "Thank You | RNE Real Estate Media",
    description: "Thank you for your inquiry. We'll be in touch shortly.",
};

export default function ThankYouPage() {
    return (
        <>
            <Header />
            <ThankYouContent />
            <Footer />
        </>
    );
}
