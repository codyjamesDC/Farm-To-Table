import RevealItem from "../RevealItem";

const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-8 top-24 h-24 w-24 rounded-full border border-white/15 animate-float" />
                <div className="absolute right-12 top-32 h-16 w-16 rounded-full bg-[#E8C547]/20 blur-2xl animate-pulse-soft" />
                <div className="absolute bottom-20 left-1/4 h-28 w-28 rounded-full bg-white/10 blur-3xl animate-drift" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-16 z-10">

                {/* Badge */}
                <RevealItem delay={0}>
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm px-4 py-2 rounded-full mb-6">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span>Farm-fresh produce available now</span>
                    </div>
                </RevealItem>

                {/* Heading */}
                <RevealItem delay={150}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 max-w-5xl leading-tight">
                        The Freshness <br />
                        <span className="text-[#ffc800]">of our Land.</span>
                    </h1>
                </RevealItem>

                {/* Subheading */}
                <RevealItem delay={300}>
                    <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl leading-relaxed">
                        Connecting our farmers to your table, facilitated by the Department of Agriculture
                    </p>
                </RevealItem>

                {/* Buttons */}
                <RevealItem delay={450}>
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="#harvest"
                            className="bg-[#E8C547] text-gray-900 px-8 py-4 rounded-full text-base font-bold hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-lg">
                            Explore Today's Harvest
                        </a>
                        <a href="#market"
                            className="bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-200">
                            Browse Market
                        </a>
                    </div>
                </RevealItem>

                {/* Search Bar */}
                <RevealItem delay={600}>
                    <div className="w-full max-w-lg relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <SearchIcon />
                        </span>
                        <input
                            type="text"
                            placeholder="Search fresh produce..."
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E8C547] shadow-xl"
                        />
                    </div>
                </RevealItem>

            </div>
        </section>
    );
}