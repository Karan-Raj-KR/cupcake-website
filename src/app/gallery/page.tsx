import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import Image from "next/image";

// Extended gallery images
const GALLERY_IMAGES = [
    "/images/hero-bg.png",
    "/images/red-velvet.png", // Red Velvet
    "/images/double-chocolate.png", // Chocolate
    "/images/vanilla-bean.png", // Vanilla
    "/images/strawberry-fields.png", // Strawberry
    "/images/salted-caramel.png", // Salted Caramel
    "/images/blueberry-burst.png", // Blueberry
    "/images/lemon-zest.png", // Lemon
    "/images/coffee-walnut.png", // Coffee
    "/images/birthday-box.png", // Birthday
    "/images/wedding-hampers.png", // Wedding
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen flex flex-col font-sans bg-cream">
            <Navbar />

            <div className="flex-1 container py-12">
                <header className="mb-12 text-center">
                    <h1 className="font-heading text-5xl font-bold text-brand-brown mb-4">Gallery</h1>
                    <p className="text-brand-brown/70 max-w-2xl mx-auto">
                        A glimpse into our kitchen. From birthday parties to wedding favors, we bake happiness for every occasion.
                    </p>
                </header>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                    {GALLERY_IMAGES.map((src, i) => (
                        <div key={i} className="relative overflow-hidden rounded-2xl break-inside-avoid">
                            <Image
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <WhatsAppFloating />
            <Footer />
        </main>
    );
}
