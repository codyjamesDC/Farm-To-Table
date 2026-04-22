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
                <a href="/">Home</a>
                <a href="/signin">Sign In</a>
            </div>
        </nav>
    );
}