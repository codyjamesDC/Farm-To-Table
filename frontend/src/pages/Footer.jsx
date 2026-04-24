export default function Footer() {
    return (
        <footer className="bg-[#3A3A3A] text-white py-16 px-6">

        {/* Top Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Column 1 — Brand */}
            <div>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#2D5016] font-bold text-sm">DA</span>
                </div>
                <div>
                <p className="text-xs text-white/50 tracking-widest">DEPARTMENT OF AGRICULTURE</p>
                <p className="font-bold">Market Portal</p>
                </div>
            </div>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Facilitating direct transactions for a sustainable,
                official farm-to-table system.
            </p>
            <a href="#" className="text-green-400 text-sm">DA Merchant Portal →</a>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-xs font-bold text-gray-900">IG</span>
                </div>
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-xs font-bold text-gray-900">FB</span>
                </div>
            </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
            </div>

            {/* Column 3 — Newsletter */}
            <div>
            <h4 className="text-2xl font-black mb-1">SUBSCRIBE</h4>
            <p className="text-sm mb-1">to our <span className="font-bold">HARVEST</span></p>
            <p className="text-sm mb-4 font-bold">NEWSLETTER</p>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Stay informed on the best seasonal offerings,
                local events, and recipes.
            </p>
            <div className="flex gap-2">
                <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-400 text-sm focus:outline-none"
                />
                <button className="w-11 h-11 bg-[#E8C547] rounded-full flex items-center justify-center text-gray-900 font-bold">
                →
                </button>
            </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto border-t border-white/15 pt-8 text-center text-white/40 text-sm">
            <p>© 2026 Department of Agriculture - Market Portal. All rights reserved.</p>
        </div>

        </footer>
    );
}