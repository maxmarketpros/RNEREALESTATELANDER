"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import Lightbox from "./Lightbox";

const stagingImages = [
    {
        src: "/images/virtual-staging/BEDROOM_final + TEXT.jpg",
        alt: "Virtual Staging – Bedroom transformation with modern furniture and decor",
        title: "Bedroom",
    },
    {
        src: "/images/virtual-staging/KITCHEN _final + TEXT.jpg",
        alt: "Virtual Staging – Kitchen transformation with contemporary design",
        title: "Kitchen",
    },
    {
        src: "/images/virtual-staging/LIVING ROOM_final + TEXT.jpg",
        alt: "Virtual Staging – Living room transformation with stylish furnishings",
        title: "Living Room",
    },
];

export default function VirtualStaging() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const prevImage = useCallback(() => {
        setLightboxIndex((prev) => Math.max(0, prev - 1));
    }, []);

    const nextImage = useCallback(() => {
        setLightboxIndex((prev) =>
            Math.min(stagingImages.length - 1, prev + 1)
        );
    }, []);

    return (
        <>
            <section
                id="virtual-staging"
                className="py-16 lg:py-24 bg-[#0F0F0F]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                            Transform Empty Spaces
                        </p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Virtual Staging
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Help buyers envision the full potential of any
                            property. Our virtual staging brings empty rooms to
                            life with stunning, photorealistic furniture and
                            decor.
                        </p>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {stagingImages.map((image, index) => (
                            <div
                                key={image.title}
                                className="group relative bg-[#111] border border-white/5 hover:border-[#D07A2D]/30 transition-all duration-500 overflow-hidden cursor-pointer"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                                onClick={() => openLightbox(index)}
                            >
                                {/* Image Container - auto height to show full image */}
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={800}
                                        height={600}
                                        className={`w-full h-auto transition-transform duration-700 ${activeIndex === index
                                                ? "scale-105"
                                                : "scale-100"
                                            }`}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Zoom icon on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-12 h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <svg
                                                className="w-5 h-5 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Title Bar */}
                                <div className="p-4 border-t border-white/5 bg-[#0D0D0D]">
                                    <h3 className="text-white font-medium group-hover:text-[#D07A2D] transition-colors duration-300">
                                        {image.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <p className="text-gray-400 mb-4">
                            Ready to stage your listing virtually?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-[#D07A2D] hover:text-[#B86A25] font-medium transition-colors duration-200"
                        >
                            Get a Quote
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <Lightbox
                images={stagingImages.map((img) => img.src)}
                currentIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onPrev={prevImage}
                onNext={nextImage}
            />
        </>
    );
}
