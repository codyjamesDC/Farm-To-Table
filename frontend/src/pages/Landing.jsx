import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/ui/home/Hero.jsx"
import HarvestSection from "../components/ui/home/HarvestSection.jsx";
import HowItWorksSection from "../components/ui/home/HowItWorkSection.jsx";
import FarmersSection from "../components/ui/home/FarmerSection.jsx";
import ChooseUsSection from "../components/ui/home/ChooseUs.jsx";
import MarketSection from "../components/ui/home/MarketSection.jsx";
import CTASection from "../components/ui/home/CTASection.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Landing() {
    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1601368763621-a4ce4d7ab4e0?w=1920&q=80"
                    alt="Farm landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/35 to-transparent" />
                <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#E8C547]/20 blur-3xl animate-drift" />
                <div className="absolute top-1/4 -right-24 h-80 w-80 rounded-full bg-[#2D5016]/20 blur-3xl animate-float" />
                <div className="absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-pulse-soft" />
            </div>

            <div className="relative z-10">
                <Navbar isScrolled={isScrolled} />
                <Hero />
                <div className="landing-section">
                    <HarvestSection cart={cart} setCart={setCart} />
                </div>
                <div className="landing-section delay-150">
                    <HowItWorksSection />
                </div>
                <div className="landing-section delay-300">
                    <FarmersSection />
                </div>
                <div className="landing-section delay-450">
                    <ChooseUsSection />
                </div>
                <div className="landing-section delay-600">
                    <MarketSection cart={cart} setCart={setCart} />
                </div>
                <div className="landing-section delay-750">
                    <CTASection />
                </div>
                <Footer />
            </div>
        </div>
    );
}