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
import Logo from "../assets/Logo.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar-logo">
          <img src={Logo} alt="The Break Logo" className="sidebar-logo-img" />
        </div>
        <div className="sidebar-menu">
          <Link to="/talent"><FaHeart /> <span>Talent</span></Link>
          <Link to="/contacts"><FaUser /> <span>Contacts</span></Link>
          <Link to="/accounts"><FaBriefcase /> <span>Accounts</span></Link>
          <Link to="/inbox"><FaEnvelope /> <span>Inbox</span></Link>
          <Link to="/calendar"><FaCalendarAlt /> <span>Calendar</span></Link>
          <Link to="/deals"><FaHandshake /> <span>Deals</span></Link>
          <Link to="/statistics"><FaChartBar /> <span>Statistics</span></Link>
          <Link to="/reports"><FaFileAlt /> <span>Reports</span></Link>
          <Link to="/notifications"><FaBell /> <span>Notifications</span></Link>
          <Link to="/settings"><FaCog /> <span>Settings</span></Link>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="sidebar-bottom">
        <Link to="/training-portal"><FaLightbulb /> <span>Training Portal</span></Link>
        <Link to="/account"><FaUser /> <span>Account</span></Link>
        <Link to="/help"><FaQuestionCircle /> <span>Help</span></Link>
      </div>
    </div>
  );
};

export default Sidebar;

