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
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.98a9.92 9.92 0 001.35 4.814L2 22l5.352-1.396a9.948 9.948 0 004.66 1.166h.004c5.505 0 9.988-4.478 9.989-9.981 0-5.504-4.483-9.982-9.993-9.989zm0 18.286h-.003a8.27 8.27 0 01-4.218-1.155l-.302-.179-3.134.817.837-3.05-.196-.312a8.293 8.293 0 01-1.27-4.43c.002-4.57 3.722-8.286 8.297-8.286 4.572 0 8.287 3.714 8.29 8.286a8.297 8.297 0 01-8.3 8.29zm4.545-6.204c-.249-.125-1.474-.726-1.703-.809-.228-.083-.394-.125-.56.125-.166.249-.643.809-.788.974-.145.166-.29.187-.539.062-.249-.124-1.05-.386-2-1.231-.736-.656-1.233-1.466-1.378-1.715-.145-.248-.016-.382.109-.506.112-.112.249-.29.373-.435.124-.145.166-.249.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.846-.202-.486-.407-.42-.56-.427h-.477c-.166 0-.435.062-.663.31-.228.25-1.01 1 .01 2.441.67-.091 2.214-1.121 4.29-1.233 4.503.245.45.39.81.393 1.25.04.53-.19 1.14-.19 1.14.33 1.35.435.29.35.02.66-.02.66-.41.66-.62.58-.12.2-.12.39-.24.51z" />
            </svg>
            <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
    );
}
