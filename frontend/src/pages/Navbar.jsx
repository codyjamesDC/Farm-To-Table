import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            {/* Logo */}
            <div>
                <div>ICON</div>
                <div>
                    <p>PHILIPPINE DEP. OF AGRICULTURE</p>
                    <p>Market Portal</p>
                </div>
            </div>

            <div>
                <a href="#harvest">Explore Harvest</a>
                <a href="#farmers">Meet Farmers</a>
                <a href="#market">Market</a>
            </div>

            {/* CTA */}
            <div>
                <button>Login</button>
                <button onClick={() => setMenuOpen(!menuOpen)}>MENU</button>
            </div>
        </nav>
    );
}