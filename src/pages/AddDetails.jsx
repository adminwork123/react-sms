import "../assets/css/style.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AddDetails() {
  const [innerTab, setInnerTab] = useState("costs");
  const location = useLocation();
  return (
    <div>
      <div className="contract-page-container">
            <div className="div-four-row">
    
                {/* COLUMN 1 */}
                <div className="div-column">
                <div className="form-row">
                    <div className="form-group">
                    <label>Template</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>
                        Type<span className="required_field">*</span>
                    </label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>
                        Vendor<span className="required_field">*</span>
                    </label>
                    <input type="text" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Book</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Sub Book</label>
                    <input type="text" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Commodity</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>
                        Quantity<span className="required_field">*</span>
                    </label>
                    <input type="text" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Location</label>
                    <select>
                        <option value="">Walter Matter</option>
                    </select>
                    </div>
                </div>
    
                </div>
                {/* COLUMN 2 */}
                <div className="div-column">
    
                <div className="form-row">
                    <div className="form-group">
                    <label>
                        Contract Date
                        <span className="required_field">*</span>
                    </label>
                    <input type="date" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Customer Ref</label>
                    <input type="text" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Contact</label>
                    <input type="text" />
                    </div>
                </div>
    
                </div>
    
                {/* COLUMN 3 */}
                <div className="div-column">
                <div className="form-row">
                    <div className="form-group">
                    <label>Position</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Freight Term</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Country</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>
                        Pricing type<span className="required_field">*</span>
                    </label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Terms</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Days For Finance</label>
                    <input type="text" />
                    </div>
                </div>
    
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
                    <label>
                        Salesperson <span className="required_field">*</span>
                    </label>
                    <input type="text" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Contract text</label>
                    <select>
                        <option value=""></option>
                    </select>
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
    
                {/* ✅ RADIO GROUP */}
                <div className="form-row">
                    <div className="form-group radio-group">
    
                    <div className="radio-item">
                        <input type="radio" name="approval_type" value="signed" id="signed" />
                        <label htmlFor="signed">
                        Signed <span className="required_field">*</span>
                        </label>
                    </div>
    
                    <div className="radio-item">
                        <input type="radio" name="approval_type" value="printed" id="printed" />
                        <label htmlFor="printed">
                        Printed <span className="required_field">*</span>
                        </label>
                    </div>
    
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
            <div
            style={{
                margin: "3px",
                border: "1px solid #ddd",
                borderRadius: "3px",
                overflowX: "auto",
                overflowY: "auto",
                maxHeight: "300px",
                minHeight: "250px",
                background: "#fff",
                padding: "10px"
            }}
            >
                <div className="super-heading">
                <div className="action-toolbar">
                    <Link
                    to="/AddContractDetails"
                    state={{ backgroundLocation: location }}
                    className="action-btn"
                    >
                    <i className="fas fa-file-signature"></i> Insert
                    </Link>
        
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
                <table id="contractTable">
                    
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
                        <th>UOM</th>
                        <th>Balance</th>
                        <th>Applied</th>
                        <th>Qty Scheduled</th>
                        <th>Avaiable</th>
                        <th>Pricing Type</th>
                        <th>Furture Price</th>
                        <th>Ratio</th>
                        <th>Basis</th>
                        <th>Furture Market</th>
                        <th>Fueture Month/year</th>
                        <th>Cash Price</th>
                        <th>Lots</th>
                        <th>Price UOM</th>
                        <th>Currency</th>
                        <th>Priced Qty</th>
                        <th>Unpriced Qty</th>
                        <th>Priced Lots</th>
                        <th>Unpriced Lots</th>
                        <th>Exchange Rate</th>
                        <th>Reference</th>
                        <th>Market Zone</th>
                        <th>Discount</th>
                        <th>Schedule</th>
                        <th>Option</th>
                        <th>Planned Availability Date</th>
                        <th>Event Start Date</th>
                        <th>Updated Availability Date</th>
                        <th>Container</th>
                        <th>Sample Type</th>
                        <th>Sample Status</th>
                        <th>Approved Qty</th>
                        <th>Tested On</th>
                        <th>ERP PO Number</th>
                        <th>EUDR Approved Status</th>
                        <th>Loading Point</th>
                        <th>Destination Point</th>
                        <th>Storage Unit</th>
                        <th>Vendor Lot ID</th>
                    </tr>
                    </thead>
        
                    <tbody>
                    <tr>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
        
                    </tbody>
        
                </table>
                </div>
            </div>
            <div
            style={{
                margin: "3px",
                border: "1px solid #ddd",
                borderRadius: "3px",
                overflowX: "auto",
                overflowY: "auto",
                maxHeight: "300px",
                minHeight: "250px",
                background: "#fff",
                padding: "10px"
            }}
            >
            
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
                        className={`tab-item ${innerTab === tab.id ? "active" : ""}`}
                        onClick={() => setInnerTab(tab.id)}
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
                    {innerTab  === "costs" && (
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
                                <th>Accrual Date</th>
                                <th>Accrual</th>
                                <th>Charge Entity</th>
                                <th>Basis</th>
                                <th>Print</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan="18"></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    )}
            
                    {/* OTHER TABS */}
                    {innerTab  === "rail" && (
                    <div className="tab-content active">Rail content...</div>
                    )}
            
                    {innerTab  === "vessel" && (
                    <div className="tab-content active">Vessel content...</div>
                    )}
            
                    {innerTab  === "options" && (
                    <div className="tab-content active">Options content...</div>
                    )}
            
                    {innerTab  === "futures" && (
                    <div className="tab-content active">Futures content...</div>
                    )}
            
                    {innerTab  === "print" && (
                    <div className="tab-content active">Print Remarks content...</div>
                    )}
            
                </div> 
    </div>
  );
}
