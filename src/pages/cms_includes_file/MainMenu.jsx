import React from 'react';
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
export default function MainMenu() {
  return (
     <div className="topbar">

      {/* LEFT */}
      <div className="left-section">
        <div className="menu-container">

          {/* Home Icon */}
          <div className="home-icon">
            <i className="fas fa-home"></i>
          </div>

          {/* FULL HEIGHT MENU */}
          <div className="menu">
            <a href="#"><i className="fas fa-chart-line"></i> Dashboard</a>
            <a href="#"><i className="fas fa-cogs"></i> System Manager</a>
            <a href="#"><i className="fas fa-info-circle"></i> Common Info</a>
            <a href="#"><i className="fas fa-book"></i> General Ledger</a>
            <a href="#"><i className="fas fa-file-invoice-dollar"></i> Financial Reports</a>
            <a href="#"><i className="fas fa-wallet"></i> Cash Management</a>
            <a href="#"><i className="fas fa-boxes"></i> Inventory</a>
            <a href="#"><i className="fas fa-shopping-cart"></i> Purchasing (A/P)</a>
            <a href="#"><i className="fas fa-receipt"></i> Sales (A/R)</a>
           <Link to="/ContractManagementMenu"><i className="fas fa-file-signature"></i> Contract Management</Link>
            <a href="#"><i className="fas fa-shield-alt"></i> Risk Management</a>
            <a href="#"><i className="fas fa-truck"></i> Logistics</a>
            <a href="#"><i className="fas fa-industry"></i> Manufacturing</a>
            <a href="#"><i className="fas fa-users"></i> CRM</a>
            <a href="#"><i className="fas fa-headset"></i> Help Desk</a>
            <a href="#"><i className="fas fa-project-diagram"></i> Integrated Document Process</a>
            <a href="#"><i className="fas fa-folder-open"></i> Document Management</a>
            <a href="#"><i className="fas fa-globe"></i> Trade Finance</a>
            <a href="#"><i className="fas fa-shipping-fast"></i> Transports</a>
            <a href="#"><i className="fas fa-check-circle"></i> Quality</a>
            <a href="#"><i className="fas fa-warehouse"></i> Warehouse</a>
            <a href="#"><i className="fas fa-plug"></i> Integration</a>
            <a href="#"><i className="fas fa-building"></i> Fixed Assets</a>
            <a href="#"><i className="fas fa-sync-alt"></i> Reload Menus</a>
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="top-menu">
        <a href="#"><i className="fas fa-clock-rotate-left"></i> Recent Logs</a>
        <a href="#"><i className="fas fa-key"></i> Password</a>
        <a href="#"><i className="fas fa-right-from-bracket"></i> Logout</a>
      </div>

    </div>
  );
}
