export interface GalleryData {
    title: string;
    slug: string;
    description: string;
    imageCount: number;
    folder: string;
}

export const galleries: Record<string, GalleryData> = {
    "commercial-exterior": {
        title: "Commercial Exterior Gallery",
        slug: "commercial-exterior",
        description:
            "Professional exterior photography showcasing commercial properties, storefronts, and business locations.",
        imageCount: 9,
        folder: "commercial-exterior-gallery",
    },
    "commercial-interior": {
        title: "Commercial Interior Gallery",
        slug: "commercial-interior",
        description:
            "High-quality interior photography for offices, retail spaces, restaurants, and commercial venues.",
        imageCount: 10,
        folder: "commercial-interior-gallery",
    },
    "residential-exterior": {
        title: "Residential Exterior Gallery",
        slug: "residential-exterior",
        description:
            "Stunning exterior photography that captures the curb appeal of homes and residential properties.",
        imageCount: 6,
        folder: "residential-exterior-gallery",
    },
    "residential-interior": {
        title: "Residential Interior Gallery",
        slug: "residential-interior",
        description:
            "Beautiful interior photography showcasing living spaces, kitchens, bedrooms, and home features.",
        imageCount: 11,
        folder: "residential-interior-gallery",
    },
};

export function getGalleryImages(folder: string, count: number): string[] {
    return Array.from({ length: count }, (_, i) => `/images/${folder}/${i + 1}.webp`);
}
