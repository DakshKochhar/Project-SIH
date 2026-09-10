import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="home-page">

        {/* Hero Section */}
        <section className="hero-section">

          <div className="hero-content">

            <span className="hero-badge">
              🌊 Urban Flood Nowcasting System
            </span>

            <h1>
              Monitor. Predict.
              <span> Respond.</span>
            </h1>

            <p>
              FlowCast provides intelligent flood monitoring,
              prediction, risk analysis and safer route planning
              for urban areas.
            </p>

            <div className="hero-buttons">

              <Link
                to="/dashboard"
                className="primary-btn"
              >
                Explore Dashboard →
              </Link>

              <Link
                to="/dashboard"
                className="secondary-btn"
              >
                View Live Map
              </Link>

            </div>

          </div>

          {/* Hero visual */}
          <div className="hero-visual">

            <div className="hero-card">

              <div className="hero-card-header">
                <span>Live Flood Risk</span>
                <span className="live-dot">● Live</span>
              </div>

              <div className="risk-display">
                <strong>91%</strong>
                <span>Critical Risk</span>
              </div>

              <div className="mini-stats">

                <div>
                  <span>Rainfall</span>
                  <strong>82 mm/hr</strong>
                </div>

                <div>
                  <span>Risk Zones</span>
                  <strong>14</strong>
                </div>

                <div>
                  <span>Alerts</span>
                  <strong>3</strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Features */}
        <section className="features-section">

          <div className="section-heading">
            <span>CORE CAPABILITIES</span>
            <h2>Everything you need to manage flood risk</h2>
          </div>

          <div className="features-grid">

            <div className="feature-card">
              <div className="feature-icon">🌧️</div>
              <h3>Rainfall Monitoring</h3>
              <p>
                Monitor current rainfall and forecast
                upcoming precipitation.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌊</div>
              <h3>Flood Prediction</h3>
              <p>
                Identify flood-prone areas and predict
                future flood risk.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚰</div>
              <h3>Drainage Monitoring</h3>
              <p>
                Track overloaded and critical drainage
                infrastructure.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚗</div>
              <h3>Safe Route Planning</h3>
              <p>
                Find safer routes while avoiding
                high-risk flood zones.
              </p>
            </div>

          </div>

        </section>


        {/* How it works */}
        <section className="how-section">

          <div className="section-heading">
            <span>HOW FLOWCAST WORKS</span>
            <h2>From rainfall to actionable insights</h2>
          </div>

          <div className="steps-grid">

            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Collect</h3>
              <p>
                Gather rainfall, weather and infrastructure
                data.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Analyze</h3>
              <p>
                Analyze environmental conditions and
                identify potential risks.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Predict</h3>
              <p>
                Generate flood-risk predictions for
                upcoming time periods.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Respond</h3>
              <p>
                Provide alerts and safer route
                recommendations.
              </p>
            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="home-cta">

          <h2>
            Stay ahead of urban flood risk.
          </h2>

          <p>
            Monitor your area and make faster,
            safer decisions with FlowCast.
          </p>

          <Link
            to="/dashboard"
            className="primary-btn"
          >
            Open Dashboard →
          </Link>

        </section>


        <footer className="home-footer">
          <strong>FLOWCAST</strong>
          <span>Urban Flood Nowcasting System</span>
        </footer>

      </main>
    </>
  );
}

export default Home;