import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  Grid,
  ChevronDown,
  Save,
  Star,
  Upload,
  Settings,
} from "lucide-react";

export default function AddScheduled() {
 const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f4f4f4",
        minHeight: "100vh",
        padding: "10px",
      }}
    >
      {/* MAIN CONTAINER */}
      <div
        style={{
          border: "1px solid #cfcfcf",
          background: "#fff",
        }}
      >
        {/* HEADER */}
       

        {/* TOOLBAR */}
        <ToolbarContainer>
          {/* EXPORT */}
          <DropdownToolbar
            id="export"
            icon={<ChevronDown size={14} />}
            text="Export"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            items={[
              {
                label: "CSV (Comma Delimited)",
                path: "/csv",
                icon: <Download size={14} />,
              },
              {
                label: "Text (Tab Delimited)",
                path: "/text",
                icon: <Download size={14} />,
              },
              {
                label: "PDF",
                path: "/pdf",
                icon: <Download size={14} />,
              },
              {
                label: "Excel",
                path: "/excel",
                icon: <Download size={14} />,
              },
              {
                label: "Schema Only",
                path: "/schema",
                icon: <Download size={14} />,
              },
            ]}
          />

          {/* VIEW */}
          <DropdownToolbar
            id="view"
            icon={<Grid size={14} />}
            text="View"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            items={[
              {
                label: "Save As",
                path: "/save",
                icon: <Save size={14} />,
              },
              {
                label: "Save As Default",
                path: "/default-save",
                icon: <Star size={14} />,
              },
              {
                label: "Import",
                path: "/import",
                icon: <Upload size={14} />,
              },
              {
                label: "Default",
                path: "/default",
                icon: <Settings size={14} />,
              },
            ]}
          />

          {/* FILTER */}
          <input
            type="text"
            placeholder="Filter (F3)"
            style={{
              height: "24px",
              border: "1px solid #c8c8c8",
              padding: "0 8px",
              fontSize: "12px",
              outline: "none",
            }}
          />
        </ToolbarContainer>

        {/* TABLE */}
        <TableSection
          headers={[
            "sequence",
            "Schedule Type",
            "Transaction Number",
            "Schedule Quantity",
          ]}
        />
      </div>
    </div>
  );
}


function ToolbarContainer({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "6px 10px",
        borderBottom: "1px solid #dcdcdc",
        fontSize: "13px",
        flexWrap: "wrap",
      }}
    >
      {children}
    </div>
  );
}

function ToolbarItem({ icon, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
        color: "#333",
      }}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

/* ================= DROPDOWN ================= */

function DropdownToolbar({
  id,
  icon,
  text,
  items,
  openDropdown,
  setOpenDropdown,
}) {
  const isOpen = openDropdown === id;
  const dropdownRef = useRef(null);

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [setOpenDropdown]);

  /* TOGGLE DROPDOWN */
  const handleToggle = () => {
    setOpenDropdown(isOpen ? null : id);
  };

  /* NAVIGATION */
  const handleNavigate = (path) => {
    setOpenDropdown(null);
    window.location.href = path;
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
      }}
    >
      {/* BUTTON */}
      <div
        onClick={handleToggle}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          cursor: "pointer",
          userSelect: "none",
          color: "#333",
        }}
      >
        {icon}
        <span>{text}</span>
      </div>

      {/* MENU */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "28px",
            left: 0,
            minWidth: "220px",
            background: "#fff",
            border: "1px solid #dcdcdc",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 999,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigate(item.path)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 12px",
                fontSize: "12px",
                cursor: "pointer",
                borderBottom:
                  index !== items.length - 1
                    ? "1px solid #efefef"
                    : "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f5f5f5")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#fff")
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= TABLE ================= */

function TableSection({ headers }) {
  return (
    <div style={{ minHeight: "180px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "12px",
        }}
      >
       <thead>
  <tr style={{ background: "#f5f5f5" }}>
    {headers.map((header, index) => (
      <th
        key={index}
        style={{
          border: "1px solid #dcdcdc",
          padding: "6px",
          textAlign: "left",
          fontWeight: "500",
        }}
      >
        {header}
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
          padding: "6px",
        }}
      >
        {/* optional placeholder content */}
      </td>
    ))}
  </tr>
</tbody>
      </table>
    </div>
  );
}

function TableHeader({ text, width }) {
  return (
    <th
      style={{
        border: "1px solid #dcdcdc",
        padding: "6px",
        textAlign: "left",
        fontWeight: "500",
        width,
      }}
    >
      {text}
    </th>
  );
}
