import { useState } from "react";

export default function Navbar({ isScrolled }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
            
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* LOGO */}
                <div className="flex items-center gap-3">ICON</div>
                <div>
                    <p className={`text-xs font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>PHILIPPINE DEP. OF AGRICULTURE</p>
                    <p className={`font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>Market Portal</p>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#harvest" className={`text-sm font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>Explore Harvest</a>
                    <a href="#farmers" className={`text-sm font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>Meet Farmers</a>
                    <a href="#market" className={`text-sm font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>Market</a>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="bg-[#2D5016] text-white px-5 py-2 rounded-full text-sm font-semibold">Login</button>
                </div>
            </div>
        </nav>
    )
}