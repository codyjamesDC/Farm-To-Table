const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
);

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-16 z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Farm-fresh produce available now</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 max-w-5xl leading-tight">
                The Freshness <br />
                <span className="text-[#ffc800]">of our Land.</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-white/85 mb-10 max-w-xl leading-relaxed">
                Connecting our farmers to your table, facilitated by the Department of Agriculture
                </p>

                {/* Buttons */}
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

                {/* Search Bar */}
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

            </div>
        </section>
    );
}