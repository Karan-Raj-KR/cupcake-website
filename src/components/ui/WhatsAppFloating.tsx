"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppFloatingProps {
    phoneNumber?: string;
    message?: string;
}

export function WhatsAppFloating({
    phoneNumber = "919876543210",
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
                "bg-green-500 text-white px-4 py-3 shadow-lg transition-transform hover:scale-105 hover:bg-green-600",
                "font-medium border-2 border-white"
            )}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="h-6 w-6 fill-current" />
            <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
    );
}
