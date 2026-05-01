import RevealItem from "../RevealItem.jsx";

export default function WhyChooseUsSection() {
    const benefits = [
        { emoji: "🌿", title: "Always Fresh",        desc: "Harvested daily from local farms across the Philippines" },
        { emoji: "🤝", title: "Direct from Farmers", desc: "No middlemen, fair prices for everyone" },
        { emoji: "💰", title: "Affordable Pricing",  desc: "Best value guaranteed for quality produce" },
        { emoji: "🏛️", title: "DA Supported",         desc: "Government-backed quality and accountability" },
    ];

    const testimonials = [
        { name: "Ana Reyes", location: "Manila", quote: "Fresh vegetables delivered right to my door. The quality is amazing - my family loves it!", rating: 5 },
        { name: "Carlos Garcia", location: "Quezon City", quote: "Supporting local farmers while getting the best produce. Win-win for everyone!", rating: 5 },
        { name: "Linda Torres", location: "Cebu", quote: "The DA Market Portal changed how I shop for groceries. So convenient and fresh!", rating: 5 },
    ];

    const StarIcon = ({ filled }) => (
        <svg
            viewBox="0 0 24 24"
            fill={filled ? "#E8C547" : "none"}
            stroke="#E8C547"
            strokeWidth="2"
            className="w-4 h-4"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );

    return (
        <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <RevealItem delay={0}>
                <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-[#ffc800] mb-3">Why Choose Us</h2>
                <p className="text-white/70 text-lg">
                    Supporting local agriculture, delivering fresh quality
                </p>
                </div>
            </RevealItem>

            {/* Benefits Grid */}
            <RevealItem delay={150}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, i) => (
                    <div
                    key={i}
                    className="landing-card bg-white/10 backdrop-blur-sm rounded-2xl p-7 text-center hover:bg-white/20 transition-all duration-300 group"
                    >
                    <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                        {benefit.emoji}
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#E8C547] transition-colors duration-300">
                        {benefit.title}
                    </h3>
                    <p className="text-white/65 text-sm leading-relaxed">
                        {benefit.desc}
                    </p>
                    </div>
                ))}
                </div>
            </RevealItem>

            {/* Testimonials Header */}
            <RevealItem delay={300}>
                <div className="text-center mt-18 mb-12">
                <h2 className="text-5xl font-black text-[#ffc800]">What Our Customers Say</h2>
                </div>
            </RevealItem>

            {/* Testimonials Grid */}
            <RevealItem delay={450}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div
                    key={i}
                    className="landing-card bg-white/80 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                    <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, j) => (
                        <StarIcon key={j} filled={j < t.rating} />
                        ))}
                    </div>

                    <p className="text-black-600 italic mb-6 leading-relaxed">"{t.quote}"</p>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#E8C547] rounded-full flex items-center justify-center font-bold text-black-900 text-sm shrink-0">
                        {t.name[0]}
                        </div>
                        <div>
                        <p className="font-bold text-black-900 text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.location}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </RevealItem>

        </div>
        </section>
    );
}