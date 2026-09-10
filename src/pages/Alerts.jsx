import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Alerts.css";

function Alerts() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="alerts-page">

        {/* Header */}
        <div className="alerts-header">
          <div>
            <h1>Alerts & Notifications</h1>
            <p>
              Monitor flood warnings, rainfall alerts and infrastructure events
            </p>
          </div>

          <div className="alerts-location">
            Koramangala, Bengaluru
          </div>
        </div>


        {/* Alert Summary */}
        <section className="alert-stats">

          <div className="alert-stat-card">
            <span>Active Alerts</span>
            <strong>3</strong>
            <p>Currently active</p>
          </div>

          <div className="alert-stat-card">
            <span>Critical Alerts</span>
            <strong>1</strong>
            <p>Immediate attention</p>
          </div>

          <div className="alert-stat-card">
            <span>High Alerts</span>
            <strong>2</strong>
            <p>Needs attention</p>
          </div>

          <div className="alert-stat-card">
            <span>Resolved Today</span>
            <strong>8</strong>
            <p>Successfully resolved</p>
          </div>

        </section>


        {/* Main Content */}
        <section className="alerts-content">

          {/* Alert List */}
          <div className="alerts-list-panel">

            <div className="panel-heading">
              <div>
                <h2>Recent Alerts</h2>
                <p>Latest alerts received from the monitoring system</p>
              </div>

              <select>
                <option>All Alerts</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Resolved</option>
              </select>
            </div>


            {/* Alert 1 */}
            <div className="alert-item critical-alert">

              <div className="alert-severity">
                <span>!</span>
              </div>

              <div className="alert-details">
                <div className="alert-title-row">
                  <h3>High Flood Risk in Koramangala 5th Block</h3>
                  <span className="severity-badge critical">
                    Critical
                  </span>
                </div>

                <p>
                  Flood risk has increased due to heavy rainfall and
                  overloaded drainage capacity.
                </p>

                <div className="alert-meta">
                  <span>10:28 AM</span>
                  <span>Risk Score: 91%</span>
                </div>
              </div>

            </div>


            {/* Alert 2 */}
            <div className="alert-item high-alert">

              <div className="alert-severity">
                <span>!</span>
              </div>

              <div className="alert-details">
                <div className="alert-title-row">
                  <h3>Drain D-12 Overloaded</h3>
                  <span className="severity-badge high">
                    High
                  </span>
                </div>

                <p>
                  Drain D-12 has reached 96% of its maximum capacity.
                </p>

                <div className="alert-meta">
                  <span>10:25 AM</span>
                  <span>Capacity: 96%</span>
                </div>
              </div>

            </div>


            {/* Alert 3 */}
            <div className="alert-item high-alert">

              <div className="alert-severity">
                <span>!</span>
              </div>

              <div className="alert-details">
                <div className="alert-title-row">
                  <h3>Road Flood Risk on 80ft Road</h3>
                  <span className="severity-badge high">
                    High
                  </span>
                </div>

                <p>
                  Water accumulation may affect road connectivity
                  in the monitored area.
                </p>

                <div className="alert-meta">
                  <span>10:18 AM</span>
                  <span>Risk Score: 78%</span>
                </div>
              </div>

            </div>


            {/* Alert 4 */}
            <div className="alert-item medium-alert">

              <div className="alert-severity">
                <span>!</span>
              </div>

              <div className="alert-details">
                <div className="alert-title-row">
                  <h3>Rainfall Intensity Increasing</h3>
                  <span className="severity-badge medium">
                    Medium
                  </span>
                </div>

                <p>
                  Current rainfall intensity is increasing across
                  monitored stations.
                </p>

                <div className="alert-meta">
                  <span>10:10 AM</span>
                  <span>Rainfall: 82 mm/hr</span>
                </div>
              </div>

            </div>

          </div>


          {/* Right Side */}
          <aside className="alerts-sidebar">

            <div className="alert-settings-card">

              <h3>Alert Settings</h3>
              <p>Choose the alerts you want to monitor.</p>

              <label>
                <input type="checkbox" defaultChecked />
                Flood Risk Alerts
              </label>

              <label>
                <input type="checkbox" defaultChecked />
                Drainage Alerts
              </label>

              <label>
                <input type="checkbox" defaultChecked />
                Rainfall Alerts
              </label>

              <label>
                <input type="checkbox" defaultChecked />
                Road Alerts
              </label>

            </div>


            <div className="emergency-card">

              <div className="emergency-icon">
                ⚠
              </div>

              <div>
                <h3>Emergency Response</h3>

                <p>
                  Critical alerts require immediate attention
                  from the municipal response team.
                </p>

                <button>
                  View Response Plan →
                </button>
              </div>

            </div>

          </aside>

        </section>

      </main>
    </>
  );
}

export default Alerts;