"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-black/95 backdrop-blur-sm border-b border-[#D07A2D]/30"
                    : "bg-transparent"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/images/logo.webp"
                                alt="RNE Real Estate Media"
                                width={192}
                                height={60}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 tracking-wide uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Button
                                variant="outline"
                                asChild
                                className="border-[#D07A2D] text-[#D07A2D] hover:bg-[#D07A2D] hover:text-white rounded-none px-5 py-2 text-sm font-medium tracking-wide transition-all duration-200"
                            >
                                <a href="tel:+19403279977" className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    (940) 327-9977
                                </a>
                            </Button>
                            <Button
                                asChild
                                className="bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none px-6 py-2 text-sm font-medium tracking-wide transition-all duration-200"
                            >
                                <a href="#contact">Get a Quote</a>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Orange accent line when scrolled */}
                {isScrolled && (
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D07A2D] to-transparent" />
                )}
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div
                        className="fixed inset-0 bg-black/80"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="fixed top-20 right-0 bottom-0 w-72 bg-[#0A0A0A] border-l border-[#D07A2D]/20 p-6">
                        <nav className="flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-[#D07A2D] transition-colors duration-200 tracking-wide uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-white/10 space-y-4">
                                <Button
                                    variant="outline"
                                    asChild
                                    className="w-full border-[#D07A2D] text-[#D07A2D] hover:bg-[#D07A2D] hover:text-white rounded-none"
                                >
                                    <a
                                        href="tel:+19403279977"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <Phone className="h-4 w-4" />
                                        (940) 327-9977
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    className="w-full bg-[#D07A2D] hover:bg-[#B86A25] text-white rounded-none"
                                >
                                    <a
                                        href="#contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Get a Quote
                                    </a>
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
