import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Settings.css";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const handleReset = () => {
    setNotifications(true);
    setEmailAlerts(true);
    setSmsAlerts(false);
    setAutoRefresh(true);
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="settings-page">

        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your FlowCast system preferences and notifications.</p>
        </div>

        <div className="settings-container">

          {/* Notification Settings */}
          <section className="settings-card">
            <h2>Notification Settings</h2>
            <p>Configure how you receive flood and system alerts.</p>

            <div className="setting-row">
              <div className="setting-info">
                <h3>Push Notifications</h3>
                <span>Receive real-time flood alerts and warnings.</span>
              </div>

              <button
                className={notifications ? "toggle active" : "toggle"}
                onClick={() => setNotifications(!notifications)}
              >
                <span className="toggle-circle"></span>
              </button>
            </div>

            <div className="setting-row">
              <div className="setting-info">
                <h3>Email Alerts</h3>
                <span>Receive important alerts through email.</span>
              </div>

              <button
                className={emailAlerts ? "toggle active" : "toggle"}
                onClick={() => setEmailAlerts(!emailAlerts)}
              >
                <span className="toggle-circle"></span>
              </button>
            </div>

            <div className="setting-row">
              <div className="setting-info">
                <h3>SMS Alerts</h3>
                <span>Receive critical flood alerts through SMS.</span>
              </div>

              <button
                className={smsAlerts ? "toggle active" : "toggle"}
                onClick={() => setSmsAlerts(!smsAlerts)}
              >
                <span className="toggle-circle"></span>
              </button>
            </div>
          </section>

          {/* System Preferences */}
          <section className="settings-card">
            <h2>System Preferences</h2>
            <p>Configure dashboard and monitoring preferences.</p>

            <div className="setting-row">
              <div className="setting-info">
                <h3>Auto Refresh</h3>
                <span>Automatically refresh dashboard information.</span>
              </div>

              <button
                className={autoRefresh ? "toggle active" : "toggle"}
                onClick={() => setAutoRefresh(!autoRefresh)}
              >
                <span className="toggle-circle"></span>
              </button>
            </div>

            <div className="setting-row">
              <div className="setting-info">
                <h3>Refresh Interval</h3>
                <span>Choose how frequently the dashboard updates.</span>
              </div>

              <select className="setting-select">
                <option>30 Seconds</option>
                <option>1 Minute</option>
                <option>5 Minutes</option>
                <option>10 Minutes</option>
              </select>
            </div>

            <div className="setting-row">
              <div className="setting-info">
                <h3>Map Display</h3>
                <span>Select the default map display mode.</span>
              </div>

              <select className="setting-select">
                <option>Dark Map</option>
                <option>Satellite</option>
                <option>Street Map</option>
              </select>
            </div>
          </section>

          {/* Data Preferences */}
          <section className="settings-card">
            <h2>Data Preferences</h2>
            <p>Configure the data displayed in the monitoring system.</p>

            <div className="setting-row">
              <div className="setting-info">
                <h3>Rainfall Unit</h3>
                <span>Select the preferred rainfall measurement unit.</span>
              </div>

              <select className="setting-select">
                <option>mm/hr</option>
                <option>mm/day</option>
              </select>
            </div>

            <div className="setting-row">
              <div className="setting-info">
                <h3>Risk Display</h3>
                <span>Select how flood risk is displayed.</span>
              </div>

              <select className="setting-select">
                <option>Risk Level</option>
                <option>Percentage</option>
                <option>Both</option>
              </select>
            </div>
          </section>

          {/* Buttons */}
          <div className="settings-actions">

            <button
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>

            <button
              className="save-button"
              onClick={handleSave}
            >
              Save Changes
            </button>

          </div>

        </div>

      </main>
    </>
  );
}

export default Settings;