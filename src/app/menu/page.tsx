import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/menu";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";

export default function MenuPage() {
    const classics = PRODUCTS.filter((p) => p.category === "Classics");
    const premium = PRODUCTS.filter((p) => p.category === "Premium");
    const custom = PRODUCTS.filter((p) => p.category === "Custom Box");

    return (
        <main className="min-h-screen flex flex-col font-sans bg-cream">
            <Navbar />

            <div className="flex-1 container py-12">
                <header className="mb-12 text-center">
                    <h1 className="font-heading text-5xl font-bold text-brand-brown mb-4">Our Menu</h1>
                    <p className="text-brand-brown/70 max-w-2xl mx-auto">
                        Freshly baked daily. Browse our selection of classic favors, premium delights, and custom gift boxes.
                    </p>
                </header>

                {/* Section: Classics */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-heading text-3xl font-bold text-brand-brown">Classics</h2>
                        <div className="h-px bg-brand-brown/10 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {classics.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>

                {/* Section: Premium */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-heading text-3xl font-bold text-brand-brown">Premium Selection</h2>
                        <div className="h-px bg-brand-brown/10 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {premium.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>

                {/* Section: Custom */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-heading text-3xl font-bold text-brand-brown">Custom & Gifting</h2>
                        <div className="h-px bg-brand-brown/10 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {custom.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </section>

            </div>

            <WhatsAppFloating />
            <Footer />
        </main>
    );
}
