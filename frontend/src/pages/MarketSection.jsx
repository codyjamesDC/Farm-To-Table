import ProductCard from "./ProductCard";

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
        <section id="market">

        {/* Section Header */}
        <div>
            <p>Our marketplace</p>
            <h2>Fresh. Local. Direct.</h2>
            <p>Connecting Our Farm Communities</p>
        </div>

        {/* Product Grid */}
        <div>
            {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
        </div>

        </section>
    );
}