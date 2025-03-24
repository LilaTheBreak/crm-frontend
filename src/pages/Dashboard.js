import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Hello Jennifer</h1>
        <div className="dashboard-controls">
          <select>
            <option>from Jan 1, 2022</option>
          </select>
          <select>
            <option>to Dec 31, 2022</option>
          </select>
          <select>
            <option>All Talent</option>
          </select>
          <button>Customise Dashboard</button>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Deal Management */}
        <div className="widget deal-list">
          <h3>Deal Management</h3>
          <ul>
            <li>🟢 Sony Activation Deal</li>
            <li>🟢 Apple Social Media Deal</li>
            <li>🔴 Snapchat Speaking Event</li>
          </ul>
        </div>

        {/* To Do List */}
        <div className="widget todo-list">
          <h3>To Do List</h3>
          <ul>
            <li>Complete Sony Contract</li>
            <li>Reply to Laura at Apple</li>
            <li>Respond to Gifting Opportunities</li>
            <li>Respond to Google Event Invite</li>
          </ul>
        </div>

        {/* Latest Activity */}
        <div className="widget">
          <h3>Latest Activity</h3>
          <div className="chart-placeholder">Slack + Email Mentions</div>
        </div>

        {/* Collaboration Opportunities */}
        <div className="widget">
          <h3>Collaboration Opportunities</h3>
          <ul>
            <li>Reply to Connor for Apple Event ✅</li>
            <li>Reply to Connor for Apple Event ✅</li>
            <li>Reply to Connor for Apple Event ✅</li>
          </ul>
        </div>

        {/* Key Metrics */}
        <div className="widget">
          <h3>Active Deals</h3>
          <p>$100,000.00</p>
        </div>

        <div className="widget">
          <h3>Total Income</h3>
          <p>$250,000.00</p>
        </div>

        <div className="widget">
          <h3>Deal Success Rate</h3>
          <p>36.2%</p>
        </div>

        <div className="widget">
          <h3>New Deals</h3>
          <p>36</p>
        </div>

        <div className="widget">
          <h3>Completed Projects</h3>
          <p>29</p>
        </div>

        {/* Inquiry Breakdown */}
        <div className="widget">
          <h3>Inquiry Breakdown</h3>
          <div className="chart-placeholder">Donut Chart</div>
        </div>

        {/* Inquiries Per Month */}
        <div className="widget">
          <h3>Inquiries Per Month</h3>
          <div className="chart-placeholder">Bar Chart</div>
        </div>

        {/* Inquiry Source Breakdown */}
        <div className="widget">
          <h3>Inquiry Source Breakdown</h3>
          <div className="chart-placeholder">Bar Chart</div>
        </div>

        {/* Income by Type */}
        <div className="widget">
          <h3>Income by Type</h3>
          <div className="chart-placeholder">Pie Chart</div>
        </div>

        {/* Agent Commission per Month */}
        <div className="widget">
          <h3>Agent Commission per Month</h3>
          <div className="chart-placeholder">Bar Chart</div>
        </div>

        {/* Total Income per Month */}
        <div className="widget">
          <h3>Total Income per Month</h3>
          <div className="chart-placeholder">Stacked Bar Chart</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;