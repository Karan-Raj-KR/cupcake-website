import { Star } from "lucide-react";

const REVIEWS = [
    {
        id: 1,
        name: "Priya S.",
        text: "The Red Velvet cupcakes are to die for! Ordered them for my daughter's birthday and everyone loved them. So fresh!",
        rating: 5,
    },
    {
        id: 2,
        name: "Rahul M.",
        text: "Best home bakers in Bangalore. The customized box they made for our anniversary was perfect. Not too sweet, just right.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sneha K.",
        text: "I love that they don't use preservatives. My kids love the chocolate ones. Highly recommended/10!",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-brand-pink/10">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-medium tracking-wide uppercase text-sm">Customer Love</span>
                    <h2 className="font-heading text-4xl font-bold text-brand-brown mt-2">What Our Customers Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-brown/5">
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                                ))}
                            </div>
                            <p className="text-brand-brown/80 mb-6 italic leading-relaxed">"{review.text}"</p>
                            <div className="font-bold text-brand-brown">{review.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
