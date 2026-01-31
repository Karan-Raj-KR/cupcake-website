import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/menu";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Featured() {
    const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

    return (
        <section className="py-20 bg-cream">
            <div className="container">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="font-heading text-4xl font-bold text-brand-brown mb-2">Our Bestsellers</h2>
                        <p className="text-brand-brown/60">Customer favorites you must try.</p>
                    </div>
                    <Link
                        href="/menu"
                        className="hidden md:flex items-center gap-2 text-brand-accent font-medium hover:underline underline-offset-4"
                    >
                        View Full Menu <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {bestsellers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-2 text-brand-accent font-medium hover:underline underline-offset-4"
                    >
                        View Full Menu <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
