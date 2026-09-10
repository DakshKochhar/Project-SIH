import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="dashboard-page">

        {/* Top controls */}
        <div className="dashboard-controls">
          <select>
            <option>Study Area: Koramangala, Bengaluru</option>
          </select>

          <div className="time-box">
            Time: 10:30 AM, 24 May 2026
          </div>
        </div>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">🌧️</div>
            <div>
              <span>Current Rainfall</span>
              <strong>82 <small>mm/hr</small></strong>
              <p>Heavy Rain</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🌊</div>
            <div>
              <span>Flood Risk Zones</span>
              <strong>14</strong>
              <p>High Risk</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🚰</div>
            <div>
              <span>Overloaded Drains</span>
              <strong>12</strong>
              <p>Critical</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🚧</div>
            <div>
              <span>Blocked Roads</span>
              <strong>8</strong>
              <p>High Risk</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔔</div>
            <div>
              <span>Active Alerts</span>
              <strong>3</strong>
              <p>View All →</p>
            </div>
          </div>

        </section>

        {/* Main dashboard */}
        <section className="dashboard-main">

          {/* Map */}
          <div className="map-panel">
            <div className="map-placeholder">
              <h2>Flood Risk Map</h2>
              <p>Live flood-risk visualization</p>

              <div className="map-grid">
                <div className="risk-zone zone-one"></div>
                <div className="risk-zone zone-two"></div>
                <div className="risk-zone zone-three"></div>
              </div>

              <div className="prediction-box">
                <span>Prediction Time</span>
                <strong>60 min from now</strong>

                <div className="timeline">
                  <span>Now</span>
                  <span>30m</span>
                  <span>60m</span>
                  <span>120m</span>
                  <span>180m</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right information */}
          <div className="dashboard-right">

            <div className="info-panel">
              <h3>Flood Risk Summary</h3>

              <div className="risk-circle">
                <strong>42</strong>
                <span>Total Areas</span>
              </div>

              <div className="risk-list">
                <p>🟢 Low Risk — 12 (28%)</p>
                <p>🟡 Medium Risk — 14 (33%)</p>
                <p>🟠 High Risk — 10 (24%)</p>
                <p>🔴 Critical Risk — 6 (15%)</p>
              </div>
            </div>

            <div className="info-panel">
              <h3>Next 3 Hours Prediction</h3>

              <p>0–30 min — 🟡 Medium Risk — 45%</p>
              <p>30–60 min — 🟠 High Risk — 72%</p>
              <p>60–120 min — 🔴 Critical Risk — 88%</p>
              <p>120–180 min — 🔴 Critical Risk — 91%</p>
            </div>

            <div className="info-panel weather-panel">
              <h3>Weather Forecast</h3>

              <strong>26°C</strong>

              <p>Heavy Rain</p>
              <p>Humidity: 92%</p>
              <p>Wind: 18 km/h</p>
              <p>Pressure: 1006 hPa</p>
            </div>

          </div>

        </section>

        {/* Bottom panels */}
        <section className="bottom-grid">

          <div className="bottom-panel">
            <h3>Top Overloaded Drains</h3>

            <div className="table-row">
              <span>D-12</span>
              <span>5th Block</span>
              <span>42 m³/s</span>
              <b>Critical</b>
            </div>

            <div className="table-row">
              <span>D-07</span>
              <span>HSR Layout</span>
              <span>31 m³/s</span>
              <b>Critical</b>
            </div>

            <div className="table-row">
              <span>D-03</span>
              <span>BTM Layout</span>
              <span>23 m³/s</span>
              <b>Critical</b>
            </div>

            <div className="table-row">
              <span>D-18</span>
              <span>Koramangala</span>
              <span>30 m³/s</span>
              <b>High</b>
            </div>
          </div>

          <div className="bottom-panel">
            <h3>Recent Alerts</h3>

            <p>🔴 High Flood Risk in Koramangala 5th Block</p>
            <p>🟠 Drain D-12 Overloaded</p>
            <p>🟠 Road Flood Risk on 80ft Road</p>
          </div>

          <div className="bottom-panel">
            <h3>Safe Route Planner</h3>

            <div className="route-input">
              From: Koramangala Police Station
            </div>

            <div className="route-input">
              To: St. John's Hospital, Koramangala
            </div>

            <button>Find Safe Route</button>

            <div className="route-info">
              <span>Distance<br /><b>6.2 km</b></span>
              <span>Est. Time<br /><b>18 min</b></span>
              <span>Risk Level<br /><b>Low</b></span>
            </div>
          </div>

        </section>

      </main>
    </>
  );
}

export default Dashboard;