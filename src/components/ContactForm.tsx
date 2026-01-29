import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    return (
        <section id="contact" className="py-16 lg:py-24 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#D07A2D] mb-4">
                        Start Your Project
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Get a Quote
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Ready to elevate your listings?
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Fill out the form and we'll get back to you within a few hours
                                with a custom quote tailored to your property and needs. Prefer
                                to talk? Give us a call.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <a
                                href="tel:+19403279977"
                                className="flex items-center gap-4 text-gray-300 hover:text-[#D07A2D] transition-colors duration-200"
                            >
                                <div className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#D07A2D]/50 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Call Us</p>
                                    <p className="font-medium">(940) 327-9977</p>
                                </div>
                            </a>

                            <a
                                href="mailto:RNEMedia@outlook.com"
                                className="flex items-center gap-4 text-gray-300 hover:text-[#D07A2D] transition-colors duration-200"
                            >
                                <div className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-[#D07A2D]/50 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Us</p>
                                    <p className="font-medium">RNEMedia@outlook.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 flex items-center justify-center border border-white/10">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Service Area</p>
                                    <p className="font-medium">
                                        Parker, Tarrant, Wise, Palo Pinto & DFW
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-[#111] border border-white/5 p-8 lg:p-10">
                        <form
                            name="quote"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            action="/thank-you"
                        >
                            {/* Hidden fields for Netlify */}
                            <input type="hidden" name="form-name" value="quote" />
                            <input name="bot-field" className="hidden" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Full Name <span className="text-[#D07A2D]">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="bg-black/50 border-white/10 focus:border-[#D07A2D] rounded-none text-white placeholder:text-gray-600"
                                        placeholder="John Smith"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Phone <span className="text-[#D07A2D]">*</span>
                                    </label>
                                    <Input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="bg-black/50 border-white/10 focus:border-[#D07A2D] rounded-none text-white placeholder:text-gray-600"
                                        placeholder="(555) 555-5555"
                                    />
                                </div>

                                {/* Email */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Email <span className="text-[#D07A2D]">*</span>
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="bg-black/50 border-white/10 focus:border-[#D07A2D] rounded-none text-white placeholder:text-gray-600"
                                        placeholder="you@email.com"
                                    />
                                </div>

                                {/* Company */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Company
                                    </label>
                                    <Input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="bg-black/50 border-white/10 focus:border-[#D07A2D] rounded-none text-white placeholder:text-gray-600"
                                        placeholder="Your Brokerage / Company"
                                    />
                                </div>

                                {/* Property Address */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Property Address
                                    </label>
                                    <Input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="bg-black/50 border-white/10 focus:border-[#D07A2D] rounded-none text-white placeholder:text-gray-600"
                                        placeholder="123 Main St, City, TX 75000"
                                    />
                                </div>

                                {/* Property Type */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <label
                                        htmlFor="property-type"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Property Type
                                    </label>
                                    <select
                                        id="property-type"
                                        name="property-type"
                                        className="w-full h-10 bg-black/50 border border-white/10 focus:border-[#D07A2D] rounded-none text-white px-3"
                                    >
                                        <option value="">Select type...</option>
                                        <option value="residential">Residential</option>
                                        <option value="commercial">Commercial</option>
                                    </select>
                                </div>

                                {/* Timeline */}
                                <div className="sm:col-span-2 lg:col-span-1">
                                    <label
                                        htmlFor="timeline"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Timeline
                                    </label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        className="w-full h-10 bg-black/50 border border-white/10 focus:border-[#D07A2D] rounded-none text-white px-3"
                                    >
                                        <option value="">Select timeline...</option>
                                        <option value="asap">ASAP</option>
                                        <option value="this-week">This Week</option>
                                        <option value="next-2-weeks">Next 2 Weeks</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>

                                {/* Services Needed */}
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-300 mb-3">
                                        Services Needed
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {[
                                            "Photography",
                                            "Drone Services",
                                            "3D Tour",
                                            "3D Tour + Floor Plan",
                                            "Virtual Staging",
                                        ].map((service) => (
                                            <label
                                                key={service}
                                                className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-white transition-colors"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name="services"
                                                    value={service.toLowerCase().replace(/ /g, "-")}
                                                    className="w-4 h-4 rounded-none border-white/20 bg-transparent text-[#D07A2D] focus:ring-[#D07A2D] focus:ring-offset-0"
                                                />
                                                {service}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Notes */}
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="notes"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Additional Notes
                                    </label>
                                    <Textarea
                                        id="notes"
                                        name="notes"
                                        rows={4}
                                        className="bg-black/50 border-white/10 focus:border-[#D07A2D] rounded-none text-white placeholder:text-gray-600 resize-none"
                                        placeholder="Tell us more about your project..."
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full mt-8 bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none py-6 text-base font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,122,45,0.4)]"
                            >
                                Request Quote
                            </Button>

                            {/* Phone CTA */}
                            <p className="text-center mt-6 text-gray-500">
                                Or call now:{" "}
                                <a
                                    href="tel:+19403279977"
                                    className="text-[#D07A2D] hover:underline"
                                >
                                    (940) 327-9977
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
