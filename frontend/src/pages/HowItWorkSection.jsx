export default function HowItWorksSection() {
    const steps = [
        { icon: "🔍", title: "Browse Products", desc: "Explore fresh produce from local farmers across the Philippines" },
        { icon: "🛒", title: "Add to Cart", desc: "Select your favorite items with just one click" },
        { icon: "💳", title: "Confirm Order", desc: "Secure checkout with cash on delivery available" },
        { icon: "🚚", title: "Receive Fresh", desc: "Get farm-fresh produce delivered to your door" },
    ];

    return (
        <section>

        {/* Section Header */}
        <div>
            <p>Simple steps</p>
            <h2>How It Works</h2>
        </div>

        {/* Steps Grid */}
        <div>
            {steps.map((step, i) => (
            <div key={i}>

                {/* Icon + Number */}
                <div>
                <div>{step.icon}</div>
                <span>{i + 1}</span>
                </div>

                {/* Text */}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>

            </div>
            ))}
        </div>

        </section>
    );
}