import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-cream text-center p-4">
            <h1 className="text-9xl font-heading font-bold text-brand-pink/50">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-brand-brown">Oops! Page Not Found</h2>
            <p className="mt-2 text-brand-brown/70 max-w-md">
                It seems you've wandered off the menu. Don't worry, there are plenty of cupcakes back home.
            </p>
            <Link href="/" className="mt-8">
                <Button size="lg">Return Home</Button>
            </Link>
        </div>
    );
}
