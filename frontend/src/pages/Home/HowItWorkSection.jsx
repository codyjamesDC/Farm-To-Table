const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);

const CartIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
);

const CardIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
);

const TruckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
);

export default function HowItWorksSection() {
    const steps = [
        { icon: <SearchIcon />, title: "Browse Products", desc: "Explore fresh produce from local farmers across the Philippines" },
        { icon: <CartIcon />,   title: "Add to Cart",     desc: "Select your favorite items with just one click" },
        { icon: <CardIcon />,   title: "Confirm Order",   desc: "Secure checkout with cash on delivery available" },
        { icon: <TruckIcon />,  title: "Receive Fresh",   desc: "Get farm-fresh produce delivered to your door" },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-[#F5F0E8] to-white">
        <div className="max-w-5xl mx-auto">

            {/* Section Header */}
            <div className="text-center mb-16">
            <p className="text-[#2D5016] font-semibold text-sm tracking-widest uppercase mb-2">
                Simple steps
            </p>
            <h2 className="text-5xl font-black text-gray-900">How It Works</h2>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">

                {/* Icon + Number */}
                <div className="relative mb-6">
                    <div className="w-16 h-16 bg-[#2D5016] rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#E8C547] rounded-full flex items-center justify-center text-xs font-black text-gray-900 shadow-sm">
                    {i + 1}
                    </span>
                </div>

                {/* Text */}
                <h3 className="font-bold text-gray-900 mb-2 transition-colors duration-200 group-hover:text-[#2D5016]">
                    {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>

                </div>
            ))}
            </div>

        </div>
        </section>
    );
}