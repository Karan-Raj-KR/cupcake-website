"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Product } from "@/data/menu";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const handleOrder = () => {
        const message = `Hi! I'm interested in ordering the ${product.name} (${product.price}).`;
        const url = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md border border-brand-brown/5">
            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.isBestseller && (
                    <div className="absolute top-3 right-3 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        Bestseller
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="mb-2 flex items-start justify-between">
                    <div>
                        <h3 className="font-heading text-lg font-bold text-brand-brown line-clamp-1">
                            {product.name}
                        </h3>
                        <p className="text-xs text-brand-brown/60 font-medium uppercase tracking-wide">
                            {product.category}
                        </p>
                    </div>
                    <span className="text-sm font-semibold text-brand-accent">
                        {product.price.split("/")[0]}
                    </span>
                </div>

                <p className="mb-4 text-sm text-brand-brown/70 line-clamp-2">
                    {product.description}
                </p>

                <Button
                    onClick={handleOrder}
                    variant="outline"
                    className="w-full gap-2 border-brand-pink text-brand-accent hover:bg-brand-pink/10 hover:border-brand-accent"
                    size="sm"
                >
                    <MessageCircle className="h-4 w-4" />
                    Order Now
                </Button>
            </div>
        </div>
    );
}
