import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password.length < 8) {
      setMessage("Please use a password with at least 8 characters.");
      return;
    }

    setMessage(
      "Registration interface is ready. Account creation will be connected to Django next."
    );
  }

  return (
    <section className="auth-section">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="auth-icon">🚌</span>
        <span className="eyebrow">JOIN BUS TRACK</span>
        <h1>Create an account</h1>
        <p>Enter your details to get started.</p>

        <label htmlFor="register-name">Full name</label>
        <input
          id="register-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your full name"
          required
        />

        <label htmlFor="register-email">Email address</label>
        <input
          id="register-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 8 characters"
          minLength={8}
          required
        />

        <button className="auth-submit" type="submit">
          Create Account
        </button>

        {message && <p className="success-message">{message}</p>}

        <p className="auth-bottom">
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;