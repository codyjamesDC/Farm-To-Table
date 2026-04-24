import { useState } from "react";

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
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">

        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && (
            <span className="absolute top-3 left-3 bg-[#2D5016] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {product.badge}
            </span>
            )}
            <button
            onClick={() => setLiked(!liked)}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center ${
                liked ? "bg-red-500 text-white" : "bg-white text-gray-500"
            }`}>
            ♥
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
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-gray-500 font-bold text-lg w-5 text-center">−</button>
                <span className="text-sm font-semibold w-4 text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="text-gray-500 font-bold text-lg w-5 text-center">+</button>
            </div>
            </div>

            {/* Add to Cart */}
            <button
            onClick={handleAdd}
            className={`w-full py-3 rounded-full text-sm font-bold ${
                added ? "bg-green-500 text-white" : "bg-[#E8C547] text-gray-900"
            }`}>
            {added ? "Added!" : "Add to Cart"}
            </button>
        </div>

        </div>
    );
}