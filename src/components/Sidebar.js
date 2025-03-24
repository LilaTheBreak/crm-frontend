// src/components/Sidebar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaCalendarAlt,
  FaHandshake,
  FaChartBar,
  FaFileAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaLightbulb,
  FaQuestionCircle,
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(); // Optional: refresh to reset state
  };

  return (
    <div className="sidebar">
      <div>
      <div className="sidebar-logo">
  <img src={require("../assets/Logo.png")} alt="The Break Logo" />
</div>

        <div className="sidebar-menu">
          <Link to="/talent"><FaHeart /> Talent</Link>
          <Link to="/contacts"><FaUser /> Contacts</Link>
          <Link to="/accounts"><FaBriefcase /> Accounts</Link>
          <Link to="/inbox"><FaEnvelope /> Inbox</Link>
          <Link to="/calendar"><FaCalendarAlt /> Calendar</Link>
          <Link to="/deals"><FaHandshake /> Deals</Link>
          <Link to="/statistics"><FaChartBar /> Statistics</Link>
          <Link to="/reports"><FaFileAlt /> Reports</Link>
          <Link to="/notifications"><FaBell /> Notifications</Link>
          <Link to="/settings"><FaCog /> Settings</Link>
          <button className="sidebar-logout" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      <div className="sidebar-bottom">
        <Link to="/training-portal"><FaLightbulb /> Training Portal</Link>
        <Link to="/account"><FaUser /> Account</Link>
        <Link to="/help"><FaQuestionCircle /> Help</Link>
      </div>
    </div>
  );
};

export default Sidebar;

