import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./SafeRoute.css";

function SafeRoute() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="safe-route-page">

        {/* Header */}
        <div className="safe-route-header">
          <div>
            <h1>Safe Route Planner</h1>
            <p>
              Find safer routes while avoiding high-risk flood zones
            </p>
          </div>

          <div className="route-location">
            Koramangala, Bengaluru
          </div>
        </div>


        {/* Route Search */}
        <section className="route-search-panel">

          <div className="route-input-group">
            <label>From</label>

            <div className="route-input-box">
              <span>●</span>
              <input
                type="text"
                placeholder="Enter starting location"
                defaultValue="Koramangala Police Station"
              />
            </div>
          </div>


          <button className="swap-route">
            ⇅
          </button>


          <div className="route-input-group">
            <label>To</label>

            <div className="route-input-box">
              <span>●</span>
              <input
                type="text"
                placeholder="Enter destination"
                defaultValue="St. John's Hospital, Koramangala"
              />
            </div>
          </div>


          <button className="find-route-btn">
            Find Safe Route →
          </button>

        </section>


        {/* Route Content */}
        <section className="safe-route-content">

          {/* Map */}
          <div className="route-map-panel">

            <div className="route-map">

              <div className="map-road route-road-one"></div>
              <div className="map-road route-road-two"></div>
              <div className="map-road route-road-three"></div>
              <div className="map-road route-road-four"></div>

              <div className="flood-area flood-area-one"></div>
              <div className="flood-area flood-area-two"></div>
              <div className="flood-area flood-area-three"></div>

              <div className="route-line"></div>

              <div className="route-marker start-marker">
                A
              </div>

              <div className="route-marker end-marker">
                B
              </div>

              <div className="map-label route-label-one">
                Koramangala
              </div>

              <div className="map-label route-label-two">
                HSR Layout
              </div>

              <div className="map-label route-label-three">
                5th Block
              </div>


              <div className="route-map-legend">

                <div>
                  <span className="legend-safe"></span>
                  Safe Route
                </div>

                <div>
                  <span className="legend-risk"></span>
                  Flood Risk
                </div>

              </div>

            </div>

          </div>


          {/* Route Details */}
          <aside className="route-details">

            <div className="route-summary">

              <div className="route-summary-header">
                <div>
                  <span>Recommended Route</span>
                  <h2>Route A</h2>
                </div>

                <span className="safe-badge">
                  LOW RISK
                </span>
              </div>


              <div className="route-main-stats">

                <div>
                  <strong>6.2 km</strong>
                  <span>Distance</span>
                </div>

                <div>
                  <strong>18 min</strong>
                  <span>Estimated Time</span>
                </div>

              </div>


              <div className="route-risk-bar">

                <div className="risk-bar-header">
                  <span>Route Safety</span>
                  <strong>86%</strong>
                </div>

                <div className="route-progress">
                  <span></span>
                </div>

              </div>

            </div>


            {/* Route Instructions */}
            <div className="route-instructions">

              <h3>Route Instructions</h3>

              <div className="instruction">
                <span>01</span>
                <p>
                  Start from Koramangala Police Station
                </p>
              </div>

              <div className="instruction">
                <span>02</span>
                <p>
                  Continue towards 5th Block
                </p>
              </div>

              <div className="instruction">
                <span>03</span>
                <p>
                  Avoid the flooded section near 80ft Road
                </p>
              </div>

              <div className="instruction">
                <span>04</span>
                <p>
                  Reach St. John's Hospital
                </p>
              </div>

            </div>


            {/* Alternative Route */}
            <div className="alternative-route">

              <div>
                <span>Alternative Route</span>
                <strong>7.4 km • 23 min</strong>
              </div>

              <span className="medium-route">
                MEDIUM RISK
              </span>

            </div>

          </aside>

        </section>


        {/* Avoid Areas */}
        <section className="avoid-panel">

          <div className="panel-heading">
            <div>
              <h2>Flood Zones to Avoid</h2>
              <p>
                Areas with elevated flood risk along the selected route
              </p>
            </div>
          </div>


          <div className="avoid-grid">

            <div className="avoid-card">
              <span className="avoid-icon">⚠</span>

              <div>
                <h3>80ft Road</h3>
                <p>Critical flood risk</p>
              </div>

              <strong>91%</strong>
            </div>


            <div className="avoid-card">
              <span className="avoid-icon">⚠</span>

              <div>
                <h3>5th Block Junction</h3>
                <p>High flood risk</p>
              </div>

              <strong>78%</strong>
            </div>


            <div className="avoid-card">
              <span className="avoid-icon">⚠</span>

              <div>
                <h3>HSR Main Road</h3>
                <p>High flood risk</p>
              </div>

              <strong>72%</strong>
            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default SafeRoute;