import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: "▦", path: "/dashboard" },
    { name: "Live Map", icon: "◉", path: "/live-map" },
    { name: "Rainfall", icon: "☔", path: "/rainfall" },
    { name: "Flood Prediction", icon: "🌊", path: "/flood-prediction" },
    { name: "Drainage Monitor", icon: "▤", path: "/drainage" },
    { name: "Safe Route", icon: "➤", path: "/safe-route" },
    { name: "Alerts & Notifications", icon: "🔔", path: "/alerts" },
    { name: "Historical Analytics", icon: "▥", path: "/analytics" },
    { name: "Reports", icon: "▤", path: "/reports" },
    { name: "Settings", icon: "⚙", path: "/settings" },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-menu">

        {menuItems.map((item) => (

          <Link
            key={item.name}
            to={item.path}
            className={
              location.pathname === item.path
                ? "sidebar-item active"
                : "sidebar-item"
            }
          >

            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span className="sidebar-text">
              {item.name}
            </span>

          </Link>

        ))}

      </div>


      {/* System Status */}
      <div className="system-status">

        <h4>System Status</h4>

        <div className="status-line">
          <span className="status-dot"></span>
          <span>Operational</span>
        </div>

        <p>Last Updated</p>
        <strong>10:30:12 AM</strong>

        <p>Data Sources</p>
        <span className="data-sources">
          IMD • AWS • Bhuvan • OSM
        </span>

      </div>


      {/* Mobile App */}
      <button className="mobile-app-btn">
        📱 Download Mobile App
      </button>

    </aside>
  );
}

export default Sidebar;