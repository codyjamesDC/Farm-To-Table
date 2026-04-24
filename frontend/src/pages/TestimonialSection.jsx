const TESTIMONIALS = [
    { name: "Ana Reyes",     location: "Manila",       quote: "Fresh vegetables delivered right to my door. The quality is amazing — my family loves it!", rating: 5 },
    { name: "Carlos Garcia", location: "Quezon City",  quote: "Supporting local farmers while getting the best produce. Win-win for everyone!", rating: 5 },
    { name: "Linda Torres",  location: "Cebu",         quote: "The DA Market Portal changed how I shop for groceries. So convenient and fresh!", rating: 5 },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 px-6 bg-linear-to-br from-[#F5F0E8] to-white">
        <div className="max-w-6xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900">What Our Customers Say</h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-50">

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg">★</span>
                    ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#E8C547] rounded-full flex items-center justify-center font-bold text-gray-900 text-sm">
                    {t.name[0]}
                    </div>
                    <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                    </div>
                </div>

                </div>
            ))}
            </div>

        </div>
        </section>
    );
}