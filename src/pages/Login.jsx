import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Temporary frontend login
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/dashboard");
  }

  return (
    <div className="login-page">

      {/* Top Navbar */}
      <nav className="login-navbar">

        <Link to="/" className="login-brand">
          <span className="login-brand-icon">F</span>

          <div>
            <strong>FLOWCAST</strong>
            <small>Urban Flood Nowcasting System</small>
          </div>
        </Link>

        <div className="login-nav-right">
          <Link to="/" className="login-nav-link">
            Home
          </Link>

          <Link to="/login" className="login-nav-link active">
            Login
          </Link>
        </div>

      </nav>

      {/* Login Content */}
      <main className="login-content">

        <div className="login-card">

          <div className="login-logo">
            <span>F</span>
          </div>

          <h1>Welcome Back</h1>

          <p className="login-subtitle">
            Login to your FlowCast account
          </p>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="login-submit"
            >
              Login
            </button>

          </form>

          <div className="login-divider">
            <span>Secure Access</span>
          </div>

          <p className="login-footer">
            Don't have an account?
            <Link to="/"> Go back Home</Link>
          </p>

        </div>

      </main>

    </div>
  );
}

export default Login;