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

                <div className="max-w-2xl mx-auto">

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
                                        <p className="text-brand-brown/70">+91 80735 70693</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-pink/10 rounded-full text-brand-accent">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-brown">Location</p>
                                        <p className="text-brand-brown/70">Bangalore, Karnataka</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-pink/10 rounded-full text-brand-accent">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-brown">Working Hours</p>
                                        <p className="text-brand-brown/70">We accept orders anytime on WhatsApp</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-brand-brown/10">
                                <Button
                                    onClick={() => window.open("https://wa.me/918073570693", "_blank")}
                                    className="w-full gap-2"
                                    size="lg"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <WhatsAppFloating />
            <Footer />
        </main>
    );
}
