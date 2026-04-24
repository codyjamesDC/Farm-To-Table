export default function ChooseUsSection() {
    const benefits = [
        { emoji: "🌿", title: "Always Fresh",       desc: "Harvested daily from local farms across the Philippines" },
        { emoji: "🤝", title: "Direct from Farmers", desc: "No middlemen, fair prices for everyone" },
        { emoji: "💰", title: "Affordable Pricing",  desc: "Best value guaranteed for quality produce" },
        { emoji: "🏛️", title: "DA Supported",        desc: "Government-backed quality and accountability" },
    ];

    return (
        <section>

        {/* Section Header */}
        <div>
            <h2>Why Choose Us</h2>
            <p>Supporting local agriculture, delivering fresh quality</p>
        </div>

        {/* Benefits Grid */}
        <div>
            {benefits.map((benefit, i) => (
            <div key={i}>
                <div>{benefit.emoji}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
            </div>
            ))}
        </div>

        </section>
    );
}