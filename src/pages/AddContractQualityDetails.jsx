import React from "react";
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function AddContractQualityDetails() {
  return (
    <div>
         <MainMenu />
                <div className="top-menu-container">
                    <Link to="/AddContractDetails">Details</Link>
                    <Link to="/AddContractFxDetails">FX</Link>
                    <Link to="/AddContractTradeDetails" >Trade Finance</Link>
                    <Link to="/AddContractMiscellaneousDetails" >Miscellaneous</Link>
                    <Link to="/AddContractActivityDetail"  >Activities</Link>
                    <Link to="/AddContractHistoryDetails">History</Link>
                    <Link to="/AddContractCrmDetails" >CRM</Link>
                    <Link to="/AddContractEventDetails" >Events</Link>
                    <Link to="/AddContractQualityDetails" className="active">Quality</Link>
                    <Link to="/AddContractOptionalityDetails">Optionality</Link>
                </div>
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
                    <thead style={{ background: "#f5f5f5" }}>
                        <tr>
                        <th>Property</th>
                        <th>Target Value</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Escalated By</th>
                        <th>Factor Over Target</th>
                        <th>Differential Above Target</th>
                        <th>Factor Under Target</th>
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
