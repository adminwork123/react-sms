import React from 'react';
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function AddContractFxDetails() {
  return (
    <div>
          <MainMenu />
             <div className="top-menu-container">
                <Link to="/AddContractDetails">Details</Link>
                <Link to="/AddContractFxDetails"    className="active">FX</Link>
                <Link to="/AddContractTradeDetails">Trade Finance</Link>
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
                        <label>
                            Counter Currency<span className="required_field">*</span>
                        </label>
                        <select>
                            <option value="">USD</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>FX Valid From</label>
                        <input type="date" />
                        </div>
                        <div className="form-group">
                        <label>To</label>
                        <input type="date" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Currency Pair</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Forex Rate</label>
                        <input type="text" />
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Price</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>FX Price</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Rate Type</label>
                        <input type="text" defaultValue="Month End" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>FX Price UOM</label>
                        <select>
                            <option value="">Metric Ton</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>FX Remarks</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Historic Date</label>
                        <input type="date" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Revaluation Currency Pair</label>
                        <select>
                            <option value="">From USD To CHF</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Historic Rate</label>
                        <input type="text" defaultValue="0.847" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Historic Type</label>
                        <select>
                            <option value=""></option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Futures Market</label>
                        <select>
                            <option value=""></option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label>Mn/Yr</label>
                        <select>
                            <option value=""></option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Futures</label>
                        <select>
                            <option value=""></option>
                        </select>
                        </div>
                        <div className="form-group">
                        <label><br /></label>
                        <input type="text" />
                        </div>
                        <div className="form-group">
                        <label><br /></label>
                        <select>
                            <option value=""></option>
                        </select>
                        </div>
                    </div>
                    

                    </div>
                    <div className="div-column">
                        <div className="form-row">
                            <div className="form-group">
                            <label>Sell Currency</label>
                            <select>
                                <option value="">USD</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Amount</label>
                            <input type="text" placeholder="0.00" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Buy Currency</label>
                            <select>
                                <option value="">USD</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Amount</label>
                            <input type="text" placeholder="0.00" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Order Type</label>
                            <select>
                                <option></option>
                            </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Limit Rate</label>
                            <input type="text" placeholder="0.00000" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Select Date</label>
                            <input type="date" />
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                            <label style={{ fontSize: "13px", color: "#555" }}>GTC</label>
                            <input type="checkbox" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Maturity Date Of Forward</label>
                            <input type="date" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Trade Date Requested</label>
                            <input type="date" />
                            </div>
                        </div>

                        </div>
                        

                </div>
                
            </div>
            <div className="scroll-container">

                <h4 style={{ margin: "10px 0" }}>Forward Derivatives</h4>

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
                        <th>Sell Currency</th>
                        <th>Buy Currency</th>
                        <th>Requested Buy Amount</th>
                        <th>Requested Sell Amount</th>
                        <th>Maturity Date Of Forward</th>
                        <th>Forward Date</th>
                        <th>Order Date</th>
                        <th>Limit Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ height: "100%" }}>
                        <td colSpan="8"></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

                </div>
    </div>
  );
}
