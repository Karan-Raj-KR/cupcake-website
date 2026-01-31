// Image References:
// Red Velvet: https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7
// Chocolate: https://images.unsplash.com/photo-1576618148400-f54bed99fcf8 (Broken? Replacing with 1599785209796-786432b228bc)
// Vanilla: https://images.unsplash.com/photo-1519869325930-281384150729
// Caramel: https://images.unsplash.com/photo-1599785209707-33671c6dc00e (Broken? Replacing with 1612201142855-7873bc1661b4 - Coffee/Caramel)
// Birthday: https://images.unsplash.com/photo-1563729784400-d29e36f90d15 (Broken? Replacing with 1557142046-c788cd36b552 - Partyish)

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category: "Classics" | "Premium" | "Custom Box";
    isBestseller?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Red Velvet Bliss",
        description: "Classic red velvet sponge with our signature cream cheese frosting.",
        price: "₹650 / box of 6",
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=800",
        category: "Classics",
        isBestseller: true,
    },
    {
        id: "2",
        name: "Double Chocolate",
        description: "Rich dark chocolate moist cupcake topped with ganache.",
        price: "₹700 / box of 6",
        image: "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&q=80&w=800",
        category: "Classics",
        isBestseller: true,
    },
    {
        id: "3",
        name: "Vanilla Bean Dream",
        description: "Light vanilla sponge with Madagascar vanilla buttercream.",
        price: "₹600 / box of 6",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
        category: "Classics",
    },
    {
        id: "4",
        name: "Salted Caramel",
        description: "Caramel filled cupcake with sea salt sprinkler.",
        price: "₹750 / box of 6",
        image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&q=80&w=800",
        category: "Premium",
        isBestseller: true,
    },
    {
        id: "5",
        name: "Blueberry Burst",
        description: "Fresh blueberries folded into the batter and frosting.",
        price: "₹750 / box of 6",
        image: "https://images.unsplash.com/photo-1595928607633-9134a6fb73d8?auto=format&fit=crop&q=80&w=800",
        category: "Premium",
    },
    {
        id: "6",
        name: "Lemon Zest",
        description: "Tangy lemon curd filling with zesty lemon frosting.",
        price: "₹650 / box of 6",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=800",
        category: "Classics",
    },
    {
        id: "7",
        name: "Coffee Walnut",
        description: "Espresso infused sponge with crunchy toppings.",
        price: "₹700 / box of 6",
        image: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&q=80&w=800",
        category: "Premium",
    },
    {
        id: "8",
        name: "Birthday Box",
        description: "Assorted mix of colorful cupcakes perfect for birthdays.",
        price: "₹800 / box of 6",
        image: "https://images.unsplash.com/photo-1563729784474-d779b9596388?auto=format&fit=crop&q=80&w=800",
        category: "Custom Box",
        isBestseller: true,
    },
    {
        id: "9",
        name: "Wedding Hampers",
        description: "Elegant white and gold themed cupcakes for weddings.",
        price: "Custom Pricing",
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800",
        category: "Custom Box",
    },
    {
        id: "10",
        name: "Strawberry Fields",
        description: "Seasonal fresh strawberry cupcakes.",
        price: "₹700 / box of 6",
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=800",
        category: "Premium",
    }
];
