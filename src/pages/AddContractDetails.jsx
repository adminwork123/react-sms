import React from 'react';
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";

export default function AddContractDetails({ isModal }) {
  const navigate = useNavigate();

  const pageContent = (
    <div>
      <MainMenu />

      <div className="top-menu-container">
        <Link to="/AddContractDetails">Details</Link>
        <Link to="/AddContractFxDetails">FX</Link>
        <Link to="/AddContractTradeDetails">Trade Finance</Link>
        <Link to="/AddContractMiscellaneousDetails">Miscellaneous</Link>
        <Link to="/AddContractActivityDetail">Activities</Link>
        <Link to="/AddContractHistoryDetails">History</Link>
        <Link to="/AddContractCrmDetails">CRM</Link>
        <Link to="/AddContractEventDetails">Events</Link>
        <Link to="/AddContractQualityDetails">Quality</Link>
        <Link to="/AddContractOptionalityDetails">Optionality</Link>
      </div>

      <div className="contract-page-container">
        <div className="div-three-row">

          {/* LEFT COLUMN */}
          <div className="div-column">
            <div className="form-row">
              <div className="form-group">
                <label>Sequence<span className="required_field">*</span></label>
                <input type="text"  name="Sequence" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contract Status<span className="required_field">*</span></label>
                <select name="contract_status">
                  <option>Open</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Shipment Status</label>
                <select name="shipment_status">
                  <option>Open</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Financial Status</label>
                <input type="text"  name="financial_status"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Prepayment Date</label>
                <input type="date"  name="prepayment_date" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Prepayment Amount</label>
                <input type="text"  name="prepayment_amount"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Start Date<span className="required_field">*</span></label>
                <input type="date"  name="start_date"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>End Date<span className="required_field">*</span></label>
                <input type="date"  name="end_date"/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Cash Flow Override</label>
                <input type="checkbox" name="Cash_flow_override" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>M2M Date<span className="required_field">*</span></label>
                <input type="date" nam="m2m_date" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Location<span className="required_field">*</span></label>
                <input defaultValue="Walter Matter" name="location" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Freight Term</label>
                <select name="freight_term">
                  <option>FOB</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Ship To</label>
                <select name="ship_to"></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Book</label>
                <select name="book">
                  <option>Vietnam</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Sub Book</label>
                <select name="sub_book"></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Contract Item</label>
                <select name="contract_item"></select>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT (kept short for readability) */}
          <div className="div-column">
            <div className="form-row">
              <div className="form-group">
                <label>Quantity</label>
                <input type="text" name="quantity" />
              </div>
              <div className="form-group">
                <label>UOM</label>
                <select name="quantity_uom"></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Net Weight</label>
                <input type="text" name="net_weight" />
              </div>
              <div className="form-group">
                <label>UOM</label>
                <select name="net_weight_uom">
                  <option>KG</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Average Weight</label>
                <input type="text" name="average_weight" />
              </div>
              <div className="form-group">
                <label>UOM</label>
                <input type="text" name="average_weight_uom" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Packing Description</label>
                <select name="packing_description">
                  <option>Bulk</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Estimate Yield %</label>
                <input type="text" name="estimate_yield" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Original Quantity</label>
                <input type="text" name="original_quantity" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Unit/Layer</label>
                <input type="text" name="unit_layer" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Layers/Pallet</label>
                <input type="text" name="layers_pallet" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>No. Of Lots</label>
                <input type="text" name="no_of_lots" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>No. Of Sequences</label>
                <input type="text" name="no_of_sequences" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Container Type</label>
                <select name="container_type">
                  <option>Container 20</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>No. Of Containers</label>
                <input type="text" name="no_of_containers" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Market Zone</label>
                <select name="market_zone">
                  <option>Worldwide</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Discount</label>
                <select name="discount"></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Discount Table</label>
                <select name="discount_table"></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Schedule Code</label>
                <input type="text" name="schedule_code" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Option</label>
                <select name="option"></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Split</label>
                <select name="split"></select>
              </div>
            </div>

            <div className="form-row">
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "14px" }}>
                <label style={{ fontSize: "13px", color: "#555" }}>Tax Override</label>
                <input type="checkbox" name="tax_override" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tax Point</label>
                <select name="tax_point"></select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tax Location</label>
                <select name="tax_location"></select>
              </div>
            </div>
          </div>
        <div className="div-column">

            <div className="form-row">
              <div className="form-group">
                <label>Fixation By</label>
                <select name="fixation_by">
                  <option>Buyer</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Pricing Type<span className="required_field">*</span></label>
                <select name="pricing_type">
                  <option>Buyer</option>
                </select>
              </div>
              <div className="form-group">
                <label>Currency</label>
                <select name="currency">
                  <option>USD</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Futures Market</label>
                <select name="futures_market">
                  <option>Coffee ICE EU</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mn/Yr</label>
                <select name="mn_yr">
                  <option>May(k)26</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Futures</label>
                <input type="text" name="futures" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Budget Price</label>
                <select name="budget_currency">
                  <option>USD</option>
                </select>
              </div>
              <div className="form-group">
                <label><br /><br /></label>
                <input type="text" name="budget_value" />
              </div>
              <div className="form-group">
                <label><br /><br /></label>
                <select name="budget_uom">
                  <option>Metric Ton</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Basis</label>
                <select name="basis_currency">
                  <option>USD</option>
                </select>
              </div>
              <div className="form-group">
                <label><br /></label>
                <input type="text" name="basis_value" />
              </div>
              <div className="form-group">
                <label><br /></label>
                <select name="basis_uom">
                  <option>Metric Ton</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Cash Price</label>
                <input type="text" name="cash_price" />
              </div>
              <div className="form-group">
                <label><br /></label>
                <select name="cash_price_uom">
                  <option>Metric Ton</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Total Cost</label>
                <input type="text" name="total_cost" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Total Budget</label>
                <input type="text" name="total_budget" />
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
                      <td colSpan="17"></td>
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

  // ✅ MODAL MODE
  if (isModal) {
    return (
      <div className="modal-overlay">
        <div className="modal-box">
          <button className="close-btn" onClick={() => navigate(-1)}>
            ✖ 
          </button>
          {pageContent}
        </div>
      </div>
    );
  }

  // ✅ NORMAL PAGE MODE
  return pageContent;
}