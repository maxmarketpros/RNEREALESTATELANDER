"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Facebook } from "lucide-react";

const quickLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#process", label: "Process" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <div className="border border-white rounded-xl px-3 py-1 inline-block mb-6">
                            <Image
                                src="/images/logo.webp"
                                alt="RNE Real Estate Media"
                                width={180}
                                height={56}
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                            Premium real estate media services for Agents, Contractors & Investors across
                            the DFW metroplex. Photography, videography, drone, 3D tours, and
                            more.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex items-center gap-4">

                            <a
                                href="https://www.facebook.com/share/1FG8gZMeKr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D07A2D] hover:bg-[#D07A2D]/10 transition-all duration-300 group"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-[#D07A2D]" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
                            Quick Links
                        </h4>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-gray-400 hover:text-[#D07A2D] transition-colors duration-200 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+19403279977"
                                onClick={() => (window as any).gtag_report_conversion && (window as any).gtag_report_conversion("tel:+19403279977")}
                                className="flex items-center gap-3 text-gray-400 hover:text-[#D07A2D] transition-colors duration-200 text-sm"
                            >
                                <Phone className="w-4 h-4" />
                                (940) 327-9977
                            </a>
                            <a
                                href="mailto:RNEMedia@outlook.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-[#D07A2D] transition-colors duration-200 text-sm"
                            >
                                <Mail className="w-4 h-4" />
                                RNEMedia@outlook.com
                            </a>
                            <div className="pt-4">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                                    Service Areas
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Parker, Tarrant, Wise, Palo Pinto & surrounding DFW areas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-10 bg-white/5" />

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} RNE Real Estate Media. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">

                        <a
                            href="https://www.facebook.com/share/1FG8gZMeKr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#D07A2D] transition-colors duration-200"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
