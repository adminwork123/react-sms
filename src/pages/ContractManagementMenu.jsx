import React from "react";
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css"; // adjust if needed
import { Link } from "react-router-dom";

export default function ContractManagementPage() {
  return (
    <div>
      {/* MENU (instead of PHP include) */}
      <MainMenu />

      <div className="page-container">
        <div className="page-title">
          <i className="fas fa-file-signature"></i> Contract Management
        </div>

        <div className="top-menu-row">

          {/* Activities */}
          <div className="menu-column">
            <h3>Activities</h3>
            <div className="submenu">
              
               <Link to="/AddContract"><i className="fas fa-file-signature"></i> Contracts</Link>
              <a href="#"><i className="fas fa-tags"></i> Price Contracts</a>
              <a href="#"><i className="fas fa-sync"></i> Roll Contracts</a>
              <a href="#"><i className="fas fa-balance-scale"></i> Clean Costs & Weights</a>
              <a href="#"><i className="fas fa-search"></i> Contract Inquiry</a>
              <a href="#"><i className="fas fa-info-circle"></i> Contract Status</a>
              <a href="#"><i className="fas fa-edit"></i> Amendments</a>
              <a href="#"><i className="fas fa-percentage"></i> Broker Commission Processing</a>
              <a href="#"><i className="fas fa-random"></i> Reassign</a>
              <a href="#"><i className="fas fa-sync-alt"></i> Update Balance Quantity</a>
            </div>
          </div>

          {/* Maintenance */}
          <div className="menu-column">
            <h3>Maintenance</h3>
            <div className="submenu">
              <a href="#"><i className="fas fa-check-circle"></i> Amendment and Approvals</a>
              <a href="#"><i className="fas fa-link"></i> Associations</a>
              <a href="#"><i className="fas fa-calculator"></i> Basis Cost</a>
              <a href="#"><i className="fas fa-project-diagram"></i> Book Vs Entities</a>
              <a href="#"><i className="fas fa-book-open"></i> Books</a>
              <a href="#"><i className="fas fa-certificate"></i> Certification Programs</a>
              <a href="#"><i className="fas fa-gavel"></i> Condition</a>
              <a href="#"><i className="fas fa-map-marker-alt"></i> Contract Positions</a>
              <a href="#"><i className="fas fa-file-alt"></i> Contract Templates</a>
              <a href="#"><i className="fas fa-file-signature"></i> Contract Texts</a>
              <a href="#"><i className="fas fa-seedling"></i> Crop Year</a>
              <a href="#"><i className="fas fa-hand-holding-usd"></i> Default Trade Finance</a>
              <a href="#"><i className="fas fa-folder-open"></i> Documents</a>
              <a href="#"><i className="fas fa-project-diagram"></i> Entity Producer Map</a>
              <a href="#"><i className="fas fa-file-invoice-dollar"></i> INCO Term and Cost</a>
              <a href="#"><i className="fas fa-list-ol"></i> Indexes</a>
              <a href="#"><i className="fas fa-chart-line"></i> MTM Point</a>
              <a href="#"><i className="fas fa-users-cog"></i> Valuation Group</a>
              <a href="#"><i className="fas fa-award"></i> Vendor Certification Program</a>
              <a href="#"><i className="fas fa-weight-hanging"></i> Weight/Grades</a>
            </div>
          </div>

          {/* Planning */}
          <div className="menu-column">
            <h3>Planning</h3>
            <div className="submenu">
              <a href="#"><i className="fas fa-calendar-alt"></i> Annual Operation Planning</a>
              <a href="#"><i className="fas fa-cogs"></i> Event Configuration</a>
              <a href="#"><i className="fas fa-filter"></i> Event Filter</a>
              <a href="#"><i className="fas fa-th"></i> Event Matrix</a>
              <a href="#"><i className="fas fa-project-diagram"></i> Need Plan</a>
            </div>
          </div>

          {/* Reports */}
          <div className="menu-column">
            <h3>Reports</h3>
            <div className="submenu">
              <a href="#"><i className="fas fa-chart-line"></i> AOP Vs Actual</a>
              <a href="#"><i className="fas fa-chart-bar"></i> Basis Component</a>
              <a href="#"><i className="fas fa-check-circle"></i> Closed Contracts</a>
              <a href="#"><i className="fas fa-balance-scale"></i> Contract Balance</a>
              <a href="#"><i className="fas fa-list"></i> Offer Lists</a>
              <a href="#"><i className="fas fa-eye"></i> Overview</a>
            </div>
          </div>

          {/* Create */}
          <div className="menu-column">
            <h3>Create</h3>
            <div className="submenu">
              <a href="#"><i className="fas fa-plus-circle"></i> New Contract</a>
              <a href="#"><i className="fas fa-bolt"></i> Rapid Contract Entry</a>
            </div>

            <h3 style={{ paddingTop: "10px" }}>Entity</h3>
            <div className="submenu">
              <a href="#"><i className="fas fa-user-tie"></i> Brokers</a>
              <a href="#"><i className="fas fa-tractor"></i> Producers</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}