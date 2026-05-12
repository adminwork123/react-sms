import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Eye,
  Pencil,
  Download,
  X,
  Grid,
  ChevronDown,
  Save,
  Star,
  Upload,
  Settings,
} from "lucide-react";

export default function AddDocument() {
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
        {/* ================= ATTACHMENTS ================= */}
        <SectionHeader title="Attachments" />

        <ToolbarContainer>
          <ToolbarItem icon={<Plus size={14} />} text="Add Files" />
          <ToolbarItem icon={<Eye size={14} />} text="Preview" />
          <ToolbarItem icon={<Pencil size={14} />} text="Edit" />
          <ToolbarItem icon={<Download size={14} />} text="Download" />
          <ToolbarItem icon={<X size={14} />} text="Delete" />

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
            "",
            "Name",
            "Type",
            "Size",
            "Date Added",
            "Comment",
            "User",
          ]}
        />

        {/* ================= REQUIRED DOCUMENTS ================= */}
        <SectionHeader title="Required Documents" />

        <ToolbarContainer>
          <ToolbarItem icon={<Plus size={14} />} text="Add Multiple" />
          <ToolbarItem icon={<X size={14} />} text="Remove" />

          <DropdownToolbar
            id="requiredExport"
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

          <DropdownToolbar
            id="requiredView"
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

        <TableSection headers={["", "Document Name *"]} />
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SectionHeader({ title }) {
  return (
    <div
      style={{
        padding: "6px 10px",
        fontSize: "14px",
        fontWeight: "600",
        borderTop: "1px solid #dcdcdc",
        borderBottom: "1px solid #dcdcdc",
        background: "rgb(44 62 80)",
        color: "#fff",
        float: "left",
      }}
    >
      {title}
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
        color: "#333",
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
      }}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

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

  /* CLOSE DROPDOWN WHEN CLICK OUTSIDE */
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

  /* OPEN / CLOSE SAME DROPDOWN */
  const handleToggle = () => {
    if (isOpen) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
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
        }}
      >
        {icon}
        <span>{text}</span>
      </div>

      {/* DROPDOWN MENU */}
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
              <TableHeader
                key={index}
                text={header}
                width={index === 0 ? "30px" : "auto"}
              />
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
                  textAlign: index === 0 ? "center" : "left",
                }}
              >
                {index === 0 && <input type="checkbox" />}
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