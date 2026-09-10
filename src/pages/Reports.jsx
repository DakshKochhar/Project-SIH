import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Reports.css";

function Reports() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="reports-page">

        {/* Header */}
        <div className="reports-header">
          <div>
            <h1>Reports</h1>
            <p>
              Generate and review flood monitoring and risk reports
            </p>
          </div>

          <div className="reports-location">
            Koramangala, Bengaluru
          </div>
        </div>


        {/* Report Summary */}
        <section className="report-stats">

          <div className="report-stat-card">
            <span>Reports Generated</span>
            <strong>24</strong>
            <p>This month</p>
          </div>

          <div className="report-stat-card">
            <span>Flood Reports</span>
            <strong>12</strong>
            <p>Available reports</p>
          </div>

          <div className="report-stat-card">
            <span>Risk Reports</span>
            <strong>7</strong>
            <p>Available reports</p>
          </div>

          <div className="report-stat-card">
            <span>System Reports</span>
            <strong>5</strong>
            <p>Available reports</p>
          </div>

        </section>


        {/* Generate Report */}
        <section className="generate-report-panel">

          <div className="panel-heading">
            <div>
              <h2>Generate New Report</h2>
              <p>
                Select the report type and time period
              </p>
            </div>
          </div>

          <div className="report-form">

            <div className="report-form-group">
              <label>Report Type</label>

              <select>
                <option>Flood Risk Report</option>
                <option>Rainfall Report</option>
                <option>Drainage Report</option>
                <option>Alert Summary</option>
                <option>System Performance Report</option>
              </select>
            </div>


            <div className="report-form-group">
              <label>Time Period</label>

              <select>
                <option>Last 24 Hours</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
              </select>
            </div>


            <div className="report-form-group">
              <label>Format</label>

              <select>
                <option>PDF</option>
                <option>CSV</option>
              </select>
            </div>


            <button className="generate-report-btn">
              Generate Report →
            </button>

          </div>

        </section>


        {/* Recent Reports */}
        <section className="recent-reports-panel">

          <div className="panel-heading">
            <div>
              <h2>Recent Reports</h2>
              <p>
                Previously generated reports
              </p>
            </div>

            <select>
              <option>All Reports</option>
              <option>Flood Risk</option>
              <option>Rainfall</option>
              <option>Drainage</option>
              <option>Alerts</option>
            </select>
          </div>


          <div className="report-row report-header">
            <span>Report Name</span>
            <span>Type</span>
            <span>Period</span>
            <span>Generated</span>
            <span>Status</span>
            <span>Action</span>
          </div>


          <div className="report-row">

            <div>
              <strong>Flood Risk Analysis</strong>
              <small>Koramangala Flood Monitoring</small>
            </div>

            <span>Flood Risk</span>
            <span>Last 24 Hours</span>
            <span>10:25 AM</span>

            <b className="report-status ready">
              Ready
            </b>

            <button className="view-report-btn">
              View
            </button>

          </div>


          <div className="report-row">

            <div>
              <strong>Rainfall Summary</strong>
              <small>Rainfall Station Monitoring</small>
            </div>

            <span>Rainfall</span>
            <span>Last 7 Days</span>
            <span>09:42 AM</span>

            <b className="report-status ready">
              Ready
            </b>

            <button className="view-report-btn">
              View
            </button>

          </div>


          <div className="report-row">

            <div>
              <strong>Drainage Performance</strong>
              <small>Drainage Network Analysis</small>
            </div>

            <span>Drainage</span>
            <span>Last 30 Days</span>
            <span>Yesterday</span>

            <b className="report-status ready">
              Ready
            </b>

            <button className="view-report-btn">
              View
            </button>

          </div>


          <div className="report-row">

            <div>
              <strong>Alert Summary</strong>
              <small>Flood and Infrastructure Alerts</small>
            </div>

            <span>Alerts</span>
            <span>Last 7 Days</span>
            <span>Yesterday</span>

            <b className="report-status processing">
              Processing
            </b>

            <button className="view-report-btn">
              View
            </button>

          </div>

        </section>


        {/* Report Information */}
        <section className="report-info">

          <div className="report-info-icon">
            ℹ
          </div>

          <div>
            <h3>About Reports</h3>

            <p>
              Reports provide summarized information about rainfall,
              flood risk, drainage conditions and system alerts for
              the selected monitoring area.
            </p>
          </div>

        </section>

      </main>
    </>
  );
}

export default Reports;