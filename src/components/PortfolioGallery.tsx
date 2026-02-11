"use client";

import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
    {
        title: "Commercial Exterior Gallery",
        slug: "commercial-exterior",
        image: "/images/CARD-THUMBNAILS/commercial-exterior.webp",
    },
    {
        title: "Residential Exterior Gallery",
        slug: "residential-exterior",
        image: "/images/CARD-THUMBNAILS/residential-exterior.webp",
    },
    {
        title: "Commercial Interior Gallery",
        slug: "commercial-interior",
        image: "/images/CARD-THUMBNAILS/commercial-interior.webp",
    },

    {
        title: "Residential Interior Gallery",
        slug: "residential-interior",
        image: "/images/residential-interior-gallery/7.webp",
    },
];

export default function PortfolioGallery() {
    return (
        <section id="portfolio" className="py-16 lg:py-24 bg-[#0A0A0A]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        Our Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Portfolio
                    </h2>
                </div>

                {/* Gallery Grid */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {portfolioItems.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/portfolio/${item.slug}`}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] group relative aspect-square overflow-hidden bg-[#111] border border-white/5 hover:border-[#D07A2D]/50 transition-all duration-500"
                        >
                            {/* Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500" />

                            {/* Orange glow on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(208,122,45,0.1)]" />
                            </div>

                            {/* Title */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white text-center px-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                    {item.title}
                                </h3>
                            </div>

                            {/* View indicator */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-sm tracking-wider uppercase text-[#D07A2D]">
                                    View Gallery →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
