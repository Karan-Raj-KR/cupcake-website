import Link from "next/link";
import { Instagram, Youtube, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-brown text-cream py-12">
            <div className="container grid gap-8 md:grid-cols-4">
                {/* Brand */}
                <div className="space-y-4">
                    <h2 className="font-heading text-2xl font-bold">sure treat</h2>
                    <p className="text-cream/80 text-sm max-w-xs">
                        Homemade happiness baked fresh in Bangalore. We craft delicious cupcakes for your special moments.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4">Explore</h3>
                    <ul className="space-y-2 text-sm text-cream/80">
                        <li><Link href="/menu" className="hover:text-brand-pink transition-colors">Our Menu</Link></li>
                        <li><Link href="/gallery" className="hover:text-brand-pink transition-colors">Gallery</Link></li>
                        <li><Link href="/about" className="hover:text-brand-pink transition-colors">Our Story</Link></li>
                        <li><Link href="/contact" className="hover:text-brand-pink transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm text-cream/80">
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-brand-pink" />
                            <span>+91 80735 70693 / 90197 09995</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-brand-pink mt-0.5" />
                            <span>Bangalore, India</span>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/suretreat_cupcakes/" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-pink/10 rounded-full hover:bg-brand-pink/20 transition-colors text-brand-pink">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://www.youtube.com/@SuretreatCupcakes" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-pink/10 rounded-full hover:bg-brand-pink/20 transition-colors text-brand-pink">
                            <Youtube className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mt-12 pt-8 border-t border-cream/10 text-center text-xs text-cream/60">
                © {new Date().getFullYear()} sure treat. All rights reserved.
            </div>
        </footer>
    );
}
