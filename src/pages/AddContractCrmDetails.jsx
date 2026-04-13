import React from "react";
import MainMenu from "./cms_includes_file/MainMenu";
import "../assets/css/style.css";
import { Link } from "react-router-dom";

export default function AddContractCrmDetails() {
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
                <Link to="/AddContractCrmDetails"   className="active">CRM</Link>
                <Link to="/AddContractEventDetails">Events</Link>
                <Link to="/AddContractQualityDetails" >Quality</Link>
                <Link to="/AddContractOptionalityDetails">Optionality</Link>
            </div>
            <div className="scroll-container">
                {/* Super Heading Row with Buttons */}
                <div className="super-heading">
                    <div className="action-toolbar">
                    <a href="#" className="action-btn">
                        <i className="fa fa-folder-open"></i> Open
                    </a>
                    <a href="#" className="action-btn">
                        <i className="fa fa-calendar-plus"></i> New Event
                    </a>
                    <a href="#" className="action-btn">
                        <i className="fa fa-list-check"></i> New Task
                    </a>
                    <a href="#" className="action-btn">
                        <i className="fa fa-comment-dots"></i> New Comment
                    </a>
                    <a href="#" className="action-btn">
                        <i className="fa fa-phone"></i> Log Call
                    </a>
                    <a href="#" className="action-btn">
                        <i className="fa fa-envelope"></i> Send Email
                    </a>
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
                        <th>Date</th>
                        <th>Type</th>
                        <th>Attachment</th>
                        <th>Created</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Hours</th>
                        <th>Created By</th>
                        <th>Assigned To</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Category</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr style={{ height: "100%" }}>
                        <td colSpan="12"></td>
                        </tr>
                    </tbody>
                    </table>
                </div>

                </div>
    </div>
  );
}
