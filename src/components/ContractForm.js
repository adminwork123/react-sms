import React from "react";

const ContractForm = () => {
  return (
    <div className="contract-page-container">
      <div className="div-four-row">
        <div className="div-column">
          <label>Vendor *</label>
          <input type="text" />
          <label>Quantity *</label>
          <input type="text" />
        </div>

        <div className="div-column">
          <label>Contract Date *</label>
          <input type="date" />
          <label>Customer Ref</label>
          <input type="text" />
        </div>

        <div className="div-column">
          <label>Country</label>
          <select><option></option></select>
        </div>

        <div className="div-column">
          <label>Salesperson *</label>
          <input type="text" />
          <div>
            <input type="radio" name="approval" /> Signed
            <input type="radio" name="approval" /> Printed
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;
