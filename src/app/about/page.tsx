import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import Image from "next/image";
import { Heart, Sparkles, ChefHat } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col font-sans bg-cream">
            <Navbar />

            <div className="flex-1">

                {/* Hero / Story Section */}
                <section className="py-20 container">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/about-baking.png"
                                alt="Couple baking together"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 space-y-6">
                            <span className="text-brand-accent font-medium tracking-wide uppercase text-sm">Our Story</span>
                            <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-brown">
                                Baking Happiness, <br /> One Cupcake at a Time
                            </h1>
                            <p className="text-lg text-brand-brown/80 leading-relaxed">
                                Hi! We are the couple behind <span className="font-bold text-brand-accent">suretreat</span>.
                                What started as a small home kitchen experiment has grown into a passion for sharing sweetness with Bangalore.
                            </p>
                            <p className="text-brand-brown/70 leading-relaxed">
                                We believe that the best desserts are made with real ingredients and a lot of heart. No preservatives, no pre-mixes—just pure, homemade goodness baked fresh for every order.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-brand-pink/10">
                    <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-brown/5">
                            <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
                                <Heart className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-brand-brown mb-2">Handmade with Love</h3>
                            <p className="text-brand-brown/70 text-sm">Every single cupcake is piped and decorated by hand in our small kitchen.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-brown/5">
                            <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-brand-brown mb-2">Preservative Free</h3>
                            <p className="text-brand-brown/70 text-sm">We use only fresh, high-quality ingredients. No nasties, just taste.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-brand-brown/5">
                            <div className="w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
                                <ChefHat className="h-6 w-6" />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-brand-brown mb-2">Vegetarian Friendly</h3>
                            <p className="text-brand-brown/70 text-sm">100% Eggless options available that are just as fluffy and delicious.</p>
                        </div>
                    </div>
                </section>

            </div>

            <WhatsAppFloating />
            <Footer />
        </main>
    );
}
