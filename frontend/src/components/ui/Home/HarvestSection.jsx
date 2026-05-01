import { useState } from "react";
import ProductCard from "../../layout/ProductCard.jsx";

const PRODUCTS = [
    { id: 1, name: "Cherry Tomatoes", price: 150, unit: "1kg", category: "Vegetables", image: "https://images.unsplash.com/photo-1559740509-8202abdaa7df?w=600&q=80", farmer: "Juan dela Cruz", badge: "Just Harvested" },
    { id: 2, name: "Organic Carrots", price: 120, unit: "1kg", category: "Vegetables", image: "https://images.unsplash.com/photo-1554223745-ad862492c213?w=600&q=80", farmer: "Maria Santos", badge: "Organic" },
    { id: 3, name: "Fresh Lettuce", price: 90, unit: "500g", category: "Vegetables", image: "https://images.unsplash.com/photo-1506073881649-4e23be3e9ed0?w=600&q=80", farmer: "Pedro Reyes" },
    { id: 4, name: "Sweet Corn", price: 60, unit: "3 pcs", category: "Grains", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=600&q=80", farmer: "Rosa Cruz", badge: "Seasonal" },
    { id: 5, name: "Carabao Mango", price: 200, unit: "1kg", category: "Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80", farmer: "Luis Garcia" },
    { id: 6, name: "Free Range Eggs", price: 180, unit: "12 pcs", category: "Poultry", image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=600&q=80", farmer: "Elena Torres", badge: "Free Range" },
    ];

    const CATEGORIES = ["All", "Vegetables", "Fruits", "Grains", "Poultry"];

    export default function HarvestSection({ cart, setCart }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    const addToCart = (product) => {
        setCart(prev => {
        const existing = prev.find(i => i.id === product.id);
        if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + product.qty } : i);
        return [...prev, product];
        });
    };

    return (
        <section id="harvest" className="py-20 px-6 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-12">
            <p className="text-[#2D5016] font-semibold text-sm tracking-widest uppercase mb-2">
                Fresh from the field
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">Just Harvested</h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CATEGORIES.map(cat => (
                <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat
                    ? "bg-gray-900 text-white shadow-md border-gray-900"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                }`}>
                {cat}
                </button>
            ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
            </div>

        </div>
        </section>
    );
}