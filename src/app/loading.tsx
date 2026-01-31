import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-cream/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-brand-accent" />
                <p className="font-heading font-bold text-brand-brown animate-pulse">Baking...</p>
            </div>
        </div>
    );
}
