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
                                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.98a9.92 9.92 0 001.35 4.814L2 22l5.352-1.396a9.948 9.948 0 004.66 1.166h.004c5.505 0 9.988-4.478 9.989-9.981 0-5.504-4.483-9.982-9.993-9.989zm0 18.286h-.003a8.27 8.27 0 01-4.218-1.155l-.302-.179-3.134.817.837-3.05-.196-.312a8.293 8.293 0 01-1.27-4.43c.002-4.57 3.722-8.286 8.297-8.286 4.572 0 8.287 3.714 8.29 8.286a8.297 8.297 0 01-8.3 8.29zm4.545-6.204c-.249-.125-1.474-.726-1.703-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.974-.145.166-.29.187-.539.062-.249-.124-1.05-.386-2-1.231-.736-.656-1.233-1.466-1.378-1.715-.145-.248-.016-.382.109-.506.112-.112.249-.29.373-.435.124-.145.166-.249.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.427h-.477c-.166 0-.435.062-.663.31-.228.25-1.01 1 .01 2.441.67-.091 2.214-1.121 4.29-1.233 4.503.245.45.39.81.393 1.25.04.53-.19 1.14-.19 1.14.33 1.35.435.29.35.02.66-.02.66-.41.66-.62.58-.12.2-.12.39-.24.51z" />
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
