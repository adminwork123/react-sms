import React from 'react';

export default function AddAdditionalInfo() {
  return (
    <div>
        <div className="contract-page-container">
            <div className="div-four-row">
    
                {/* COLUMN 1 */}
                <div className="div-column">
                <div className="form-row">
                    <div className="form-group">
                    <label>Insurance By</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Tolerance %</label>
                    <input type="text" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                    <label>Provisional Invoice %</label>
                    <input type="text" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                    <label>Weight for Invoicing</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                    <label>Crop Year </label>
                    <input type="text" />
                    </div>
                </div>
                
                <div>
                    <div  style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <label style={{margin: 0,fontSize: "13px",marginBottom: "4px",color: "#555"}}>Print Crop Year:</label>
                        <input type="checkbox" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Association</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                    <label>Arbitration</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                    <label>Producer</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
                
                <div>
                    <div  style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <label style={{margin: 0,fontSize: "13px",marginBottom: "4px",color: "#555"}}>Claims to Producer</label>
                        <input type="checkbox" />
                    </div>
                </div>
                </div>
                {/* COLUMN 2 */}
                <div className="div-column">
    
                <div className="form-row">
                    <div className="form-group">
                    <label>
                        Contract Date
                        <span className="required_field">*</span>
                    </label>
                    <input type="date" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Customer Ref</label>
                    <input type="text" />
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Contact</label>
                    <input type="text" />
                    </div>
                </div>
    
                </div>
    
                {/* COLUMN 3 */}
            <div className="div-column">
                <div className="form-row">
                    <div className="form-group">
                    <label>Position</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Freight Term</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Country</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>
                        Pricing type<span className="required_field">*</span>
                    </label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Terms</label>
                    <select>
                        <option value=""></option>
                    </select>
                    </div>
                </div>
    
                <div className="form-row">
                    <div className="form-group">
                    <label>Days For Finance</label>
                    <input type="text" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
