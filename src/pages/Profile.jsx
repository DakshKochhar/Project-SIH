import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/login");
  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <main className="profile-page">

        {/* Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            F
          </div>

          <div className="profile-title">
            <h1>My Profile</h1>
            <p>Manage your FlowCast profile and account</p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="profile-card">

          <div className="profile-card-title">
            <h2>Account Information</h2>
            <span>ADMIN ACCOUNT</span>
          </div>

          <div className="profile-row">
            <div>
              <span className="profile-label">Name</span>
              <strong>FlowCast User</strong>
            </div>
          </div>

          <div className="profile-row">
            <div>
              <span className="profile-label">Email</span>
              <strong>user@flowcast.com</strong>
            </div>
          </div>

          <div className="profile-row">
            <div>
              <span className="profile-label">Role</span>
              <strong>Municipal Authority</strong>
            </div>
          </div>

          <div className="profile-row">
            <div>
              <span className="profile-label">Account Status</span>
              <strong className="status-active">
                <span className="status-dot"></span>
                Active
              </strong>
            </div>
          </div>

          <div className="profile-actions">
            <button
              className="profile-back"
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </button>

            <button
              className="profile-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

        </div>

      </main>
    </>
  );
}

export default Profile;