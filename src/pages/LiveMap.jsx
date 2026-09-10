import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./LiveMap.css";

function LiveMap() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="live-map-page">

        <div className="page-header">
          <div>
            <h1>FlowCast Live Map</h1>
            <p>
              Real-time flood risk and infrastructure monitoring
            </p>
          </div>

          <div className="map-time">
            Updated: 10:30:12 AM
          </div>
        </div>


        <section className="live-map-layout">

          {/* Map */}
          <div className="large-map">

            <div className="map-title">
              <strong>Live Flood Risk Map</strong>
              <span>Koramangala, Bengaluru</span>
            </div>

            <div className="map-risk risk-a"></div>
            <div className="map-risk risk-b"></div>
            <div className="map-risk risk-c"></div>

            <div className="road road-one"></div>
            <div className="road road-two"></div>
            <div className="road road-three"></div>

            <div className="location-label label-one">
              Koramangala 5th Block
            </div>

            <div className="location-label label-two">
              HSR Layout
            </div>

            <div className="location-label label-three">
              BTM Layout
            </div>


            {/* Map Controls */}
            <div className="map-controls">
              <button>+</button>
              <button>−</button>
              <button>⌗</button>
            </div>


            {/* Prediction */}
            <div className="prediction-panel">

              <span>Prediction Time</span>

              <strong>60 min from now</strong>

              <div className="map-timeline">
                <span>Now</span>
                <span>30m</span>
                <span className="selected">60m</span>
                <span>120m</span>
                <span>180m</span>
              </div>

            </div>

          </div>


          {/* Right panel */}
          <aside className="map-sidebar">

            <div className="map-side-card">

              <h3>Map Layers</h3>

              <label>
                <input type="checkbox" defaultChecked />
                Flood Risk
              </label>

              <label>
                <input type="checkbox" defaultChecked />
                Roads
              </label>

              <label>
                <input type="checkbox" defaultChecked />
                Drains
              </label>

              <label>
                <input type="checkbox" />
                Rainfall
              </label>

            </div>


            <div className="map-side-card">

              <h3>Risk Level</h3>

              <div className="risk-item">
                <span className="risk-dot low"></span>
                Low Risk
              </div>

              <div className="risk-item">
                <span className="risk-dot medium"></span>
                Medium Risk
              </div>

              <div className="risk-item">
                <span className="risk-dot high"></span>
                High Risk
              </div>

              <div className="risk-item">
                <span className="risk-dot critical"></span>
                Critical Risk
              </div>

            </div>


            <div className="map-side-card current-risk">

              <h3>Current Area Risk</h3>

              <strong>HIGH</strong>

              <p>
                Flood risk is elevated in
                several monitored zones.
              </p>

              <div className="risk-progress">
                <span></span>
              </div>

              <small>
                Risk Level: 72%
              </small>

            </div>

          </aside>

        </section>

      </main>
    </>
  );
}

export default LiveMap;