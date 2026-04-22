import { useState } from "react";
import Navbar from "/pages/Navbar";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(true);
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <Navbar isScrolled={isScrolled} />
            <p>Hero goes here</p>
            <p>Cart count: {cartCount}</p>
        </div>
    );
}