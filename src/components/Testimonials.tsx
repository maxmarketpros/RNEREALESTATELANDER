import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "The quality of their work is outstanding. Our listings get more attention and sell faster with RNE's photography and video.",
        name: "Sarah Mitchell",
        role: "Real Estate Agent",
    },
    {
        quote:
            "Professional, punctual, and the final product always exceeds expectations. They understand what makes a property shine.",
        name: "Michael Torres",
        role: "Luxury Home Builder",
    },
    {
        quote:
            "Fast turnaround without sacrificing quality. The drone footage and 3D tours have become essential for our high-end listings.",
        name: "Jennifer Hayes",
        role: "Commercial Real Estate Broker",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 lg:py-24 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        Client Feedback
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        What Clients Say
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="bg-[#111] border-white/5 hover:border-[#D07A2D]/20 rounded-none p-8 transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-8 h-8 text-[#D07A2D]/30 mb-6" />

                            {/* Quote Text */}
                            <p className="text-gray-300 leading-relaxed mb-8 italic">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="border-t border-white/5 pt-6">
                                <p className="font-semibold text-white">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
