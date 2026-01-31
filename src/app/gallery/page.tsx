import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import Image from "next/image";

// Extended gallery images
const GALLERY_IMAGES = [
    "https://images.unsplash.com/photo-1563729784474-d779b9596388?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=800", // Red Velvet
    "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&q=80&w=800", // Chocolate
    "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800", // Vanilla
    "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&q=80&w=800", // Coffee
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800", // Wedding
    "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=800", // Strawberry
    "https://images.unsplash.com/photo-1563729784474-d779b9596388?auto=format&fit=crop&q=80&w=800", // Party
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
