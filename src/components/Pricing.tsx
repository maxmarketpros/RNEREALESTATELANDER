"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Plane, View, Wand2, Phone } from "lucide-react";

const pricingCategories = [
    {
        icon: Camera,
        title: "Photography",
        subtitle: "Inside & Outside Photos",
        tiers: [
            { size: "2500 & Under", price: "$215" },
            { size: "2500 - 4000", price: "$235" },
            { size: "4000 - 6000", price: "$260" },
            { size: "6000 & Up", price: "$275+" },
        ],
        unit: "sq ft",
    },
    {
        icon: Plane,
        title: "Drone Services",
        subtitle: "Aerial Photography",
        tiers: [
            { size: "5 Acres & Under", detail: "6 Aerial Images", price: "$200" },
            { size: "5 Acres & Up", detail: "10 Aerial Images", price: "$225" },
        ],
        addon: { name: "Property Outline & Highlight", price: "+$25" },
        unit: "acres",
    },
    {
        icon: View,
        title: "3D Tours & Floor Plans",
        subtitle: "Interactive Virtual Tours",
        tiers: [
            { size: "2500 & Under", tour: "$150", combo: "$175" },
            { size: "2500 - 4000", tour: "$200", combo: "$225" },
            { size: "4000 - 6000", tour: "$250", combo: "$275" },
            { size: "6000 & Up", tour: "$300+", combo: "$325+" },
        ],
        hasTwoColumns: true,
        unit: "sq ft",
    },
    {
        icon: Wand2,
        title: "Virtual Staging",
        subtitle: "Transform Empty Spaces",
        flatRate: "$40",
        perUnit: "per photo",
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 lg:py-24 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        Transparent Pricing
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Services & Pricing
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Quality real estate media at competitive rates. All packages include
                        professional editing and MLS-ready deliverables.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {/* Photography Card */}
                    <Card className="bg-[#111] border-white/5 hover:border-[#D07A2D]/30 rounded-none p-8 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-[#D07A2D]/50">
                                <Camera className="w-6 h-6 text-[#D07A2D]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Photography</h3>
                                <p className="text-sm text-gray-500">Inside & Outside Photos</p>
                            </div>
                        </div>

                        <div className="space-y-0">
                            <div className="flex justify-between text-xs text-gray-500 uppercase tracking-wider pb-3 border-b border-white/5">
                                <span>Size (sq ft)</span>
                                <span>Price</span>
                            </div>
                            {[
                                { size: "2500 & Under", price: "$215" },
                                { size: "2500 - 4000", price: "$235" },
                                { size: "4000 - 6000", price: "$260" },
                                { size: "6000 & Up", price: "$275+" },
                            ].map((tier, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between py-4 border-b border-white/5 last:border-0"
                                >
                                    <span className="text-gray-300">{tier.size}</span>
                                    <span className="text-white font-semibold">{tier.price}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Drone Services Card */}
                    <Card className="bg-[#111] border-white/5 hover:border-[#D07A2D]/30 rounded-none p-8 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-[#D07A2D]/50">
                                <Plane className="w-6 h-6 text-[#D07A2D]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">Drone Services</h3>
                                <p className="text-sm text-gray-500">Aerial Photography</p>
                            </div>
                        </div>

                        <div className="space-y-0">
                            <div className="flex justify-between text-xs text-gray-500 uppercase tracking-wider pb-3 border-b border-white/5">
                                <span>Size (Acres)</span>
                                <span>Price</span>
                            </div>
                            {[
                                { size: "5 Acres & Under", detail: "6 Aerial Images", price: "$200" },
                                { size: "5 Acres & Up", detail: "10 Aerial Images", price: "$225" },
                            ].map((tier, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between py-4 border-b border-white/5"
                                >
                                    <div>
                                        <span className="text-gray-300">{tier.size}</span>
                                        <span className="text-gray-500 text-sm ml-2">({tier.detail})</span>
                                    </div>
                                    <span className="text-white font-semibold">{tier.price}</span>
                                </div>
                            ))}
                            <div className="flex justify-between py-4 bg-white/5 -mx-8 px-8 mt-4">
                                <span className="text-gray-400">Property Outline & Highlight</span>
                                <span className="text-[#D07A2D] font-semibold">+$25</span>
                            </div>
                        </div>
                    </Card>

                    {/* 3D Tours & Floor Plans Card */}
                    <Card className="bg-[#111] border-white/5 hover:border-[#D07A2D]/30 rounded-none p-8 transition-all duration-300 md:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center border border-[#D07A2D]/50">
                                <View className="w-6 h-6 text-[#D07A2D]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">3D Tours & Floor Plans</h3>
                                <p className="text-sm text-gray-500">Interactive Virtual Tours</p>
                            </div>
                        </div>

                        <div className="space-y-0">
                            <div className="grid grid-cols-3 text-xs text-gray-500 uppercase tracking-wider pb-3 border-b border-white/5">
                                <span>Size (sq ft)</span>
                                <span className="text-center">3D Tour Only</span>
                                <span className="text-right">3D Tour + Floor Plan</span>
                            </div>
                            {[
                                { size: "2500 & Under", tour: "$150", combo: "$175" },
                                { size: "2500 - 4000", tour: "$200", combo: "$225" },
                                { size: "4000 - 6000", tour: "$250", combo: "$275" },
                                { size: "6000 & Up", tour: "$300+", combo: "$325+" },
                            ].map((tier, idx) => (
                                <div
                                    key={idx}
                                    className="grid grid-cols-3 py-4 border-b border-white/5 last:border-0"
                                >
                                    <span className="text-gray-300">{tier.size}</span>
                                    <span className="text-white font-semibold text-center">{tier.tour}</span>
                                    <span className="text-white font-semibold text-right">{tier.combo}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-white/5">
                            <Button
                                asChild
                                className="flex-1 bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none text-sm"
                            >
                                <a href="#contact">Get a Quote</a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="flex-1 border-white/20 text-white hover:bg-white/5 hover:border-[#D07A2D] rounded-none text-sm"
                            >
                                <a href="tel:+19403279977" onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion("tel:+19403279977")} className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    (940) 327-9977
                                </a>
                            </Button>
                        </div>
                    </Card>

                    {/* Virtual Staging Card */}
                    <Card className="bg-[#111] border-[#D07A2D] rounded-none p-8 transition-all duration-300 md:col-span-2 shadow-[0_0_30px_rgba(208,122,45,0.1)]">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex items-center justify-center border border-[#D07A2D]/50">
                                    <Wand2 className="w-6 h-6 text-[#D07A2D]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">Virtual Staging</h3>
                                    <p className="text-sm text-gray-500">Transform Empty Spaces Into Styled Rooms</p>
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-white">$40</span>
                                <span className="text-gray-500">per photo</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Combo Deals Banner */}
                <div className="mt-10 p-6 border border-[#D07A2D]/50 bg-[#D07A2D]/5 text-center">
                    <p className="text-lg font-semibold text-white mb-2">
                        ✦ Ask About Our Combo Deals ✦
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                        Bundle services together and save. Contact us for custom package pricing.
                    </p>
                    <Button
                        asChild
                        className="bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
                    >
                        <a href="#contact">Get a Custom Quote</a>
                    </Button>
                </div>

                {/* Note */}
                <p className="text-center text-gray-500 text-sm mt-8">
                    All prices are starting rates. Final pricing may vary based on property specifics and location.
                </p>
            </div>
        </section>
    );
}
