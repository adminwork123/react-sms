import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainMenu from "./cms_includes_file/MainMenu";
import AddDetails from "./AddDetails";
import AddAdditionalInfo from "./AddAdditionalInfo";
import AddDocument from "./AddDocument";
import AddDMS from "./AddDMS";
import AddAuditlog from "./AddAuditlog";
import AddApproval from "./AddApproval";
import AddActive from "./AddActive";
import AddScheduled from "./AddScheduled";
import "../assets/css/style.css";

export default function AddComponents() {
  const [activeTab, setActiveTab] = useState("Details");
  const location = useLocation();

  // ✅ Debug (like PHP log)
  useEffect(() => {
    console.log("Active Tab Changed:", activeTab);
  }, [activeTab]);

  const tabs = [
    "Details",
    "Additional Info",
    "Documents",
    "DMS",
    "Audit Log",
    "Approval",
    "Activity",
    "History",
    "Scheduled"
  ];

  // ✅ Styles (fixed container missing)
  const styles = {
    container: {
      padding: "0px"
    },

    tabContainer: {
      display: "flex",
      gap: "6px",
      flexWrap: "wrap",
      marginBottom: "15px",
      borderBottom: "1px solid #dcdcdc",
      paddingBottom: "8px",
      marginTop: "10px",
      marginLeft: "10px"
    },

    button: {
      padding: "7px 14px",
      border: "1px solid #cfcfcf",
      background: "#e6e6e6",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "13px",
      fontWeight: "500",
      color: "#333",
      transition: "all 0.2s ease"
    },

    activeButton: {
      background: "#2c3e50",
      color: "#fff",
      border: "1px solid #2c3e50",
      boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
    },

    content: {
      padding: "18px",
      background: "#ffffff",
      borderRadius: "6px",
      border: "1px solid #e0e0e0",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
    }
  };

  return (
    <div style={styles.container}>
      <MainMenu />

      {/* TOP MENU */}
      <div
        className="top-menu-container"
        style={{ padding: 0, background: "#bacfe0" }}
      >
        <a href="#">New</a>
        <a href="#">Save</a>
        <a href="#">Search</a>

        <div className="menu-item">
          <span>Duplicate ▾</span>
          <div className="dropdown">
            <a href="#">Duplicate</a>
          </div>
        </div>

        <div className="menu-item">
          <span>Print ▾</span>
          <div className="dropdown">
            <a href="#">Contract</a>
            <a href="#">Amendment</a>
            <a href="#">Both</a>
            <a href="#">Sample Instruction</a>
            <a href="#">Release Instruction</a>
          </div>
        </div>

        <div className="menu-item">
          <span>Email ▾</span>
          <div className="dropdown">
            <a href="#">Contract</a>
            <a href="#">Sample Instruction</a>
            <a href="#">Release Instruction</a>
          </div>
        </div>

        <div className="menu-item">
          <span>Process ▾</span>
          <div className="dropdown">
            <a href="#">Inventory Receipt</a>
            <a href="#">Inventory Shipment</a>
            <a href="#">Shipment</a>
            <a href="#">Shipment Instruction</a>
          </div>
        </div>

        <a href="#">Pricing</a>
        <a href="#">Status</a>
        <a href="#">Split</a>
        <a href="#">Close</a>
      </div>

      {/* TABS */}
      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.button,
              ...(activeTab === tab ? styles.activeButton : {})
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* CONTENT */}
      <div style={styles.content}>
        {activeTab === "Details" && <div><AddDetails/></div>}
        {activeTab === "Additional Info" && <div><AddAdditionalInfo/></div>}
        {activeTab === "Documents" && <div><AddDocument/></div>}
        {activeTab === "DMS" && <div><AddDMS/></div>}
        {activeTab === "Audit Log" && <div><AddAuditlog/></div>}
        {activeTab === "Approval" && <div><AddApproval/></div>}
        {activeTab === "Activity" && <div><AddActive/></div>}
        {activeTab === "History" && <div>📚 History Content</div>}
        {activeTab === "Scheduled" && <div><AddScheduled/></div>}
      </div>
    </div>
  );
}