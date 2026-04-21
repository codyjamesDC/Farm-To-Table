import { useState } from "react";

export default function Home() {
    const [isScrolled] = useState(true);

    return (
        <main className="min-h-screen bg-stone-50">
            <nav className="w-full border-b border-stone-200 bg-white">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <p className="font-semibold text-stone-900">PHILIPPINE DEP. OF AGRICULTURE</p>

                    <div className="hidden md:flex items-center gap-8">
                        {["#harvest", "#farmers", "#market"].map((href, i) => (
                            <a
                                key={href}
                                href={href}
                                className={`text-sm font-medium transition-colors hover:opacity-80 ${isScrolled ? "text-gray-700" : "text-white"}`}
                            >
                                {["Explore Harvest", "Meet the Farmers", "Market"][i]}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            <section className="mx-auto max-w-6xl px-6 py-10">
                <h1 className="text-3xl font-bold text-stone-900">Farm-to-Table Homepage</h1>
            </section>
        </main>
    );
}