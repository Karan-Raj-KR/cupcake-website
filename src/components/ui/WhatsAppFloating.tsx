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
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.29 16.6C17.29 16.6 20.93 14.5 19.46 12C18 9.5 16.5 9.5 16.5 9.5C16.5 9.5 15.5 8 13.5 10C11.5 12 12 14 12 14C12 14 10 16 8 14C6 12 6.5 9.5 6.5 9.5C6.5 9.5 5 9 6.5 6.5C8 4 10.5 4.5 10.5 4.5C10.5 4.5 11.5 2 9 2C6.5 2 3.5 7.5 5.5 11.5C7.5 15.5 12 19 16 17.5C18.42 16.6 17.29 16.6 17.29 16.6Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.974 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.026 8.977-8.974a8.966 8.966 0 0 0-2.627-6.353zm-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461 4.115 0 7.461 3.346 7.463 7.461a7.463 7.463 0 0 1-7.466 7.468zm4.087-5.587c-.224-.112-1.322-.653-1.527-.728-.204-.075-.353-.112-.502.112-.149.224-.578.728-.708.877-.13.149-.261.168-.484.056-.224-.112-.945-.349-1.801-1.113-.667-.597-1.117-1.334-1.248-1.558-.13-.224-.014-.345.098-.456.101-.1.224-.261.335-.391.112-.13.149-.224.224-.373.075-.149.037-.28-.019-.391-.056-.112-.502-1.21-.688-1.657-.182-.437-.367-.378-.502-.385l-.428-.007c-.149 0-.391.056-.596.28-.204.224-.783.765-.783 1.865 0 1.1.801 2.162.913 2.311.112.149 1.577 2.408 3.818 3.374.533.229.949.366 1.274.469.539.172 1.029.148 1.416.09.432-.064 1.322-.54 1.508-1.061.187-.521.187-.969.131-1.061-.056-.092-.204-.149-.428-.261z"
                />
            </svg>
            <span className="hidden sm:inline">Order on WhatsApp</span>
        </button>
    );
}
