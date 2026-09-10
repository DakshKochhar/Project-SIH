import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const [showNotifications, setShowNotifications] = useState(false);

  const userEmail =
    localStorage.getItem("userEmail") || "user@flowcast.com";

  // Apply theme whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function handleTheme() {
    setDarkMode((previous) => !previous);
  }

  function handleNotifications() {
    setShowNotifications((previous) => !previous);
  }

  function handleLogout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("theme");
    navigate("/login");
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <span className="logo-icon">F</span>

        <div>
          <span className="logo-text">FLOWCAST</span>
          <small>Urban Flood Nowcasting System</small>
        </div>
      </Link>

      {/* Search */}
      <div className="navbar-search">
        <span>⌕</span>

        <input
          type="text"
          placeholder="Search location..."
        />
      </div>

      {/* Right Side */}
      <div className="navbar-actions">

        {/* Notifications */}
        <div className="notification-wrapper">

          <button
            className="nav-icon notification"
            onClick={handleNotifications}
            title="Notifications"
          >
            🔔
            <span className="notification-badge">3</span>
          </button>

          {showNotifications && (
            <div className="notification-panel">

              <div className="notification-header">
                <strong>Notifications</strong>
                <span>3 New</span>
              </div>

              <div className="notification-item">
                <span className="notification-dot critical"></span>

                <div>
                  <strong>Critical Flood Risk</strong>
                  <p>
                    Koramangala area requires attention.
                  </p>
                  <small>2 min ago</small>
                </div>
              </div>

              <div className="notification-item">
                <span className="notification-dot warning"></span>

                <div>
                  <strong>Heavy Rainfall</strong>
                  <p>
                    Rainfall intensity is increasing.
                  </p>
                  <small>8 min ago</small>
                </div>
              </div>

              <div className="notification-item">
                <span className="notification-dot info"></span>

                <div>
                  <strong>System Update</strong>
                  <p>
                    Weather data updated successfully.
                  </p>
                  <small>15 min ago</small>
                </div>
              </div>

              <Link
                to="/alerts"
                className="view-all-notifications"
                onClick={() => setShowNotifications(false)}
              >
                View All Alerts →
              </Link>

            </div>
          )}

        </div>

        {/* Theme */}
        <button
          className="nav-icon theme-button"
          onClick={handleTheme}
          title={
            darkMode
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Profile */}
        <Link
          to="/profile"
          className="admin-profile"
        >
          <div className="admin-avatar">
            {userEmail.charAt(0).toUpperCase()}
          </div>

          <div className="admin-info">
            <strong>{userEmail}</strong>
            <span>Municipal Authority</span>
          </div>

          <span className="dropdown-icon">⌄</span>
        </Link>

        {/* Logout */}
        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;