import React from "react";

const ContractTable = () => {
  return (
    <div className="scroll-container">
      <div className="action-toolbar">
        <button>Insert</button>
        <button>Remove</button>
        <button>View</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Sequence</th>
            <th>Status</th>
            <th>Location</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Open</td>
            <td>Vietnam</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContractTable;
