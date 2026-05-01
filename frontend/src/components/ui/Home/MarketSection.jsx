import ProductCard from "../../layout/ProductCard";
import RevealItem from "../RevealItem";

const PRODUCTS = [
    { id: 1, name: "Cherry Tomatoes", price: 150, unit: "1kg", category: "Vegetables", image: "https://images.unsplash.com/photo-1559740509-8202abdaa7df?w=600&q=80", farmer: "Juan dela Cruz", badge: "Just Harvested" },
    { id: 2, name: "Organic Carrots", price: 120, unit: "1kg", category: "Vegetables", image: "https://images.unsplash.com/photo-1554223745-ad862492c213?w=600&q=80", farmer: "Maria Santos", badge: "Organic" },
    { id: 3, name: "Fresh Lettuce", price: 90, unit: "500g", category: "Vegetables", image: "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?w=600&q=80", farmer: "Pedro Reyes" },
    { id: 4, name: "Sweet Corn", price: 60, unit: "3 pcs", category: "Grains", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80", farmer: "Rosa Cruz", badge: "Seasonal" },
    { id: 5, name: "Carabao Mango", price: 200, unit: "1kg", category: "Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80", farmer: "Luis Garcia" },
    { id: 6, name: "Free Range Eggs", price: 180, unit: "12 pcs", category: "Poultry", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=600&q=80", farmer: "Elena Torres", badge: "Free Range" },
];

export default function MarketSection({ cart, setCart }) {

    const addToCart = (product) => {
        setCart(prev => {
        const existing = prev.find(i => i.id === product.id);
        if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
        return [...prev, { ...product, qty: 1 }];
        });
    };

    return (
        <section id="market" className="py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <RevealItem delay={0}>
                <div className="text-center mb-12">
                <p className="text-[#2D5016] font-semibold text-sm tracking-widest uppercase mb-2">
                    Our marketplace
                </p>
                <h2 className="text-5xl md:text-6xl font-black text-gray-900">
                    Fresh. Local. Direct.
                </h2>
                <p className="text-xl text-gray-500 mt-2">
                    Connecting Our Farm Communities
                </p>
                </div>
            </RevealItem>

            {/* Divider */}
            <RevealItem delay={150}>
                <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs tracking-widest text-gray-400 uppercase">All Products</span>
                <div className="flex-1 h-px bg-gray-200" />
                </div>
            </RevealItem>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS.map((product, i) => (
                    <RevealItem key={product.id} delay={300 + i * 80}>
                        <ProductCard product={product} onAddToCart={addToCart} />
                    </RevealItem>
                ))}
            </div>
        </div>
        </section>
    );
}