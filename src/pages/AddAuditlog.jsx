import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowUpAZ,
  ArrowDownAZ,
  Columns3,
  MoreVertical,
  Download,
} from "lucide-react";

export default function AddAuditlog() {
  const [activeColumn, setActiveColumn] = useState(null);
  const [openMenuColumn, setOpenMenuColumn] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const menuRef = useRef(null);

  const headers = [
    "Change Type",
    "Original Value",
    "New Value",
    "Changed By",
  ];

  const toggleMenu = (index) => {
    setOpenMenuColumn(openMenuColumn === index ? null : index);
    setOpenSubMenu(false); // reset submenu
  };

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuColumn(null);
        setOpenSubMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        border: "1px solid #cfcfcf",
        background: "#fff",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "6px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            padding: "4px 8px",
            cursor: "pointer",
          }}
        >
          <Download size={14} />
          Export
        </button>
      </div>

      {/* TABLE */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "12px",
        }}
      >
        <thead>
          <tr style={{ background: "#f3f3f3" }}>
            {headers.map((header, index) => (
              <th
                key={index}
                onClick={() => setActiveColumn(index)}
                style={{
                  border: "1px solid #d0d0d0",
                  padding: "6px 8px",
                  textAlign: "left",
                  fontWeight: "500",
                  position: "relative",
                  background:
                    activeColumn === index ? "#eaeaea" : "#f3f3f3",
                }}
              >
                {/* dotted selection */}
                {activeColumn === index && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "2px",
                      border: "1px dotted #000",
                      pointerEvents: "none",
                    }}
                  />
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{header}</span>

                  <MoreVertical
                    size={14}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu(index);
                    }}
                  />
                </div>

                {/* DROPDOWN MENU */}
                {openMenuColumn === index && (
                  <div
                    ref={menuRef}
                    onMouseLeave={() => {
                      setOpenMenuColumn(null);
                      setOpenSubMenu(false);
                    }}
                    style={{
                      position: "absolute",
                      top: "28px",
                      right: "0",
                      width: "170px",
                      background: "#fff",
                      border: "1px solid #cfcfcf",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      zIndex: 999,
                    }}
                  >
                    {/* Columns with submenu */}
                    <div style={{ position: "relative" }}>
                      <MenuItem
                        icon={<Columns3 size={14} />}
                        text="Columns"
                        rightIcon={<ChevronRight size={14} />}
                        onClick={() => setOpenSubMenu(!openSubMenu)}
                      />

                      {openSubMenu && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: "170px",
                            width: "160px",
                            background: "#fff",
                            border: "1px solid #ccc",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            zIndex: 1000,
                          }}
                        >
                          {headers.map((col, i) => (
                            <div
                              key={i}
                              style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                              }}
                              onClick={() =>
                                alert(`Toggle column: ${col}`)
                              }
                            >
                              {col}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <MenuItem
                      icon={<ArrowUpAZ size={14} />}
                      text="Sort Ascending"
                    />
                    <MenuItem
                      icon={<ArrowDownAZ size={14} />}
                      text="Sort Descending"
                    />
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {headers.map((_, index) => (
              <td
                key={index}
                style={{
                  border: "1px solid #e0e0e0",
                  height: "32px",
                }}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ================= MENU ITEM ================= */
function MenuItem({ icon, text, rightIcon, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "7px 10px",
        cursor: "pointer",
        fontSize: "12px",
        borderBottom: "1px solid #eee",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "#f5f5f5")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "#fff")
      }
    >
      <div style={{ display: "flex", gap: "8px" }}>
        {icon}
        {text}
      </div>
      {rightIcon}
    </div>
  );
}