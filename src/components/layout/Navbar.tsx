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
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.266c0-5.42 4.409-9.83 9.829-9.83 2.625 0 5.093 1.022 6.947 2.877 1.854 1.855 2.876 4.323 2.876 6.948 0 5.421-4.405 9.834-9.818 9.834m12.042-19.168a12.042 12.042 0 00-12.041 12.042 12.029 12.029 0 001.691 6.13l-1.8 6.57 6.744-1.74a12.024 12.024 0 005.405 1.284l.004-.001a12.041 12.041 0 0012.041-12.042 12.041 12.041 0 00-12.043-12.243" />
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
