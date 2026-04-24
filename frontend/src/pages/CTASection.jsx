export default function CTASection() {
    return (
        <section className="relative py-28 px-6 overflow-hidden">

        {/* Background Image + Overlay */}
        <div className="absolute inset-0">
            <img
            src="https://images.unsplash.com/photo-1744659750204-87034350eec6?w=1920&q=80"
            alt="Fresh produce"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#2D5016]/95 to-[#4a7a28]/90" />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl mx-auto text-center text-white">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#E8C547] rounded-full animate-pulse" />
            <span>Join thousands of happy customers</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Support Local Farmers Today
            </h2>
            <p className="text-xl mb-10 text-white/85 max-w-xl mx-auto leading-relaxed">
            Every purchase makes a difference in our farming communities
            </p>
            
            <a href="#harvest"
            className="inline-block bg-[#E8C547] text-gray-900 px-12 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-xl">
            Start Shopping
            </a>
        </div>

        </section>
    );
}