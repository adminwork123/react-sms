import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left-section">
        <div className="menu-container">
          <div className="home-icon">🏠</div>
          <div className="menu">
            <a href="#">Dashboard</a>
            <a href="#">System Manager</a>
            <a href="#">Contract Management</a>
          </div>
        </div>
      </div>

      <div className="top-menu">
        <a href="#">Recent Logs</a>
        <a href="#">Password</a>
        <a href="#">Logout</a>
      </div>
    </div>
  );
};

export default Topbar;
