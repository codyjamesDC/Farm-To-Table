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

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
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
    );
}