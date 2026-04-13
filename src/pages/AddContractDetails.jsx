import React from 'react';
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function AddContractDetails() {
  return (
    <div>
         <MainMenu />
         <div className="top-menu-container">
                <Link to="/AddContractDetails">Details</Link>
                <Link to="/AddContractFxDetails">FX</Link>
                <Link to="/AddContractTradeDetails" >Trade Finance</Link>
                <Link to="/AddContractMiscellaneousDetails" >Miscellaneous</Link>
                <Link to="/AddContractActivityDetail" >Activities</Link>
                <Link to="/AddContractHistoryDetails">History</Link>
                <Link to="/AddContractCrmDetails">CRM</Link>
                <Link to="/AddContractEventDetails">Events</Link>
                <Link to="/AddContractQualityDetails" >Quality</Link>
                <Link to="/AddContractOptionalityDetails">Optionality</Link>
            </div>
        <div className="contract-page-container">
            <div className="div-three-row">
                <div className="div-column">

                <div className="form-row">
                    <div className="form-group">
                    <label>Sequence<span className="required_field">*</span></label>
                    <input type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Contract Status<span className="required_field">*</span></label>
                    <select>
                        <option>Open</option>
                    </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Shipment Status</label>
                    <select>
                        <option>Open</option>
                    </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Financial Status</label>
                    <input type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Prepayment Date</label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Prepayment Amount</label>
                    <input type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Start Date<span className="required_field">*</span></label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>End Date<span className="required_field">*</span></label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                    <label style={{ fontSize: "13px", color: "#555" }}>Cash Flow Override</label>
                    <input type="checkbox" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Cash Flow Date</label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>M2M Date<span className="required_field">*</span></label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Planned Availability</label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Event Start Date</label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Updated Availability</label>
                    <input type="date" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>M2M Point</label>
                    <select>
                        <option>FOB Origin</option>
                    </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Location<span className="required_field">*</span></label>
                    <input defaultValue="Walter Matter" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Freight Term</label>
                    <select>
                        <option>FOB</option>
                    </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Ship To</label>
                    <select></select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Book</label>
                    <select>
                        <option>Vietnam</option>
                    </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Sub Book</label>
                    <select></select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Contract Item</label>
                    <select></select>
                    </div>
                </div>

                </div>
                <div className="div-column">
                    <div className="form-row">
                        <div className="form-group">
                        <label>Quantity</label>
                        <input type="text" />
                        </div>
                        <div className="form-group">
                        <label>UOM</label>
                        <select></select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Net Weight</label>
                        <input type="text" />
                        </div>
                        <div className="form-group">
                        <label>UOM</label>
                        <select>
                            <option>KG</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Average Weight</label>
                        <input type="text" />
                        </div>
                        <div className="form-group">
                        <label>UOM</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Packing Description</label>
                        <select>
                            <option>Bulk</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Estimate Yield %</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Original Quantity</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Unit/Layer</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Layers/Pallet</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>No. Of Lots</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>No. Of Sequences</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Container Type</label>
                        <select>
                            <option>Container 20</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>No. Of Containers</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Market Zone</label>
                        <select>
                            <option>Worldwide</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Discount</label>
                        <select></select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Discount Table</label>
                        <select></select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Schedule Code</label>
                        <input type="text" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Option</label>
                        <select></select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Split</label>
                        <select></select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                        <label style={{ fontSize: "13px", color: "#555" }}>Tax Override</label>
                        <input type="checkbox" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Tax Point</label>
                        <select></select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                        <label>Tax Location</label>
                        <select></select>
                        </div>
                    </div>

                    </div>
                    <div className="div-column">
                        <div className="form-row">
                            <div className="form-group">
                            <label>Fixation By</label>
                            <select>
                                <option>Buyer</option>
                            </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Pricing Type<span className="required_field">*</span></label>
                            <select>
                                <option>Buyer</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Currency</label>
                            <select>
                                <option>USD</option>
                            </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Futures Market</label>
                            <select>
                                <option>Coffee ICE EU</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label>Mn/Yr</label>
                            <select>
                                <option>May(k)26</option>
                            </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Futures</label>
                            <input type="text" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Budget Price</label>
                            <select>
                                <option>USD</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label><br /><br /></label>
                            <input type="text" />
                            </div>
                            <div className="form-group">
                            <label><br /><br /></label>
                            <select>
                                <option>Metric Ton</option>
                            </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Basis</label>
                            <select>
                                <option>USD</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <label><br /></label>
                            <input type="text" />
                            </div>
                            <div className="form-group">
                            <label><br /></label>
                            <select>
                                <option>Metric Ton</option>
                            </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Cash Price</label>
                            <input type="text" />
                            </div>
                            <div className="form-group">
                            <label><br /></label>
                            <select>
                                <option>Metric Ton</option>
                            </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Total Cost</label>
                            <input type="text" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                            <label>Total Budget</label>
                            <input type="text" />
                            </div>
                        </div>

                        {/* Horizontal Scroll Table Section */}
                        <div className="scroll-container">

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
                            <table id="contractTable" style={{ minHeight: "200px" }}>
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Lots</th>
                                    <th>Qty</th>
                                    <th>Cash Price</th>
                                    <th>Futures Price</th>
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

                        </div>
            </div>
            </div>
    </div>
  );
}
