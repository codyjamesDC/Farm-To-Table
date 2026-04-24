import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx"
import HarvestSection from "./HarvestSection.jsx";
import HowItWorksSection from "./HowItWorkSection.jsx";
import FarmersSection from "./FarmerSection.jsx";
import ChooseUsSection from "./ChooseUs.jsx";
import TestimonialsSection from "./TestimonialSection.jsx";
import MarketSection from "./MarketSection.jsx";
import CTASection from "./CTASection.jsx";
import Footer from "./Footer.jsx";

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
                <TestimonialsSection />
                <MarketSection cart={cart} setCart={setCart} />
                <CTASection />
                <Footer />
            </div>
        </div>
    );
}