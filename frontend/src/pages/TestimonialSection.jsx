const TESTIMONIALS = [
    { name: "Ana Reyes",     location: "Manila",       quote: "Fresh vegetables delivered right to my door. The quality is amazing — my family loves it!", rating: 5 },
    { name: "Carlos Garcia", location: "Quezon City",  quote: "Supporting local farmers while getting the best produce. Win-win for everyone!", rating: 5 },
    { name: "Linda Torres",  location: "Cebu",         quote: "The DA Market Portal changed how I shop for groceries. So convenient and fresh!", rating: 5 },
    ];

export default function TestimonialsSection() {
    return (
        <section>

        {/* Section Header */}
        <div>
            <h2>What Our Customers Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div>
            {TESTIMONIALS.map((t, i) => (
            <div key={i}>

                {/* Star Rating */}
                <div>
                {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j}>★</span>
                ))}
                </div>

                {/* Quote */}
                <p>"{t.quote}"</p>

                {/* Author */}
                <div>
                <div>{t.name[0]}</div>
                <div>
                    <p>{t.name}</p>
                    <p>{t.location}</p>
                </div>
                </div>

            </div>
            ))}
        </div>

        </section>
    );
}