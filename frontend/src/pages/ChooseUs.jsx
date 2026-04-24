export default function ChooseUsSection() {
    const benefits = [
        { emoji: "🌿", title: "Always Fresh",        desc: "Harvested daily from local farms across the Philippines" },
        { emoji: "🤝", title: "Direct from Farmers", desc: "No middlemen, fair prices for everyone" },
        { emoji: "💰", title: "Affordable Pricing",  desc: "Best value guaranteed for quality produce" },
        { emoji: "🏛️", title: "DA Supported",         desc: "Government-backed quality and accountability" },
    ];

    return (
        <section className="py-20 px-6 bg-[#2D5016]">
        <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-3">Why Choose Us</h2>
            <p className="text-white/70 text-lg">Supporting local agriculture, delivering fresh quality</p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-7 text-center">
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                <h3 className="font-bold text-white text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}