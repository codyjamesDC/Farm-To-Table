export default function Hero() {
    return (
        <section>
            {/* Background image */}
            <div>
                <img src="https://images.unsplash.com/photo-1601368763621-a4ce4d7ab4e0?w=1920&q=80" alt="Farm landscape" />
                <div></div>
            </div>

            {/* Content */}
            <div>

                {/* Badge */}
                <div>
                    <span>●</span>
                    <span>Farm-fresh produce available now</span>
                </div>

                {/* Heading */}
                <h1>
                    The Freshness <br />
                    <span>of our Land.</span>
                </h1>

                {/* Subheading */}
                <p>
                    Connecting our farmers to your stable, facilitated by the Department of Agriculture
                </p>

                {/* Button */}
                <div>
                    <a href="#harvest">Explore Today's Harvest</a>
                    <a href="#market">Browse Market</a>
                </div>

                {/* Search Bar */}
                <div>
                    <span>🔍</span>
                    <input type="text" placeholder="Search fresh produce..." />
                </div>

            </div>
            {/* Scroll Indicator */}
            <div>
                <span>SCROLL</span>
                <div>
                <div></div>
                </div>
            </div>
            
        </section>
    )
}