"use client";


import Image from "next/image";
import { cn } from "@/lib/utils";

interface WhatsAppFloatingProps {
    phoneNumber?: string;
    message?: string;
}

export function WhatsAppFloating({
    phoneNumber = "918073570693",
    message = "Hi! I would like to order cupcakes."
}: WhatsAppFloatingProps) {

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className={cn(
                "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full",
                "bg-white text-green-600 px-4 py-3 shadow-xl transition-transform hover:scale-105 hover:bg-gray-50",
                "font-bold border border-gray-100 ring-1 ring-black/5"
            )}
            aria-label="Chat on WhatsApp"
        >
            <div className="relative h-8 w-8">
                <Image
                    src="/images/whatsapp-logo.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                />
            </div>
            <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
    );
}
