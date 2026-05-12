import React from "react";
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AddSearchContract() {
  return (
    <div>
      <MainMenu />

      {/* Top Tabs */}
      <div className="top-menu-container">
        <Link to="/AddContractDetails">Details</Link>
        <Link to="#">Cost</Link>
        <Link to="#">Contract</Link>
        <Link to="#">Options</Link>
        <Link to="#">Basic Cost</Link>
        <Link to="#">Visualization</Link>
        <Link to="#">Tess</Link>
      </div>

      {/* Actions */}
      <div className="top-menu-container no-padding">
        <Link to="#" className="menu-link">
            <i className="fa fa-folder-open" style={{ marginRight: "5px" }}></i>
            Open Selected
        </Link>

        <Link to="/AddComponents" className="menu-link">
            <i className="fa fa-plus" style={{ marginRight: "5px" }}></i>
            New
        </Link>

        <Link to="#" className="menu-link">
            <i className="fa fa-file-export" style={{ marginRight: "5px" }}></i>
            Export
        </Link>

        <Link to="#" className="menu-link">
            <i className="fa fa-columns" style={{ marginRight: "5px" }}></i>
            Columns
        </Link>

        <Link to="#" className="menu-link">
            <i className="fa fa-eye" style={{ marginRight: "5px" }}></i>
            View
        </Link>

        <Link to="#" className="menu-link">
            <i className="fa fa-cubes" style={{ marginRight: "5px" }}></i>
            Basic Components
        </Link>

        <Link to="#" className="menu-link">
            <i className="fa fa-times-circle" style={{ marginRight: "5px" }}></i>
            Cancel
        </Link>

        </div>

      {/* Filters */}
      <div className="contract-page-container">

        <div className="filter-row">
          <select>
            <option>Contract Number</option>
          </select>
          <select>
            <option>Contains</option>
          </select>
          <input type="text" />
          <input type="text" style={{ marginLeft: "10px", width: "171%" }} value="+ Add Filter"/>
          <input type="text" style={{ marginLeft: "60px", width: "20%" }} value="- clear Filter"/>
           
        </div>

        <div className="filter-row">
          <select>
            <option>Quantity</option>
          </select>
          <select>
            <option>Not Equal To</option>
          </select>
          <input type="number" />
        </div>

        <div className="filter-row">
          <select>
            <option>Start Date</option>
          </select>
          <select>
            <option>Between</option>
          </select>
          <input type="date" />
          <span className="and-text">and</span>
          <input type="date" />
        </div>

        <div className="filter-row">
          <select>
            <option>Quantity</option>
          </select>
          <select>
            <option>Between</option>
          </select>
          <input type="number" />
          <span className="and-text">and</span>
          <input type="number" />
          
        </div>

      </div>
        {/* TABLE + TOOLBAR */}
             <div className="scroll-container" style={{ margin: 0 }}>
               <div style={{ overflowX: "auto" }}>
               <table id="contractTable">
                   
                   <thead style={{ background: "#f5f5f5" }}>
                   <tr>
                       <th>Contract Number</th>
                       <th>Contract Seq</th>
                       <th>Start Date</th>
                       <th>End Date</th>
                       <th>Quantity</th>
                       <th>Applied</th>
                       <th>Available Qty</th>
                       <th>Unallocated Qty</th>
                       <th>Unallocated Weight MT</th>
                       <th>Printable Remark</th>
                       <th>Internal  Comment</th>
                       <th>Certificate Name</th>
                       <th>Future</th>
                       <th>Strategic</th>
                       <th>Basis</th>
                       <th>Ratio</th>
                       <th>Cash price</th>
                       <th>Balance</th>
                       <th>Event Start Date</th>
                       <th>Planned Availability</th>
                       <th>Update Availability</th>
                       <th>Item No</th>
                       <th>Bundle Item</th>
                       <th>Ship Via</th>
                       <th>Pricing Type</th>
                       <th>Qty UOM</th>
                       <th>Future Market Name</th>
                       <th>Future Month</th>
                       <th>Price UOM</th>
                       <th>Option</th>
                       <th>Currency</th>
                       <th>Contract Status</th>
                       <th>Shipment Status</th>
                       <th>Financial Status</th>
                       <th>Priced Qty</th>
                       <th>Unpriced Qty</th>
                       <th>Origin</th>
                       <th>Product TYpe</th>
                       <th>Commodity Grade</th>
                       <th>Region</th>
                       <th>Screen</th>
                       <th>Class</th>
                       <th>Product line</th>
                       <th>Allocated Qty</th>
                       <th>Logistics Lead</th>
                       <th>Allocated Weight</th>
                       <th>Prepaid</th>
                       <th>Vendor</th>

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
                   </tr>
                   </tbody>
       
               </table>
               </div>
             </div>

    </div>
  );
}