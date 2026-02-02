"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";

const heroImages = [
    "/images/commercial-exterior-gallery/1.webp",
    "/images/commercial-exterior-gallery/2.webp",
    "/images/commercial-exterior-gallery/3.webp",
    "/images/commercial-exterior-gallery/4.webp",
    "/images/commercial-exterior-gallery/5.webp",
    "/images/commercial-exterior-gallery/6.webp",
];

const trustChips = [
    "MLS-ready deliverables",
    "Fast scheduling",
    "High-end editing",
    "Commercial + Residential",
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
                setIsTransitioning(false);
            }, 1000);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 lg:pb-20 overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                {heroImages.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex
                            ? isTransitioning
                                ? "opacity-0"
                                : "opacity-100"
                            : index === (currentImageIndex + 1) % heroImages.length && isTransitioning
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Luxury real estate exterior ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/[0.75] via-black/[0.55] to-black/[0.85]" />

                {/* Additional side gradients for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/[0.45] via-transparent to-black/[0.45]" />

                {/* Subtle orange glow accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D07A2D]/10 rounded-full blur-3xl" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Service Area Microcopy */}
                <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-400 mb-4 sm:mb-8">
                    <span className="sm:hidden">Serving Parker, Tarrant, Wise & Palo Pinto</span>
                    <span className="hidden sm:inline">Serving Parker, Tarrant, Wise, Palo Pinto & surrounding areas</span>
                </p>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] sm:leading-tight mb-4 sm:mb-6">
                    Premium Real Estate Media
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 sm:px-0">
                    <span className="sm:hidden">Photography, Videography, Drone Services, 360 Tours & Floor Plans for Agents, Contractors & Investors in DFW.</span>
                    <span className="hidden sm:inline">Photography, Videography, Drone Services, 360 Tours, Floor Plans for Agents, Contractors & Investors in the DFW Area & Beyond</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                    <Button
                        asChild
                        size="lg"
                        className="w-full sm:w-auto bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none px-8 py-5 sm:py-6 text-base font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,122,45,0.4)]"
                    >
                        <a href="#contact">Get a Quote</a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-[#D07A2D] rounded-none px-8 py-5 sm:py-6 text-base font-medium tracking-wide transition-all duration-300 backdrop-blur-sm"
                    >
                        <a href="#portfolio">View Portfolio</a>
                    </Button>
                </div>

                {/* Trust Chips - Hidden on mobile */}
                <div className="hidden sm:flex flex-wrap items-center justify-center gap-3">
                    {trustChips.map((chip) => (
                        <Badge
                            key={chip}
                            variant="outline"
                            className="border-white/20 bg-black/30 backdrop-blur-sm text-gray-200 rounded-none px-4 py-2 text-sm font-normal hover:border-[#D07A2D]/50 transition-colors duration-200"
                        >
                            {chip}
                        </Badge>
                    ))}
                </div>

                {/* Phone CTA - Hidden on mobile (covered by sticky CTA bar) */}
                <div className="hidden sm:block mt-12">
                    <a
                        href="tel:+19403279977"
                        onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion("tel:+19403279977")}
                        className="inline-flex items-center gap-3 text-gray-300 hover:text-[#D07A2D] transition-colors duration-200 text-lg"
                    >
                        <Phone className="h-5 w-5" />
                        <span>Or call now: (940) 327-9977</span>
                    </a>
                </div>
            </div>

            {/* Slideshow Indicators - Adjusted position for mobile */}
            <div className="absolute bottom-36 sm:bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsTransitioning(true);
                            setTimeout(() => {
                                setCurrentImageIndex(index);
                                setIsTransitioning(false);
                            }, 500);
                        }}
                        className={`w-2 h-2 transition-all duration-300 ${index === currentImageIndex
                            ? "w-6 sm:w-8 bg-[#D07A2D]"
                            : "bg-white/30 hover:bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll indicator - Hidden on mobile */}
            <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
                    <div className="w-1.5 h-3 bg-[#D07A2D] rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
