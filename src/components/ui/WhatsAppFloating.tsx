"use client";


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
            <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.266c0-5.42 4.409-9.83 9.829-9.83 2.625 0 5.093 1.022 6.947 2.877 1.854 1.855 2.876 4.323 2.876 6.948 0 5.421-4.405 9.834-9.818 9.834m12.042-19.168a12.042 12.042 0 00-12.041 12.042 12.029 12.029 0 001.691 6.13l-1.8 6.57 6.744-1.74a12.024 12.024 0 005.405 1.284l.004-.001a12.041 12.041 0 0012.041-12.042 12.041 12.041 0 00-12.043-12.243" />
            </svg>
            <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
    );
}
