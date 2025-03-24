import React, { useState } from "react";
import "../styles/Talent.css";
import { FaPlus, FaFileAlt } from "react-icons/fa";

const TalentDashboard = () => {
  const [selectedTalent, setSelectedTalent] = useState("Lewis Hamilton");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  return (
    <div className="talent-dashboard">
      {/* Header */}
      <div className="talent-header">
        <h1>Talent Dashboard</h1>
        <div className="talent-header-actions">
          <button className="btn template-btn">
            <FaFileAlt /> Load Templates
          </button>
          <button className="btn deal-btn">
            <FaPlus /> New Deal
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <label>Select period:</label>
        <input
          type="date"
          value={dateRange.start}
          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
        />
        <span> to </span>
        <input
          type="date"
          value={dateRange.end}
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
        />

        <select
          className="talent-dropdown"
          value={selectedTalent}
          onChange={(e) => setSelectedTalent(e.target.value)}
        >
          <option>Lewis Hamilton</option>
          <option>Other Talent</option>
        </select>
      </div>

      {/* Main Content Layout */}
      <div className="talent-main-layout">
        {/* Left Column */}
        <div className="left-column">
          <div className="profile-section">
            <img
              src="https://example.com/lewis.jpg"
              alt="Talent"
              className="profile-img"
            />
            <h2>Lewis Hamilton</h2>
            <button className="upload-btn">Upload Photo</button>
          </div>

          <div className="tasks-section">
            <h3>Tasks</h3>
            {/* Task items will go here */}
          </div>

          <div className="active-deals-section">
            <h3>Active Deals</h3>
            {/* Active deals content here */}
          </div>
        </div>

        {/* Center Calendar */}
        <div className="calendar-column">
          <div className="calendar-header">
            <h3>Calendar</h3>
            <select>
              <option>January</option>
              <option>February</option>
            </select>
            <button className="view-toggle">Month View</button>
          </div>

          <div className="calendar-body">
            {/* Calendar Grid UI */}
          </div>

          <div className="deal-opportunities">
            <h3>New Deal Opportunities</h3>
            {/* Scraped deal intent UI here */}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="calendar-key">
            <h4>Calendar Coding</h4>
            {/* Color coded legend */}
          </div>

          <div className="event-suggestions">
            <h4>Suggested Invitations</h4>
            {/* Scraped emails → events UI */}
          </div>

          <div className="clash-section">
            <h4>Scheduling Clashes</h4>
            {/* Detected clash alerts */}
          </div>
        </div>
      </div>

      {/* Bottom Charts Section */}
      <div className="charts-section">
        <h3>Deal Dashboard</h3>
        {/* Pie, Bar, and Enquiries Charts go here */}
      </div>

      <div className="lower-grid">
        <div className="active-deals">
          <h3>Active Deals</h3>
          {/* Dynamic task stages UI */}
        </div>

        <div className="performance-metrics">
          <h3>Performance Metrics</h3>
          {/* Engagement + Follower data */}
        </div>

        <div className="communication-log">
          <h3>Logged Communication</h3>
          {/* Messages synced/logged */}
        </div>

        <div className="talent-preferences">
          <h3>Talent Preferences</h3>
          {/* Summary email settings, auto-gifting, filters */}
        </div>
      </div>
    </div>
  );
};

export default TalentDashboard;