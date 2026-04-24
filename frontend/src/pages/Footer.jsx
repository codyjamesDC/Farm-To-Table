export default function Footer() {
    return (
        <footer>

        {/* Top Grid */}
        <div>

            {/* Column 1 — Brand */}
            <div>
            <div>
                <div>ICON</div>
                <div>
                <p>DEPARTMENT OF AGRICULTURE</p>
                <p>Market Portal</p>
                </div>
            </div>
            <p>
                Facilitating direct transactions for a sustainable,
                official farm-to-table system.
            </p>
            <a href="#">DA Merchant Portal →</a>

            {/* Social Links */}
            <div>
                <div>IG</div>
                <div>FB</div>
            </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
            </div>

            {/* Column 3 — Newsletter */}
            <div>
            <h4>SUBSCRIBE</h4>
            <p>to our HARVEST NEWSLETTER</p>
            <p>
                Stay informed on the best seasonal offerings,
                local events, and recipes.
            </p>
            <div>
                <input type="email" placeholder="Enter Your Email" />
                <button>→</button>
            </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div>
            <p>© 2026 Department of Agriculture - Market Portal. All rights reserved.</p>
        </div>

        </footer>
    );
}