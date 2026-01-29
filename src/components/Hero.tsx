import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const trustChips = [
    "MLS-ready deliverables",
    "Fast scheduling",
    "High-end editing",
    "Commercial + Residential",
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0A0A0A]">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                {/* Diagonal lines */}
                <div className="absolute inset-0 bg-diagonal-lines" />
                {/* Orange glow - top right */}
                <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#D07A2D]/5 rounded-full blur-3xl" />
                {/* Orange glow - bottom left */}
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#D07A2D]/3 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Service Area Microcopy */}
                <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-8">
                    Serving Parker, Tarrant, Wise, Palo Pinto & surrounding areas
                </p>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                    Premium Real Estate Media
                    <br />
                    <span className="text-[#D07A2D]">That Helps Listings Stand Out</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Photography, video, drone, 3D tours, floor plans, and virtual staging
                    for agents and builders across the DFW area.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none px-8 py-6 text-base font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,122,45,0.4)]"
                    >
                        <a href="#contact">Get a Quote</a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="border-white/20 text-white hover:bg-white/5 hover:border-[#D07A2D] rounded-none px-8 py-6 text-base font-medium tracking-wide transition-all duration-300"
                    >
                        <a href="#portfolio">View Portfolio</a>
                    </Button>
                </div>

                {/* Trust Chips */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {trustChips.map((chip) => (
                        <Badge
                            key={chip}
                            variant="outline"
                            className="border-white/10 bg-white/5 text-gray-300 rounded-none px-4 py-2 text-sm font-normal hover:border-[#D07A2D]/50 transition-colors duration-200"
                        >
                            {chip}
                        </Badge>
                    ))}
                </div>

                {/* Phone CTA */}
                <div className="mt-12">
                    <a
                        href="tel:+19403279977"
                        className="inline-flex items-center gap-3 text-gray-400 hover:text-[#D07A2D] transition-colors duration-200 text-lg"
                    >
                        <Phone className="h-5 w-5" />
                        <span>Or call now: (940) 327-9977</span>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
                    <div className="w-1.5 h-3 bg-[#D07A2D] rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
