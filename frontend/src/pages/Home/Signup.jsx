import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const LeafIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
		<path d="M12 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
		<path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
	</svg>
);

export default function Signup({ onClose }) {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		setMessage("");

		if (!form.firstName || !form.lastName || !form.email || !form.password) {
			setError("Please fill in all required fields.");
			return;
		}
		if (form.password !== form.confirmPassword) {
			setError("Passwords do not match.");
			return;
		}
		if (form.password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}

		setIsSubmitting(true);
		try {
			const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName: form.firstName,
					middleName: form.middleName,
					lastName: form.lastName,
					email: form.email,
					password: form.password,
				}),
			});
			const data = await response.json();
			if (!response.ok) {
				setError(data.message || "Unable to register right now.");
				return;
			}
			if (data.token) localStorage.setItem("authToken", data.token);
			if (data.user) localStorage.setItem("currentUser", JSON.stringify(data.user));
			setMessage("Account created! Redirecting...");
			setTimeout(() => {
				if (onClose) onClose();
				navigate("/");
			}, 1000);
		} catch {
			setError("Network error. Please check your backend and try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	// Shared input class
	const inputClass = "w-full bg-white/10 border border-white/25 text-white placeholder-white/30 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#E8C547] focus:bg-white/20 transition-all";
	const labelClass = "text-white/70 text-xs font-semibold uppercase tracking-widest mb-1";

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center px-4"
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
				className="relative z-10 w-full max-w-xs rounded-3xl p-6"
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
				<div className="flex flex-col items-center mb-3">
					<div className="w-10 h-10 bg-[#2D5016] text-white rounded-full flex items-center justify-center mb-1 shadow-lg">
						<LeafIcon />
					</div>
					<p className="text-white/60 text-xs uppercase tracking-widest font-medium">
						Philippine Dep. of Agriculture
					</p>
					<p className="text-white font-bold text-sm">Market Portal</p>
				</div>

				{/* Title */}
				<h2 className="text-xl font-black text-white text-center mb-0.5">
					Create Account
				</h2>
				<p className="text-white/50 text-xs text-center mb-4">
					Sign up to start shopping fresh produce
				</p>

				{/* Form  */}
				<form onSubmit={handleSubmit} className="flex flex-col gap-2.5">

					<div className="flex flex-col">
						<label className={labelClass}>First Name <span className="text-[#E8C547]">*</span></label>
						<input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Juan" className={inputClass} />
					</div>

					<div className="flex flex-col">
						<label className={labelClass}>Last Name <span className="text-[#E8C547]">*</span></label>
						<input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Dela Cruz" className={inputClass} />
					</div>

					<div className="flex flex-col">
						<label className={labelClass}>Middle Name <span className="text-white/30">(optional)</span></label>
						<input type="text" name="middleName" value={form.middleName} onChange={handleChange} placeholder="Santos" className={inputClass} />
					</div>

					<div className="flex flex-col">
						<label className={labelClass}>Email <span className="text-[#E8C547]">*</span></label>
						<input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" className={inputClass} />
					</div>

					<div className="flex flex-col">
						<label className={labelClass}>Password <span className="text-[#E8C547]">*</span></label>
						<input type="password" name="password" value={form.password} onChange={handleChange} placeholder="••••••••" autoComplete="new-password" className={inputClass} />
					</div>

					<div className="flex flex-col">
						<label className={labelClass}>Confirm Password <span className="text-[#E8C547]">*</span></label>
						<input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="••••••••" autoComplete="new-password" className={inputClass} />
					</div>

					{error && (
						<p className="text-red-300 text-xs text-center bg-red-500/10 border border-red-400/20 rounded-lg py-1.5 px-3">
							{error}
						</p>
					)}
					{message && (
						<p className="text-green-300 text-xs text-center bg-green-500/10 border border-green-400/20 rounded-lg py-1.5 px-3">
							{message}
						</p>
					)}

					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-1 w-full bg-[#E8C547] hover:bg-[#d4b040] disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 font-black py-2.5 rounded-xl text-sm tracking-wide transition-all shadow-lg"
					>
						{isSubmitting ? "Creating Account..." : "Create Account"}
					</button>

				</form>
			</div>
		</div>
	);
}