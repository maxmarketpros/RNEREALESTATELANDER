"use client";

import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";

export default function MobileCTABar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0A0A0A]/95 backdrop-blur-sm border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
                <Button
                    variant="outline"
                    asChild
                    className="flex-1 border-[#D07A2D] text-[#D07A2D] hover:bg-[#D07A2D] hover:text-white rounded-none py-5"
                >
                    <a
                        href="tel:+19403279977"
                        onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion("tel:+19403279977")}
                        className="flex items-center justify-center gap-2"
                    >
                        <Phone className="h-4 w-4" />
                        Call Now
                    </a>
                </Button>
                <Button
                    asChild
                    className="flex-1 bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none py-5"
                >
                    <a
                        href="#contact"
                        className="flex items-center justify-center gap-2"
                    >
                        <FileText className="h-4 w-4" />
                        Get Quote
                    </a>
                </Button>
            </div>
        </div>
    );
}
