export default function HowItWorksSection() {
    const steps = [
        { icon: "🔍", title: "Browse Products", desc: "Explore fresh produce from local farmers across the Philippines" },
        { icon: "🛒", title: "Add to Cart", desc: "Select your favorite items with just one click" },
        { icon: "💳", title: "Confirm Order", desc: "Secure checkout with cash on delivery available" },
        { icon: "🚚", title: "Receive Fresh", desc: "Get farm-fresh produce delivered to your door" },
    ];

    return (
        <section className="py-20 px-6 bg-linear-to-br from-[#F5F0E8] to-white">
        <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16">
            <p className="text-[#2D5016] font-semibold text-sm uppercase mb-2">Simple steps</p>
            <h2 className="text-5xl font-black text-gray-900">How It Works</h2>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">

                {/* Icon + Number */}
                <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#2D5016] rounded-2xl flex items-center justify-center text-3xl">
                    {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#E8C547] rounded-full flex items-center justify-center text-xs font-black text-gray-900">
                    {i + 1}
                    </span>
                </div>

                {/* Text */}
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>

                </div>
            ))}
            </div>

        </div>
        </section>
    );
}