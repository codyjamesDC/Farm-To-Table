import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/ui/Home/Hero.jsx"
import HarvestSection from "../components/ui/Home/HarvestSection.jsx";
import HowItWorksSection from "../components/ui/Home/HowItWorkSection.jsx";
import FarmersSection from "../components/ui/Home/FarmerSection.jsx";
import ChooseUsSection from "../components/ui/Home/ChooseUs.jsx";
import MarketSection from "../components/ui/Home/MarketSection.jsx";
import CTASection from "../components/ui/Home/CTASection.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1601368763621-a4ce4d7ab4e0?w=1920&q=80"
                    alt="Farm landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/35 to-transparent" />
            </div>

            <div className="relative z-10">
                <Navbar isScrolled={isScrolled} />
                <Hero />
                <HarvestSection cart={cart} setCart={setCart} />
                <HowItWorksSection />
                <FarmersSection />
                <ChooseUsSection />
                <MarketSection cart={cart} setCart={setCart} />
                <CTASection />
                <Footer />
            </div>
        </div>
    );
}