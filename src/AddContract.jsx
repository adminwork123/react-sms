import React, { useState } from "react";
import "./assets/css/style.css"; // keep your existing CSS

const AddContract = () => {
  const [activeTab, setActiveTab] = useState("costs");

  return (
    <div>
      {/* Top Bar */}
      <div className="topbar">
        <div className="left-section">
          <div className="menu-container">
            <div className="home-icon">
              <i className="fas fa-home"></i>
            </div>

            <div className="menu">
              <a href="#">Dashboard</a>
              <a href="#">System Manager</a>
              <a href="#">Common Info</a>
              <a href="#">General Ledger</a>
              <a href="#">Financial Reports</a>
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

      {/* Tabs Top */}
      <div className="top-menu-container">
       
        <a href="#" class="active">Details</a>
        <a href="#">Additional Info</a>
        <a href="#">Documents</a>
        <a href="#">DMS</a>
        <a href="#">Audit Log</a>
        <a href="#">Approval</a>
        <a href="#">Activity</a>
        <a href="#">History</a>
        <a href="#">Scheduled</a>
      </div>

      {/* Form Section */}
      <div className="contract-page-container">
        <div className="div-four-row">
          {/* Column 1 */}
          <div className="div-column">
            <div className="form-group">
              <label>Template</label>
              <select />
            </div>

            <div className="form-group">
              <label>Type *</label>
              <select />
            </div>

            <div className="form-group">
              <label>Vendor *</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Quantity *</label>
              <input type="text" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="div-column">
            <div className="form-group">
              <label>Contract Date *</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Customer Ref</label>
              <input type="text" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="div-column">
            <div className="form-group">
              <label>Position</label>
              <select />
            </div>

            <div className="form-group">
              <label>Pricing Type *</label>
              <select />
            </div>
          </div>

          {/* Column 4 */}
          <div className="div-column">
            <div className="form-group">
              <label>Contract No</label>
              <input type="text" placeholder="Created On Save" />
            </div>

            <div className="form-group">
              <label>Salesperson *</label>
              <input type="text" />
            </div>

            {/* Radio */}
            <div className="form-group">
              <label>Approval Type *</label>
              <div>
                <input type="radio" name="approval" /> Signed
                <input type="radio" name="approval" /> Printed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="scroll-container">
        <table>
          <thead>
            <tr>
              <th>Sequence</th>
              <th>Status</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Open</td>
              <td>Walter Matter</td>
              <td>2026-03-30</td>
              <td>2026-03-30</td>
              <td>129600 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Tabs */}
      <div className="scroll-container">
        <div className="tab-header">
          {["costs", "rail", "vessel", "options"].map((tab) => (
            <div
              key={tab}
              className={`tab-item ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "costs" && <div>Costs Content</div>}
          {activeTab === "rail" && <div>Rail Content</div>}
          {activeTab === "vessel" && <div>Vessel Content</div>}
          {activeTab === "options" && <div>Options Content</div>}
        </div>
      </div>
    </div>
  );
};

export default AddContract;