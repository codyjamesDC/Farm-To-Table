import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export default function Login() {
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
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				setError(data.message || "Unable to sign in right now.");
				return;
			}

			if (data.token) {
				localStorage.setItem("authToken", data.token);
			}
			if (data.user) {
				localStorage.setItem("currentUser", JSON.stringify(data.user));
			}

			setMessage("Sign in successful. Redirecting to homepage...");
			navigate("/", { replace: true });
		} catch {
			setError("Network error. Please check your backend server and try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="login-page">
			<section className="login-card">
				<p className="eyebrow">Account Access</p>
				<h2>Sign in to continue</h2>
				<p className="helper-text">
					Use your registered customer or admin account credentials.
				</p>

				<form className="login-form" onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder="you@example.com"
						autoComplete="email"
					/>

					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						placeholder="Enter your password"
						autoComplete="current-password"
					/>

					{error ? <p className="form-error">{error}</p> : null}
					{message ? <p className="form-success">{message}</p> : null}

					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Signing in..." : "Sign In"}
					</button>
				</form>

				<p className="signup-blocked">Sign up is currently unavailable.</p>
				<Link className="nav-link back-link" to="/">Back to homepage</Link>
			</section>
		</main>
	);
}
