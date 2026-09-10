import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Analytics.css";

function Analytics() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="analytics-page">

        {/* Header */}
        <div className="analytics-header">
          <div>
            <h1>Historical Analytics</h1>
            <p>
              Analyze historical rainfall, flood risk and drainage performance
            </p>
          </div>

          <div className="analytics-location">
            Koramangala, Bengaluru
          </div>
        </div>


        {/* Filters */}
        <section className="analytics-filters">

          <div className="filter-group">
            <label>Time Period</label>
            <select>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last 1 Year</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Data Type</label>
            <select>
              <option>Rainfall</option>
              <option>Flood Risk</option>
              <option>Drainage</option>
              <option>Road Risk</option>
            </select>
          </div>

          <button className="analytics-filter-btn">
            Apply Filter
          </button>

        </section>


        {/* Statistics */}
        <section className="analytics-stats">

          <div className="analytics-stat-card">
            <span>Total Rainfall</span>
            <strong>486 mm</strong>
            <p>Last 30 days</p>
          </div>

          <div className="analytics-stat-card">
            <span>Peak Rainfall</span>
            <strong>118 mm/hr</strong>
            <p>Highest recorded</p>
          </div>

          <div className="analytics-stat-card">
            <span>Flood Events</span>
            <strong>14</strong>
            <p>Recorded events</p>
          </div>

          <div className="analytics-stat-card">
            <span>Critical Events</span>
            <strong>5</strong>
            <p>Required response</p>
          </div>

        </section>


        {/* Charts */}
        <section className="analytics-content">

          <div className="analytics-chart-panel">

            <div className="panel-heading">
              <div>
                <h2>Rainfall History</h2>
                <p>Rainfall intensity over the selected period</p>
              </div>
            </div>

            <div className="analytics-chart">

              <div className="chart-y-axis">
                <span>120</span>
                <span>100</span>
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>

              <div className="chart-main">

                <div className="analytics-grid"></div>

                <div className="analytics-bars">

                  <div className="analytics-bar" style={{ height: "38%" }}>
                    <span>45</span>
                  </div>

                  <div className="analytics-bar" style={{ height: "52%" }}>
                    <span>62</span>
                  </div>

                  <div className="analytics-bar" style={{ height: "45%" }}>
                    <span>54</span>
                  </div>

                  <div className="analytics-bar" style={{ height: "72%" }}>
                    <span>86</span>
                  </div>

                  <div className="analytics-bar" style={{ height: "91%" }}>
                    <span>109</span>
                  </div>

                  <div className="analytics-bar active" style={{ height: "98%" }}>
                    <span>118</span>
                  </div>

                  <div className="analytics-bar" style={{ height: "61%" }}>
                    <span>73</span>
                  </div>

                </div>

                <div className="chart-x-axis">
                  <span>18 May</span>
                  <span>19 May</span>
                  <span>20 May</span>
                  <span>21 May</span>
                  <span>22 May</span>
                  <span>23 May</span>
                  <span>24 May</span>
                </div>

              </div>

            </div>

          </div>


          {/* Risk Summary */}
          <div className="risk-history-panel">

            <h2>Flood Risk History</h2>

            <p className="panel-subtitle">
              Historical distribution of flood risk levels
            </p>

            <div className="risk-history-circle">
              <strong>42</strong>
              <span>Risk Events</span>
            </div>

            <div className="risk-history-list">

              <div>
                <span className="history-dot low"></span>
                <span>Low Risk</span>
                <strong>12</strong>
              </div>

              <div>
                <span className="history-dot medium"></span>
                <span>Medium Risk</span>
                <strong>14</strong>
              </div>

              <div>
                <span className="history-dot high"></span>
                <span>High Risk</span>
                <strong>10</strong>
              </div>

              <div>
                <span className="history-dot critical"></span>
                <span>Critical Risk</span>
                <strong>6</strong>
              </div>

            </div>

          </div>

        </section>


        {/* Historical Events */}
        <section className="events-panel">

          <div className="panel-heading">
            <div>
              <h2>Historical Flood Events</h2>
              <p>Previously recorded flood-risk events</p>
            </div>
          </div>

          <div className="event-row event-header">
            <span>Date</span>
            <span>Location</span>
            <span>Rainfall</span>
            <span>Risk</span>
            <span>Status</span>
          </div>

          <div className="event-row">
            <span>24 May 2026</span>
            <span>Koramangala 5th Block</span>
            <span>118 mm/hr</span>
            <b className="event-critical">Critical</b>
            <span>Resolved</span>
          </div>

          <div className="event-row">
            <span>22 May 2026</span>
            <span>HSR Layout</span>
            <span>96 mm/hr</span>
            <b className="event-high">High</b>
            <span>Resolved</span>
          </div>

          <div className="event-row">
            <span>20 May 2026</span>
            <span>BTM Layout</span>
            <span>82 mm/hr</span>
            <b className="event-high">High</b>
            <span>Resolved</span>
          </div>

          <div className="event-row">
            <span>18 May 2026</span>
            <span>Ejipura</span>
            <span>61 mm/hr</span>
            <b className="event-medium">Medium</b>
            <span>Resolved</span>
          </div>

        </section>


        {/* Insights */}
        <section className="analytics-insights">

          <div>
            <span>KEY INSIGHT</span>
            <h3>Heavy rainfall is strongly associated with increased flood risk.</h3>
          </div>

          <p>
            Historical monitoring indicates that flood-risk levels increase
            when rainfall intensity remains high and drainage capacity becomes
            overloaded.
          </p>

        </section>

      </main>
    </>
  );
}

export default Analytics;