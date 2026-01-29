import { Card } from "@/components/ui/card";
import {
    Camera,
    Video,
    Plane,
    View,
    LayoutGrid,
    Wand2,
} from "lucide-react";

const services = [
    {
        icon: Camera,
        title: "Real Estate Photography",
        description:
            "Professional HDR photography that showcases every property in its best light. MLS-ready files delivered fast.",
    },
    {
        icon: Video,
        title: "Real Estate Videography",
        description:
            "Cinematic property tours that captivate buyers and drive engagement. Perfect for high-end listings.",
    },
    {
        icon: Plane,
        title: "Drone Media",
        description:
            "Aerial photography and video that reveals the full scope of properties and surrounding areas.",
    },
    {
        icon: View,
        title: "3D / 360 Tours",
        description:
            "Immersive virtual tours that let buyers explore properties from anywhere, anytime.",
    },
    {
        icon: LayoutGrid,
        title: "Floor Plans",
        description:
            "Accurate, professionally designed floor plans that help buyers visualize space and flow.",
    },
    {
        icon: Wand2,
        title: "Virtual Staging",
        description:
            "Transform empty rooms into beautifully furnished spaces. Cost-effective alternative to physical staging.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 lg:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        What We Offer
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Our Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive real estate media solutions designed to make your
                        listings stand out in a competitive market.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Card
                            key={service.title}
                            className="group bg-[#111] border-white/5 hover:border-[#D07A2D]/30 rounded-none p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(208,122,45,0.1)]"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center border border-white/10 group-hover:border-[#D07A2D]/50 transition-colors duration-300 mb-6">
                                <service.icon className="w-7 h-7 text-[#D07A2D]" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
