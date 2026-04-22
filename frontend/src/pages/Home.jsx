import { useState } from "react";

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(true);
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListerner("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <p>Navbar goes here</p>
            <p>Hero goes here</p>
            <p>Cart count: {cartCount}</p>
        </div>
    );
}