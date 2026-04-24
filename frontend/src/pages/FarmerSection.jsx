const FARMERS = [
    { name: "Juan dela Cruz", role: "Organic Vegetable Farmer", location: "Benguet, CAR", image: "https://images.unsplash.com/photo-1774504798104-58d0749ca87a?w=200&q=80", products: 24 },
    { name: "Maria Santos", role: "Root Crop Specialist", location: "Nueva Ecija, Region III", image: "https://images.unsplash.com/photo-1741112480266-62def497fa27?w=200&q=80", products: 18 },
];

export default function FarmersSection() {
    return (
        <section id="farmers" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16">
            <p className="text-[#2D5016] font-semibold text-sm uppercase mb-2">Our community</p>
            <h2 className="text-5xl font-black text-gray-900">Meet Your Local Farmers</h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left — Image */}
            <div>
                <img
                src="https://images.unsplash.com/photo-1740477138822-906f6b845579?w=800&q=80"
                alt="Local farmers"
                className="w-full h-[420px] object-cover rounded-3xl"
                />
            </div>

            {/* Right — Text + Farmer Cards */}
            <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Department of Agriculture is committed to building sustainable
                connections between our farming communities and Filipino families.
                Every purchase supports local agriculture and ensures fresh, quality
                produce reaches your table.
                </p>

                {/* Farmer List */}
                <div className="space-y-4">
                {FARMERS.map(farmer => (
                    <div key={farmer.name} className="flex items-center gap-4 bg-[#FDFBF7] border border-gray-100 p-4 rounded-2xl">
                    <img
                        src={farmer.image}
                        alt={farmer.name}
                        className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-bold text-gray-900">{farmer.name}</h4>
                        <p className="text-sm text-[#2D5016]">{farmer.role}</p>
                        <p className="text-xs text-gray-400">{farmer.location} · {farmer.products} products</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            </div>
        </div>
        </section>
    );
}