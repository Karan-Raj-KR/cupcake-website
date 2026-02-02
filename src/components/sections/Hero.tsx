"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-brand-pink/20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Delicious Cupcakes"
                    fill
                    className="object-cover opacity-90 brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 flex h-full flex-col justify-center text-center text-white md:text-left md:items-start md:max-w-4xl">
                <span className="mb-4 inline-block px-4 py-1 rounded-full bg-brand-accent/20 backdrop-blur-sm border border-brand-accent/30 text-sm font-medium tracking-wide text-brand-pink">
                    Freshly Baked • Delivery in & around Bangalore
                </span>
                <h1 className="mb-6 font-heading text-5xl font-bold leading-tight md:text-7xl">
                    A Cupcake For <br />
                    <span className="text-brand-pink">Every Sweet Occasion</span>
                </h1>
                <p className="mb-8 max-w-lg text-lg text-white/90 md:text-xl font-light">
                    Home Made Frosted, Unfrosted & Customized Cupcakes. Handcrafted with love, fresh ingredients, and zero preservatives.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/menu">
                        <Button size="lg" className="w-full sm:w-auto shadow-xl bg-brand-accent hover:bg-brand-accent/90 border-transparent text-white">
                            View Our Menu
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-brand-brown">
                            Order Custom Box
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
