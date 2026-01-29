import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail } from "lucide-react";

const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <Image
                            src="/images/logo.webp"
                            alt="RNE Real Estate Media"
                            width={180}
                            height={56}
                            className="h-12 w-auto mb-6"
                        />
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            Premium real estate media services for agents and builders across
                            the DFW metroplex. Photography, videography, drone, 3D tours, and
                            more.
                        </p>
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
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 flex items-center justify-center">
                            <Image
                                src="/images/logo.webp"
                                alt="RNE"
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain opacity-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
