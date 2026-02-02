"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-brand-brown/10 bg-cream/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-heading text-2xl font-bold text-brand-brown">
                    sure treat
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-brand-brown/80 transition-colors hover:text-brand-accent"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        className="ml-4 gap-2"
                        onClick={() => window.open("https://wa.me/918073570693?text=Hi!%20I%20would%20like%20to%20order%20cupcakes.", "_blank")}
                    >
                        <ShoppingBag className="h-4 w-4" />
                        Order Now
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-brand-brown hover:bg-brand-brown/5 rounded-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-brand-brown/10 bg-cream">
                    <div className="container flex flex-col py-4 gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-md px-4 py-3 text-sm font-medium text-brand-brown hover:bg-brand-brown/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-4 py-2">
                            <Button
                                className="w-full gap-2 bg-white text-green-600 hover:bg-gray-50 border border-brand-brown/10 shadow-sm"
                                size="lg"
                                onClick={() => window.open("https://wa.me/918073570693?text=Hi!%20I%20would%20like%20to%20order%20cupcakes.", "_blank")}
                            >
                                <div className="relative h-6 w-6">
                                    <Image
                                        src="/images/whatsapp-logo.png"
                                        alt="WhatsApp"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                Order on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
