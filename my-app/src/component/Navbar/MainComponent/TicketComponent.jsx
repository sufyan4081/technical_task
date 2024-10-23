import React, { useState } from "react";
import ItemDetails from "./ItemDetails";
import ItemSupplier from "./ItemSupplier";
import "./style.css";

const TicketComponent = () => {
  const [selected, setSelected] = useState(null);

  const handleCheckboxChange = (type) => {
    setSelected(type);
  };
  return (
    <div className="main-div">
      <div className="checkbox-container">
        <div>
          <label htmlFor="item">
            <input
              type="checkbox"
              checked={selected === "item"}
              onChange={() => handleCheckboxChange("item")}
              id="item"
            />
            Item
          </label>
        </div>
        <div>
          <label htmlFor="supplier">
            <input
              type="checkbox"
              checked={selected === "supplier"}
              onChange={() => handleCheckboxChange("supplier")}
              id="supplier"
            />
            Supplier
          </label>
        </div>
      </div>

      {/* conditionally render components */}
      <div>
        {selected === "item" && <ItemDetails />}
        {selected === "supplier" && <ItemSupplier />}
      </div>
    </div>
  );
};

export default TicketComponent;
