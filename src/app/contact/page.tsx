"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { Button } from "@/components/ui/Button";
import { MessageCircle, MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col font-sans bg-cream">
            <Navbar />

            <div className="flex-1 container py-12">
                <header className="mb-12 text-center">
                    <h1 className="font-heading text-5xl font-bold text-brand-brown mb-4">Contact Us</h1>
                    <p className="text-brand-brown/70 max-w-xl mx-auto">
                        Ready to order or have a question? We'd love to hear from you.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-brown/5">
                            <h3 className="font-heading text-2xl font-bold text-brand-brown mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-pink/10 rounded-full text-brand-accent">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-brown">WhatsApp / Call</p>
                                        <p className="text-brand-brown/70">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-pink/10 rounded-full text-brand-accent">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-brown">Location</p>
                                        <p className="text-brand-brown/70">Bangalore, Karnataka</p>
                                        <p className="text-sm text-brand-brown/50 mt-1">(Near College Road)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-pink/10 rounded-full text-brand-accent">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-brown">Working Hours</p>
                                        <p className="text-brand-brown/70">Mon - Sat: 10:00 AM - 8:00 PM</p>
                                        <p className="text-brand-brown/70">Sun: Pre-orders only</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-brand-brown/10">
                                <Button
                                    onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                                    className="w-full gap-2"
                                    size="lg"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Map / Visual Placeholder */}
                    <div className="h-full min-h-[400px] bg-brand-brown/5 rounded-2xl overflow-hidden relative border border-brand-brown/5 flex items-center justify-center">
                        <div className="absolute inset-0 grayscale contrast-[0.9] opacity-50" suppressHydrationWarning>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908526272379!3d12.953959988118836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683884844444!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <WhatsAppFloating />
            <Footer />
        </main>
    );
}
