import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./Rainfall.css";

function Rainfall() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="rainfall-page">

        <div className="rainfall-header">
          <div>
            <h1>Rainfall Monitor</h1>
            <p>
              Monitor current rainfall and upcoming rainfall forecast
            </p>
          </div>

          <div className="rainfall-location">
            Koramangala, Bengaluru
          </div>
        </div>


        {/* Rainfall Statistics */}

        <section className="rainfall-stats">

          <div className="rainfall-card">
            <span>Current Rainfall</span>
            <strong>82 <small>mm/hr</small></strong>
            <p>Heavy Rain</p>
          </div>

          <div className="rainfall-card">
            <span>Last 1 Hour</span>
            <strong>76 <small>mm</small></strong>
            <p>Total rainfall</p>
          </div>

          <div className="rainfall-card">
            <span>Next 1 Hour</span>
            <strong>91 <small>mm</small></strong>
            <p>Forecast rainfall</p>
          </div>

          <div className="rainfall-card">
            <span>Next 3 Hours</span>
            <strong>110 <small>mm</small></strong>
            <p>Forecast rainfall</p>
          </div>

        </section>


        <section className="rainfall-content">

          {/* Chart */}

          <div className="rainfall-chart-panel">

            <div className="panel-heading">
              <div>
                <h2>Rainfall Intensity</h2>
                <p>Hourly rainfall measurements</p>
              </div>

              <select>
                <option>Last 6 Hours</option>
                <option>Last 12 Hours</option>
                <option>Last 24 Hours</option>
              </select>
            </div>


            <div className="rain-chart">

              <div className="chart-y">
                <span>100</span>
                <span>80</span>
                <span>60</span>
                <span>40</span>
                <span>20</span>
                <span>0</span>
              </div>

              <div className="chart-area">

                <div className="chart-grid"></div>

                <div className="bars">

                  <div className="bar" style={{ height: "35%" }}>
                    <span>28</span>
                  </div>

                  <div className="bar" style={{ height: "48%" }}>
                    <span>39</span>
                  </div>

                  <div className="bar" style={{ height: "61%" }}>
                    <span>51</span>
                  </div>

                  <div className="bar" style={{ height: "72%" }}>
                    <span>64</span>
                  </div>

                  <div className="bar" style={{ height: "84%" }}>
                    <span>76</span>
                  </div>

                  <div className="bar active-bar" style={{ height: "91%" }}>
                    <span>82</span>
                  </div>

                </div>

                <div className="chart-x">
                  <span>05 AM</span>
                  <span>06 AM</span>
                  <span>07 AM</span>
                  <span>08 AM</span>
                  <span>09 AM</span>
                  <span>10 AM</span>
                </div>

              </div>

            </div>

          </div>


          {/* Forecast */}

          <div className="forecast-panel">

            <h2>Rainfall Forecast</h2>

            <p className="forecast-subtitle">
              Expected rainfall for upcoming hours
            </p>

            <div className="forecast-item">
              <span>11:00 AM</span>
              <strong>85 mm</strong>
              <b>Heavy</b>
            </div>

            <div className="forecast-item">
              <span>12:00 PM</span>
              <strong>91 mm</strong>
              <b>Heavy</b>
            </div>

            <div className="forecast-item">
              <span>01:00 PM</span>
              <strong>110 mm</strong>
              <b>Very Heavy</b>
            </div>

            <div className="forecast-item">
              <span>02:00 PM</span>
              <strong>96 mm</strong>
              <b>Heavy</b>
            </div>

          </div>

        </section>


        {/* Rainfall Stations */}

        <section className="stations-panel">

          <div className="panel-heading">
            <div>
              <h2>Rainfall Stations</h2>
              <p>Current readings from monitored stations</p>
            </div>
          </div>

          <div className="station-row station-header">
            <span>Station</span>
            <span>Location</span>
            <span>Rainfall</span>
            <span>Status</span>
          </div>

          <div className="station-row">
            <span>RF-01</span>
            <span>Koramangala</span>
            <span>82 mm/hr</span>
            <b>Heavy</b>
          </div>

          <div className="station-row">
            <span>RF-02</span>
            <span>HSR Layout</span>
            <span>74 mm/hr</span>
            <b>Heavy</b>
          </div>

          <div className="station-row">
            <span>RF-03</span>
            <span>BTM Layout</span>
            <span>61 mm/hr</span>
            <b>Moderate</b>
          </div>

          <div className="station-row">
            <span>RF-04</span>
            <span>5th Block</span>
            <span>89 mm/hr</span>
            <b>Heavy</b>
          </div>

        </section>

      </main>
    </>
  );
}

export default Rainfall;