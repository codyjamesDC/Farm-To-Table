import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const LeafIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
		<path d="M12 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
		<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
	</svg>
);

export default function Login({ onClose }) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		setMessage("");

		if (!email.trim() || !password.trim()) {
			setError("Please provide both email and password.");
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || "Unable to sign in right now.");
				return;
			}

			if (data.token) localStorage.setItem("authToken", data.token);
			if (data.user) localStorage.setItem("currentUser", JSON.stringify(data.user));

			setMessage("Sign in successful. Redirecting...");
			setTimeout(() => {
				if (onClose) onClose();
				else navigate("/");
			}, 1000);
		} catch {
			setError("Network error. Please check your backend and try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center"
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1601368763621-a4ce4d7ab4e0?w=1920&q=80')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Dark overlay */}
			<div className="absolute inset-0 bg-black/50" />

			{/* Glass card */}
			<div
				className="relative z-10 w-full max-w-sm mx-4 rounded-3xl p-8"
				style={{
					background: "rgba(20, 50, 10, 0.35)",
					backdropFilter: "blur(20px)",
					WebkitBackdropFilter: "blur(20px)",
					border: "1px solid rgba(255, 255, 255, 0.2)",
					boxShadow: "0 8px 40px rgba(0, 0, 0, 0.5)",
				}}
			>
				{/* Close button */}
				{onClose && (
					<button
						onClick={onClose}
						className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 text-white text-xs font-bold flex items-center justify-center transition-all"
					>
						✕
					</button>
				)}

				{/* Logo + Brand */}
				<div className="flex flex-col items-center mb-6">
					<div className="w-12 h-12 bg-[#2D5016] text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
						<LeafIcon />
					</div>
					<p className="text-white/60 text-xs uppercase tracking-widest font-medium">
						Philippine Dep. of Agriculture
					</p>
					<p className="text-white font-bold text-sm">Market Portal</p>
				</div>

				{/* Title */}
				<h2 className="text-2xl font-black text-white text-center mb-1">
					Welcome Back
				</h2>
				<p className="text-white/50 text-xs text-center mb-6">
					Sign in to your account to continue
				</p>

				{/* Form */}
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">

					{/* Email */}
					<div className="flex flex-col gap-1">
						<label className="text-white/70 text-xs font-semibold uppercase tracking-widest">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
							autoComplete="email"
							className="bg-white/10 border border-white/25 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8C547] focus:bg-white/20 transition-all"
						/>
					</div>

					{/* Password */}
					<div className="flex flex-col gap-1">
						<label className="text-white/70 text-xs font-semibold uppercase tracking-widest">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
							autoComplete="current-password"
							className="bg-white/10 border border-white/25 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8C547] focus:bg-white/20 transition-all"
						/>
					</div>

					{/* Error / Success */}
					{error && (
						<p className="text-red-300 text-xs text-center bg-red-500/10 border border-red-400/20 rounded-lg py-2 px-3">
							{error}
						</p>
					)}
					{message && (
						<p className="text-green-300 text-xs text-center bg-green-500/10 border border-green-400/20 rounded-lg py-2 px-3">
							{message}
						</p>
					)}

					{/* Submit button — golden yellow to match hero */}
					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-1 w-full bg-[#E8C547] hover:bg-[#d4b040] disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 font-black py-3 rounded-xl text-sm tracking-wide transition-all shadow-lg"
					>
						{isSubmitting ? "Signing in..." : "Sign In"}
					</button>

				</form>

				{/* Footer */}
				<p className="text-center text-white/40 text-xs mt-5">
					Sign up is currently unavailable.
				</p>

				{!onClose && (
					<Link
						to="/"
						className="block text-center text-[#E8C547]/70 hover:text-[#E8C547] text-xs mt-2 transition-colors"
					>
						← Back to homepage
					</Link>
				)}
			</div>
		</div>
	);
}