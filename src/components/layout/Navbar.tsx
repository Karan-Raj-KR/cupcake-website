"use client";

import * as React from "react";
import Link from "next/link";
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
                    <Button size="sm" className="ml-4 gap-2">
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
                            <Button className="w-full gap-2" size="lg">
                                <svg
                                    className="h-5 w-5 fill-current"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.974 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.026 8.977-8.974a8.966 8.966 0 0 0-2.627-6.353zm-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461 4.115 0 7.461 3.346 7.463 7.461a7.463 7.463 0 0 1-7.466 7.468zm4.087-5.587c-.224-.112-1.322-.653-1.527-.728-.204-.075-.353-.112-.502.112-.149.224-.578.728-.708.877-.13.149-.261.168-.484.056-.224-.112-.945-.349-1.801-1.113-.667-.597-1.117-1.334-1.248-1.558-.13-.224-.014-.345.098-.456.101-.1.224-.261.335-.391.112-.13.149-.224.224-.373.075-.149.037-.28-.019-.391-.056-.112-.502-1.21-.688-1.657-.182-.437-.367-.378-.502-.385l-.428-.007c-.149 0-.391.056-.596.28-.204.224-.783.765-.783 1.865 0 1.1.801 2.162.913 2.311.112.149 1.577 2.408 3.818 3.374.533.229.949.366 1.274.469.539.172 1.029.148 1.416.09.432-.064 1.322-.54 1.508-1.061.187-.521.187-.969.131-1.061-.056-.092-.204-.149-.428-.261z"
                                    />
                                </svg>
                                Order on WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
