import React from "react";
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function AddContractTradeDetails() {
  return (
    <div>
      <MainMenu />

      <div className="top-menu-container">
          <Link to="/AddContractDetails">Details</Link>
          <Link to="/AddContractFxDetails">FX</Link>
          <Link to="/AddContractTradeDetails"    className="active">Trade Finance</Link>
          <Link to="/AddContractMiscellaneousDetails" >Miscellaneous</Link>
          <Link to="/AddContractActivityDetail" >Activities</Link>
          <Link to="/AddContractHistoryDetails">History</Link>
          <Link to="/AddContractCrmDetails">CRM</Link>
          <Link to="/AddContractEventDetails">Events</Link>
          <Link to="/AddContractQualityDetails" >Quality</Link>
          <Link to="/AddContractOptionalityDetails">Optionality</Link>
      </div>
      <div className="contract-page-container">
        <div className="div-two-row">
          <div className="div-column">

            <div className="form-row">
              <div className="form-group">
                <label>Transaction Number</label>
                <input type="text" placeholder="Created On Save" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bank Name</label>
                <select>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bank Account Number</label>
                <select>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Facility</label>
                <select>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Bank Reference No</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Limit</label>
                <select></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Sublimit</label>
                <select></select>
              </div>
            </div>

            <div className="form-row">
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                <label style={{ fontSize: "13px", color: "#555" }}>Submitted To Bank</label>
                <input type="checkbox" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date Submitted</label>
                <input type="date" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Approval Status</label>
                <select></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Status Date</label>
                <input type="date" />
              </div>
            </div>

          </div>
          <div className="div-column">

              <div className="form-row">
                <div className="form-group">
                  <label>Bank Trade Reference No</label>
                  <input type="text" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Override Facility Valuation</label>
                  <select>
                    <option value=""></option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Comments</label>
                  <textarea rows="5"></textarea>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Interest Rate</label>
                  <input type="text" />
                </div>
              </div>

            </div>
        </div>
        
      </div>
      <div className="scroll-container">
        <h4 style={{ margin: "10px 0" }}>History</h4>

        {/* Super Heading Row with Buttons */}
        <div className="super-heading">
          <div className="action-toolbar">
            <a href="#" className="action-btn">
              <i className="fa fa-file-export"></i> Export
            </a>
            <a href="#" className="action-btn">
              <i className="fa fa-eye"></i> View
            </a>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ minHeight: "200px" }}>
            <thead>
              <tr>
                <th>Transaction Number</th>
                <th>Bank Name</th>
                <th>Bank Account No</th>
                <th>Facility</th>
                <th>Bank Reference No</th>
                <th>Limit</th>
                <th>Sublimit</th>
                <th>Submitted To Bank</th>
                <th>Date Submitted</th>
                <th>Approved</th>
              </tr>
            </thead>

            <tbody>
              <tr style={{ height: "100%" }}>
                <td colSpan="10"></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}