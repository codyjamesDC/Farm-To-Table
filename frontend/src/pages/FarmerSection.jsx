const FARMERS = [
    { name: "Juan dela Cruz", role: "Organic Vegetable Farmer", location: "Benguet, CAR", image: "https://images.unsplash.com/photo-1774504798104-58d0749ca87a?w=200&q=80", products: 24 },
    { name: "Maria Santos", role: "Root Crop Specialist", location: "Nueva Ecija, Region III", image: "https://images.unsplash.com/photo-1741112480266-62def497fa27?w=200&q=80", products: 18 },
];

export default function FarmersSection() {
    return (
        <section id="farmers">

        {/* Section Header */}
        <div>
            <p>Our community</p>
            <h2>Meet Your Local Farmers</h2>
        </div>

        {/* Two Column Layout */}
        <div>

            {/* Left — Image */}
            <div>
            <img
                src="https://images.unsplash.com/photo-1740477138822-906f6b845579?w=800&q=80"
                alt="Local farmers"
            />
            </div>

            {/* Right — Text + Farmer Cards */}
            <div>
            <p>
                The Department of Agriculture is committed to building sustainable
                connections between our farming communities and Filipino families.
                Every purchase supports local agriculture and ensures fresh, quality
                produce reaches your table.
            </p>

            {/* Farmer List */}
            <div>
                {FARMERS.map(farmer => (
                <div key={farmer.name}>
                    <img src={farmer.image} alt={farmer.name} />
                    <div>
                    <h4>{farmer.name}</h4>
                    <p>{farmer.role}</p>
                    <p>{farmer.location} · {farmer.products} products</p>
                    </div>
                </div>
                ))}
            </div>
            </div>

        </div>

        </section>
    );
}