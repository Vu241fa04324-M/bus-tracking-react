import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Login interface is ready. User authentication will be connected to Django next."
    );
  }

  return (
    <section className="auth-section">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="auth-icon">🚌</span>
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Login to BusTrack</h1>
        <p>Enter your details to continue.</p>

        <label htmlFor="login-email">Email address</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
          required
        />

        <button className="auth-submit" type="submit">Login</button>

        {message && <p className="success-message">{message}</p>}

        <p className="auth-bottom">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;