import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./FloodPrediction.css";

function FloodPrediction() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="prediction-page">

        {/* Header */}
        <div className="prediction-header">
          <div>
            <h1>Flood Prediction</h1>
            <p>
              Predict upcoming flood risk using rainfall and environmental data
            </p>
          </div>

          <div className="prediction-location">
            Koramangala, Bengaluru
          </div>
        </div>


        {/* Prediction Overview */}
        <section className="prediction-overview">

          <div className="prediction-gauge-card">

            <div className="gauge-header">
              <div>
                <span>Current Flood Risk</span>
                <h2>Critical</h2>
              </div>

              <span className="live-status">
                ● Live
              </span>
            </div>

            <div className="risk-gauge">
              <div className="gauge-circle">
                <strong>91%</strong>
                <span>Risk Score</span>
              </div>
            </div>

            <div className="risk-message">
              Flood risk is expected to remain high during the next
              1–3 hours based on current rainfall conditions.
            </div>

          </div>


          {/* Prediction Factors */}
          <div className="prediction-factors">

            <h2>Prediction Factors</h2>

            <div className="factor-item">
              <div>
                <span>Rainfall Intensity</span>
                <strong>82 mm/hr</strong>
              </div>

              <div className="factor-bar">
                <span style={{ width: "88%" }}></span>
              </div>
            </div>


            <div className="factor-item">
              <div>
                <span>Drain Capacity</span>
                <strong>28%</strong>
              </div>

              <div className="factor-bar">
                <span style={{ width: "28%" }}></span>
              </div>
            </div>


            <div className="factor-item">
              <div>
                <span>Water Level</span>
                <strong>76%</strong>
              </div>

              <div className="factor-bar">
                <span style={{ width: "76%" }}></span>
              </div>
            </div>


            <div className="factor-item">
              <div>
                <span>Soil Saturation</span>
                <strong>84%</strong>
              </div>

              <div className="factor-bar">
                <span style={{ width: "84%" }}></span>
              </div>
            </div>

          </div>

        </section>


        {/* Prediction Timeline */}
        <section className="timeline-panel">

          <div className="panel-heading">
            <div>
              <h2>Flood Risk Prediction</h2>
              <p>Expected risk level over the next 3 hours</p>
            </div>

            <span className="prediction-badge">
              AI Prediction
            </span>
          </div>


          <div className="prediction-timeline">

            <div className="prediction-point">
              <span className="time">Now</span>
              <div className="point critical-point"></div>
              <strong>91%</strong>
              <small>Critical</small>
            </div>


            <div className="prediction-line"></div>


            <div className="prediction-point">
              <span className="time">30 min</span>
              <div className="point high-point"></div>
              <strong>72%</strong>
              <small>High</small>
            </div>


            <div className="prediction-line"></div>


            <div className="prediction-point">
              <span className="time">60 min</span>
              <div className="point critical-point"></div>
              <strong>88%</strong>
              <small>Critical</small>
            </div>


            <div className="prediction-line"></div>


            <div className="prediction-point">
              <span className="time">120 min</span>
              <div className="point critical-point"></div>
              <strong>91%</strong>
              <small>Critical</small>
            </div>


            <div className="prediction-line"></div>


            <div className="prediction-point">
              <span className="time">180 min</span>
              <div className="point critical-point"></div>
              <strong>94%</strong>
              <small>Critical</small>
            </div>

          </div>

        </section>


        {/* Risk Zones */}
        <section className="risk-zones-panel">

          <div className="panel-heading">
            <div>
              <h2>Predicted Risk Zones</h2>
              <p>Areas expected to experience increased flood risk</p>
            </div>
          </div>


          <div className="risk-zone-grid">

            <div className="zone-card">
              <div className="zone-top">
                <span className="zone-icon">🌊</span>
                <span className="zone-level critical">
                  Critical
                </span>
              </div>

              <h3>Koramangala 5th Block</h3>

              <p>
                High rainfall and overloaded drainage capacity.
              </p>

              <div className="zone-bottom">
                <span>Risk Score</span>
                <strong>94%</strong>
              </div>
            </div>


            <div className="zone-card">
              <div className="zone-top">
                <span className="zone-icon">🌊</span>
                <span className="zone-level high">
                  High
                </span>
              </div>

              <h3>HSR Layout</h3>

              <p>
                Increasing rainfall may cause localized flooding.
              </p>

              <div className="zone-bottom">
                <span>Risk Score</span>
                <strong>78%</strong>
              </div>
            </div>


            <div className="zone-card">
              <div className="zone-top">
                <span className="zone-icon">🌊</span>
                <span className="zone-level high">
                  High
                </span>
              </div>

              <h3>BTM Layout</h3>

              <p>
                Drainage capacity is approaching critical levels.
              </p>

              <div className="zone-bottom">
                <span>Risk Score</span>
                <strong>72%</strong>
              </div>
            </div>


            <div className="zone-card">
              <div className="zone-top">
                <span className="zone-icon">🌊</span>
                <span className="zone-level medium">
                  Medium
                </span>
              </div>

              <h3>Ejipura</h3>

              <p>
                Moderate rainfall with manageable drainage load.
              </p>

              <div className="zone-bottom">
                <span>Risk Score</span>
                <strong>54%</strong>
              </div>
            </div>

          </div>

        </section>


        {/* Recommendation */}
        <section className="prediction-recommendation">

          <div className="recommendation-icon">
            ⚠
          </div>

          <div>
            <h3>Recommended Action</h3>

            <p>
              Monitor critical zones closely and consider activating
              flood-response measures if rainfall intensity continues
              to increase.
            </p>
          </div>

        </section>

      </main>
    </>
  );
}

export default FloodPrediction;