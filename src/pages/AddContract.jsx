import React, { useState } from "react";
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function AddContractPage() {
   const [activeTab, setActiveTab] = useState("costs");

  return (
    <div>

      {/* MENU */}
      <MainMenu />

      {/* TOP MENU */}
      <div className="top-menu-container">
        <a href="#" className="active">Details</a>
        <a href="#">Additional Info</a>
        <a href="#">Documents</a>
        <a href="#">DMS</a>
        <a href="#">Audit Log</a>
        <a href="#">Approval</a>
        <a href="#">Activity</a>
        <a href="#">History</a>
        <a href="#">Scheduled</a>
      </div>

      {/* FORM */}
      <div className="contract-page-container">
        <div className="div-four-row">

          {/* COLUMN 1 */}
          <div className="div-column">
            {[
              "Template",
              "Type *",
              "Vendor *",
              "Book",
              "Sub Book",
              "Commodity",
              "Location"
            ].map((label, i) => (
              <div className="form-row" key={i}>
                <div className="form-group">
                  <label>{label}</label>
                  {label.includes("Book") || label.includes("Vendor") || label.includes("Sub") ? (
                    <input type="text" />
                  ) : (
                    <select><option value=""></option></select>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* COLUMN 2 */}
          <div className="div-column">
            <div className="form-row">
              <div className="form-group">
                <label>Contract Date *</label>
                <input type="date" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Customer Ref</label>
                <input type="text" />
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="div-column">
            {[
              "Position",
              "Freight Term",
              "Country",
              "Pricing Type *",
              "Terms",
              "Days For Finance"
            ].map((label, i) => (
              <div className="form-row" key={i}>
                <div className="form-group">
                  <label>{label}</label>
                  {label.includes("Days") ? (
                    <input type="text" />
                  ) : (
                    <select><option value=""></option></select>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* COLUMN 4 */}
          <div className="div-column">

            <div className="form-row">
              <div className="form-group">
                <label>Contract No</label>
                <input type="text" placeholder="Created On Save" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Salesperson *</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contract Text</label>
                <select><option></option></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Grades</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Sample Type</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Weights</label>
                <input type="text" />
              </div>
            </div>

            {/* RADIO */}
            <div className="form-row">
              <div className="form-group" style={{ display: "flex", gap: "20px" }}>
                <label>
                  <input type="radio" name="approval" /> Signed
                </label>
                <label>
                  <input type="radio" name="approval" /> Printed
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Approval Status</label>
                <input type="text" />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* TABLE + TOOLBAR */}
      <div className="scroll-container">
        <div className="super-heading">
        <div className="action-toolbar">
            <Link to="/AddContractDetails" className="action-btn"><i className="fas fa-file-signature"></i> Insert</Link>

            <a href="#" className="action-btn">
            <i className="fa fa-trash"></i> Remove
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-folder-open"></i> Open
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-copy"></i> Copy
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-cut"></i> Slice
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-upload"></i> Load
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-check-circle"></i> Quality
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-exchange-alt"></i> Transfer
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-tint"></i> Washout
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-edit"></i> Bulk Change
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-envelope"></i> Email
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-file-export"></i> Export
            </a>

            <a href="#" className="action-btn">
            <i className="fa fa-eye"></i> View
            </a>

        </div>
        </div>

        <div style={{ overflowX: "auto" }}>
        <table id="contractTable" style={{ minHeight: "200px" }}>
            
            <thead style={{ background: "#f5f5f5" }}>
            <tr>
                <th>Sequence</th>
                <th>Contract Status</th>
                <th>Shipment Status</th>
                <th>Financial Status</th>
                <th>MTM Point</th>
                <th>Location</th>
                <th>Finance Bank</th>
                <th>Contract Item</th>
                <th>Item</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Freight Terms</th>
                <th>Contracted</th>
                <th>Book</th>
                <th>Sub Book</th>
                <th>Quantity</th>
                <th>Net Weight</th>
            </tr>
            </thead>

            <tbody>
            <tr style={{ height: "25px" }}>
                <td>1</td>
                <td>Open</td>
                <td>Open</td>
                <td></td>
                <td>FOB Origin</td>
                <td>Walter Matter</td>
                <td></td>
                <td></td>
                <td>Vietnam</td>
                <td>2026-03-30</td>
                <td>2026-03-30</td>
                <td>FOB</td>
                <td></td>
                <td>Vietnam</td>
                <td>1</td>
                <td>6</td>
                <td>129600 kg</td>
            </tr>

            <tr style={{ height: "100%" }}>
                <td colSpan="17"></td>
            </tr>
            </tbody>

        </table>
        </div>
      </div>

      {/* TABS */}
       <div className="scroll-container">

      {/* Tabs Header */}
      <div className="tab-header">
        {[
          { id: "costs", label: "Costs" },
          { id: "rail", label: "Rail" },
          { id: "vessel", label: "Vessel" },
          { id: "options", label: "Options" },
          { id: "futures", label: "Futures" },
          { id: "print", label: "Print Remarks" }
        ].map((tab) => (
          <div
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="tab-toolbar">
        <a href="#" className="action-btn">
          <i className="fa fa-times"></i> Remove
        </a>
        <a href="#" className="action-btn">
          <i className="fa fa-file-export"></i> Export
        </a>
        <a href="#" className="action-btn">
          <i className="fa fa-eye"></i> View
        </a>
        <span className="filter-text">Filter (F3)</span>
      </div>

      {/* Tab Content */}

      {/* COSTS */}
      {activeTab === "costs" && (
        <div className="tab-content active">
          <div style={{ overflowX: "auto" }}>
            <table className="inner-table" style={{ minHeight: "200px" }}>
              <thead>
                <tr style={{ height: "25px" }}>
                  <th>Other Charges</th>
                  <th>Vendor</th>
                  <th>Cost Method</th>
                  <th>Currency</th>
                  <th>Rate</th>
                  <th>UOM</th>
                  <th>Forex Rate Type</th>
                  <th>Forex Rate</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Act Amount</th>
                  <th>Accrual Amount</th>
                  <th>% Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="13"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* OTHER TABS */}
      {activeTab === "rail" && (
        <div className="tab-content active">Rail content...</div>
      )}

      {activeTab === "vessel" && (
        <div className="tab-content active">Vessel content...</div>
      )}

      {activeTab === "options" && (
        <div className="tab-content active">Options content...</div>
      )}

      {activeTab === "futures" && (
        <div className="tab-content active">Futures content...</div>
      )}

      {activeTab === "print" && (
        <div className="tab-content active">Print Remarks content...</div>
      )}

    </div>

    </div>
  );
}