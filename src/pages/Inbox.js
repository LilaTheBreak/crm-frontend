// src/pages/Inbox.js
import React from "react";
import "../styles/Inbox.css";

const Inbox = () => {
  return (
    <div className="inbox-container">
      <div className="inbox-sidebar">
        <div className="talent-profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lewis_Hamilton_2016_Malaysia_2.jpg/440px-Lewis_Hamilton_2016_Malaysia_2.jpg"
            alt="Lewis Hamilton"
          />
          <h2>Lewis Hamilton</h2>
        </div>

        <div className="deal-status">
          <h4>Awaiting Reply</h4>
          <ul>
            <li>🟢 Sony Activation Deal</li>
            <li>🟢 Apple Social Media Deal</li>
            <li>🔴 Snapchat Speaking Event</li>
          </ul>
        </div>

        <div className="email-notifications">
          <h4>Email Notifications</h4>
          <ul>
            <li>📬 Laura Opened "Re Booking 8th"</li>
            <li>👆 Laura Clicked thebreak.co</li>
            <li>📬 Laura Opened "Re Booking 8th"</li>
            <li>📬 Laura Opened "Re Booking 8th"</li>
          </ul>
        </div>
      </div>

      <div className="inbox-main">
        <div className="inbox-tabs">
          <h3>ALL INBOUND</h3>
          <h3>UNREAD</h3>
        </div>

        <div className="whatsapp-thread">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i} className="message">
                <p>
                  <strong>Lewis Whatsapp:</strong> Can you send me the details in the...
                  <span className="timestamp">2h Ago</span>
                </p>
              </div>
            ))}
        </div>

        <div className="platform-section">
          <h4>Platform Specific Inbox</h4>
          <p>Instagram</p>
        </div>
      </div>

      <div className="inbox-priority">
        <h3>PRIORITY</h3>
        {Array(4)
          .fill()
          .map((_, i) => (
            <div key={i} className="priority-message">
              <p>
                <strong>Lewis Whatsapp:</strong> Can you send me the details in the...
                <span className="timestamp">2h Ago</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Inbox;