"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

export default function Lightbox({
    images,
    currentIndex,
    isOpen,
    onClose,
    onPrev,
    onNext,
}: LightboxProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowLeft":
                    onPrev();
                    break;
                case "ArrowRight":
                    onNext();
                    break;
            }
        },
        [isOpen, onClose, onPrev, onNext]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[#D07A2D] transition-colors duration-200 border border-white/20 hover:border-[#D07A2D]"
                aria-label="Close lightbox"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {currentIndex > 0 && (
                <button
                    onClick={onPrev}
                    className="absolute left-4 lg:left-8 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[#D07A2D] transition-colors duration-200 border border-white/20 hover:border-[#D07A2D]"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            )}

            {/* Next Button */}
            {currentIndex < images.length - 1 && (
                <button
                    onClick={onNext}
                    className="absolute right-4 lg:right-8 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-[#D07A2D] transition-colors duration-200 border border-white/20 hover:border-[#D07A2D]"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-16">
                <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
                    <Image
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}
