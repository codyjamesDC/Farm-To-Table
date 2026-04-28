import { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const LeafIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
);

const UserIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
    </svg>
);

export default function Navbar({ isScrolled }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    return (
        <>
        <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-white" : "bg-transparent"}`}>
            
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-[#2D5016] text-white rounded-full flex items-center justify-center">
                        <LeafIcon />
                    </div>
                    <div>
                        <p className={`text-xs font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>
                            PHILIPPINE DEP. OF AGRICULTURE
                        </p>
                        <p className={`font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
                            Market Portal
                        </p>
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#harvest" className={`text-sm font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>
                        Explore Harvest
                    </a>
                    <a href="#farmers" className={`text-sm font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>
                        Meet Farmers
                    </a>
                    <a href="#market" className={`text-sm font-medium ${isScrolled ? "text-gray-900" : "text-white"}`}>
                        Market
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-3">

                    {/* Sign Up Button */}
                    <button
                        type="button"
                        onClick={() => setShowSignup(true)}
                        className="bg-[#E8C547] text-gray-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200"
                    >
                        Sign Up
                    </button>

                    {/* Login Button */}
                    <button
                        type="button"
                        onClick={() => setShowLogin(true)}
                        className="bg-[#2D5016] text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-[#1a3a0d] transition-colors duration-200"
                    >
                        <UserIcon />
                        Login
                    </button>

                </div>
            </div>
        </nav>

        {/* Login Modal */}
        {showLogin && (
            <div
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                onClick={() => setShowLogin(false)}
            >
                <div onClick={(e) => e.stopPropagation()}>
                    <Login onClose={() => setShowLogin(false)} />
                </div>
            </div>
        )}

        {/* Signup Modal */}
        {showSignup && (
            <div
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                onClick={() => setShowSignup(false)}
            >
                <div onClick={(e) => e.stopPropagation()}>
                    <Signup onClose={() => setShowSignup(false)} />
                </div>
            </div>
        )}
        </>
    );
}