import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx"

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
    const [cart] = useState([]);

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
        </div>
    );
}