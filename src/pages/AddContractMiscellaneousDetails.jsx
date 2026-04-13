import React from "react";
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function AddContractMiscellaneousDetails() {
  return (
    <div>
         <MainMenu />
        
              <div className="top-menu-container">
                  <Link to="/AddContractDetails">Details</Link>
                  <Link to="/AddContractFxDetails">FX</Link>
                  <Link to="/AddContractTradeDetails" >Trade Finance</Link>
                  <Link to="/AddContractMiscellaneousDetails"  className="active" >Miscellaneous</Link>
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
                        <label>Ship Via</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Farm Invoice No</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Producer</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Claims To Producer</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Fronting</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Invoice</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Provisional Invoice</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Quantity Final</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Back To Back</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Provisional P&L</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Final P&L</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    </div>
                    <div className="div-column">

  {/* Certifications */}
  <div className="scroll-container">
    <h4 style={{ margin: "10px 0" }}>Certifications</h4>

    <div className="super-heading">
      <div className="action-toolbar">
        <a href="#" target="_blank" className="action-btn">
          <i className="fa fa-plus"></i> Insert
        </a>
        <a href="#" className="action-btn">
          <i className="fa fa-trash"></i> Remove
        </a>
        <a href="#" className="action-btn">
          <i className="fa fa-file-export"></i> Export
        </a>
        <a href="#" target="_blank" className="action-btn">
          <i className="fa fa-eye"></i> View
        </a>
      </div>
    </div>

    <div style={{ overflowX: "auto" }}>
      <table style={{ minHeight: "200px" }}>
        <thead>
          <tr>
            <th>Certificates</th>
            <th>Producer</th>
            <th>Certification ID</th>
            <th>Tracking Number</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ height: "100%" }}>
            <td colSpan="5"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Marks */}
  <div className="scroll-container">
    <h4 style={{ margin: "10px 0" }}>Marks</h4>

    <div className="super-heading">
      <div className="action-toolbar">
        <a href="#" className="action-btn">
          <i className="fa fa-plus"></i> Insert
        </a>
        <a href="#" className="action-btn">
          <i className="fa fa-trash"></i> Remove
        </a>
        <a href="#" className="action-btn">
          <i className="fa fa-th-large"></i> Pattern
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
      <table style={{ minHeight: "200px" }}>
        <thead>
          <tr>
            <th>
              Bag Mark<span className="required_field">*</span>
            </th>
            <th>Default</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ height: "100%" }}>
            <td colSpan="2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
                </div>
                </div>
    </div>
  );
}
