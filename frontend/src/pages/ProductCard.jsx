import { useState } from "react";

const HeartIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
);

const CartIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
);

export default function ProductCard({ product, onAddToCart }) {
    const [liked, setLiked] = useState(false);
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        onAddToCart({ ...product, qty });
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
            <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {product.badge && (
            <span className="absolute top-3 left-3 bg-[#2D5016] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {product.badge}
            </span>
            )}
            <button
            onClick={() => setLiked(!liked)}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 ${
                liked
                ? "bg-red-500 text-white"
                : "bg-white text-gray-500 hover:bg-red-50 hover:text-red-500"
            }`}>
            <HeartIcon />
            </button>
        </div>

        {/* Content */}
        <div className="p-5">
            <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{product.unit}</span>
            </div>
            <p className="text-xs text-[#2D5016] font-medium mb-3">by {product.farmer}</p>

            {/* Price + Qty */}
            <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-black text-[#2D5016]">₱{product.price}</span>
            <div className="flex items-center gap-2 border rounded-full px-3 py-1">
                <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="text-gray-500 hover:text-gray-900 font-bold text-lg leading-none w-5 text-center transition-colors">
                −
                </button>
                <span className="text-sm font-semibold w-4 text-center">{qty}</span>
                <button
                onClick={() => setQty(qty + 1)}
                className="text-gray-500 hover:text-gray-900 font-bold text-lg leading-none w-5 text-center transition-colors">
                +
                </button>
            </div>
            </div>

            {/* Add to Cart */}
            <button
            onClick={handleAdd}
            className={`w-full py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                added
                ? "bg-green-500 text-white"
                : "bg-[#E8C547] text-gray-900 hover:bg-yellow-300 hover:scale-[1.02]"
            }`}>
            <CartIcon />
            {added ? "Added!" : "Add to Cart"}
            </button>
        </div>

        </div>
    );
}