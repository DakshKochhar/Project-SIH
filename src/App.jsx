import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LiveMap from "./pages/LiveMap";
import Rainfall from "./pages/Rainfall";
import FloodPrediction from "./pages/FloodPrediction";
import Drainage from "./pages/Drainage";
import SafeRoute from "./pages/SafeRoute";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/live-map" element={<LiveMap />} />
        <Route path="/rainfall" element={<Rainfall />} />
        <Route path="/flood-prediction"element={<FloodPrediction />}/>
        <Route path="/drainage"element={<Drainage />}/>
        <Route path="/safe-route"element={<SafeRoute />}/>
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;