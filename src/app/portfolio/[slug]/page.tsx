"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { galleries, getGalleryImages } from "@/lib/galleryData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

interface PortfolioPageProps {
    params: Promise<{ slug: string }>;
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
    const { slug } = use(params);
    const gallery = galleries[slug];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!gallery) {
        notFound();
    }

    const images = getGalleryImages(gallery.folder, gallery.imageCount);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToPrev = () => {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) =>
            prev < images.length - 1 ? prev + 1 : prev
        );
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#0A0A0A] pt-20">
                {/* Hero Section */}
                <section className="py-16 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Back Button */}
                        <Button
                            asChild
                            variant="ghost"
                            className="text-gray-400 hover:text-white mb-8 -ml-4"
                        >
                            <Link href="/#portfolio" className="flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Portfolio
                            </Link>
                        </Button>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            {gallery.title}
                        </h1>
                        <p className="text-gray-400 max-w-2xl mb-12">
                            {gallery.description}
                        </p>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => openLightbox(index)}
                                    className="group relative aspect-[4/3] overflow-hidden bg-[#111] border border-white/5 hover:border-[#D07A2D]/50 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#D07A2D]"
                                    aria-label={`View image ${index + 1}`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${gallery.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm tracking-wider uppercase">
                                            View
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center">
                            <p className="text-gray-400 mb-6">
                                Ready to get stunning media like this for your listings?
                            </p>
                            <Button
                                asChild
                                className="bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none px-8 py-6 text-base font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,122,45,0.4)]"
                            >
                                <Link href="/#contact">Get a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Lightbox */}
            <Lightbox
                images={images}
                currentIndex={currentImageIndex}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                onPrev={goToPrev}
                onNext={goToNext}
            />
        </>
    );
}
