import React, { useState } from "react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("costs");

  return (
    <div className="scroll-container">
      <div className="tab-header">
        {["costs", "rail", "vessel"].map((tab) => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === "costs" && <div>Costs Content</div>}
        {activeTab === "rail" && <div>Rail Content</div>}
        {activeTab === "vessel" && <div>Vessel Content</div>}
      </div>
    </div>
  );
};

export default TabsSection;
