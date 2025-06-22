import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import "../styles/NotificationSection1.css";


const NotificationSection: React.FC = () => {
  return (
    <div className="notification-section">
      <div className="notification-content">
        <Bell className="notification-icon" />
        <h1 className="notification-title">
          Get notified when a highly correlated whale makes a move
        </h1>
        <p className="notification-description">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>
    </div>
  );
};

export default NotificationSection;
