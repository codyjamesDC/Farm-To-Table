export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1601368763621-a4ce4d7ab4e0?w=1920&q=80" 
                alt="Farm landscape"
                className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via black/35 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-16">

                {/* Badge */}
                <div className="flex items-center gap-2 bg-white/15 border border-white/30 text-white text-sm px-4 py-2 rounded-full mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Farm-fresh produce available now</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 max-w-5xl leading-tight">
                    The Freshness <br />
                    <span className="text-[#E8C547]">of our Land.</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg text-white/85 mb-10 max-w-xl leading-relaxed">
                    Connecting our farmers to your stable, facilitated by the Department of Agriculture
                </p>

                {/* Button */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <a href="#harvest" className="bg-[#E8C547] text-gray-900 px-8 py-4 rounded-full text-base font-bold">Explore Today's Harvest</a>
                    <a href="#market" className="bg-white/10 border-2 border-white/60 text-white px-8 py-4 rounded-full text-base font-semibold">Browse Market</a>
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-lg relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    <input type="text" placeholder="Search fresh produce..." className="w-full pl-12 pr-4 py-4 rounded-full bg-white/95 text-gray-900 placeholder-gray-400 text-sm focus:outline-none"/>
                </div>

            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
                <span className="text-xs tracking-widest">SCROLL</span>
                <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1">
                <div className="w-1 h-2 bg-white/40 rounded-full" />
                </div>
            </div>

        </section>
    )
}