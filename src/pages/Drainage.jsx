import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Drainage.css";

function Drainage() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="drainage-page">

        {/* Header */}
        <div className="drainage-header">
          <div>
            <h1>Drainage Monitor</h1>
            <p>
              Monitor drainage capacity, water flow and overloaded drains
            </p>
          </div>

          <div className="drainage-location">
            Koramangala, Bengaluru
          </div>
        </div>


        {/* Statistics */}
        <section className="drainage-stats">

          <div className="drainage-stat-card">
            <span>Total Drains</span>
            <strong>48</strong>
            <p>Monitored</p>
          </div>

          <div className="drainage-stat-card">
            <span>Overloaded</span>
            <strong>12</strong>
            <p>Critical</p>
          </div>

          <div className="drainage-stat-card">
            <span>High Load</span>
            <strong>9</strong>
            <p>Needs attention</p>
          </div>

          <div className="drainage-stat-card">
            <span>Normal</span>
            <strong>27</strong>
            <p>Operating normally</p>
          </div>

        </section>


        {/* Main Content */}
        <section className="drainage-content">

          {/* Drainage Table */}
          <div className="drainage-table-panel">

            <div className="panel-heading">
              <div>
                <h2>Drainage Network</h2>
                <p>Current status of monitored drainage points</p>
              </div>

              <select>
                <option>All Drains</option>
                <option>Critical</option>
                <option>High</option>
                <option>Normal</option>
              </select>
            </div>


            <div className="drainage-table">

              <div className="drain-row drain-header">
                <span>ID</span>
                <span>Location</span>
                <span>Flow</span>
                <span>Capacity</span>
                <span>Status</span>
              </div>


              <div className="drain-row">
                <span>D-12</span>
                <span>5th Block</span>
                <span>42 m³/s</span>
                <span>96%</span>
                <b className="status-critical">Critical</b>
              </div>


              <div className="drain-row">
                <span>D-07</span>
                <span>HSR Layout</span>
                <span>31 m³/s</span>
                <span>88%</span>
                <b className="status-critical">Critical</b>
              </div>


              <div className="drain-row">
                <span>D-03</span>
                <span>BTM Layout</span>
                <span>23 m³/s</span>
                <span>82%</span>
                <b className="status-high">High</b>
              </div>


              <div className="drain-row">
                <span>D-18</span>
                <span>Koramangala</span>
                <span>30 m³/s</span>
                <span>79%</span>
                <b className="status-high">High</b>
              </div>


              <div className="drain-row">
                <span>D-21</span>
                <span>Ejipura</span>
                <span>18 m³/s</span>
                <span>54%</span>
                <b className="status-normal">Normal</b>
              </div>


              <div className="drain-row">
                <span>D-15</span>
                <span>Indiranagar</span>
                <span>16 m³/s</span>
                <span>48%</span>
                <b className="status-normal">Normal</b>
              </div>

            </div>

          </div>


          {/* Right Side */}
          <aside className="drainage-side">

            {/* Capacity */}
            <div className="drainage-side-card">

              <h3>Network Capacity</h3>

              <div className="capacity-circle">
                <strong>74%</strong>
                <span>Average Load</span>
              </div>

              <p>
                Drainage network is operating under elevated load.
              </p>

            </div>


            {/* Critical Drains */}
            <div className="drainage-side-card">

              <h3>Critical Drains</h3>

              <div className="critical-drain">
                <div>
                  <strong>D-12</strong>
                  <span>5th Block</span>
                </div>

                <b>96%</b>
              </div>


              <div className="critical-drain">
                <div>
                  <strong>D-07</strong>
                  <span>HSR Layout</span>
                </div>

                <b>88%</b>
              </div>


              <div className="critical-drain">
                <div>
                  <strong>D-03</strong>
                  <span>BTM Layout</span>
                </div>

                <b>82%</b>
              </div>

            </div>


            {/* Drainage Alert */}
            <div className="drainage-alert">

              <div className="alert-icon">
                ⚠
              </div>

              <div>
                <h3>Drainage Alert</h3>

                <p>
                  Multiple drainage points are approaching
                  maximum capacity.
                </p>
              </div>

            </div>

          </aside>

        </section>


        {/* Flow Monitoring */}
        <section className="flow-panel">

          <div className="panel-heading">
            <div>
              <h2>Drainage Flow Monitoring</h2>
              <p>Recent flow measurements across the network</p>
            </div>
          </div>


          <div className="flow-grid">

            <div className="flow-card">
              <span>D-12</span>
              <strong>42 m³/s</strong>

              <div className="flow-bar">
                <span style={{ width: "96%" }}></span>
              </div>

              <small>96% capacity</small>
            </div>


            <div className="flow-card">
              <span>D-07</span>
              <strong>31 m³/s</strong>

              <div className="flow-bar">
                <span style={{ width: "88%" }}></span>
              </div>

              <small>88% capacity</small>
            </div>


            <div className="flow-card">
              <span>D-03</span>
              <strong>23 m³/s</strong>

              <div className="flow-bar">
                <span style={{ width: "82%" }}></span>
              </div>

              <small>82% capacity</small>
            </div>


            <div className="flow-card">
              <span>D-21</span>
              <strong>18 m³/s</strong>

              <div className="flow-bar">
                <span style={{ width: "54%" }}></span>
              </div>

              <small>54% capacity</small>
            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Drainage;