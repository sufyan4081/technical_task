import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import axios from "axios";

const ItemDetails = () => {
  const [formData, setFormData] = useState({
    itemDetails: {
      itemName: "",
      quantity: "",
      price: "",
      dos: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working");
    const url =
      "https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers";
    console.log("formData", formData);
    try {
      const response = axios.post(
        url,
        { itemDetails: formData },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Data is Submitted Successfully");
      console.log("success data", response);
    } catch (error) {
      console.log(error);
    }
  };

  // for min today date
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDay();
  };
  return (
    <div className="main-div">
      <h1>Item Details</h1>
      <form className="form-div">
        <div className="form-field">
          <div>
            <label htmlFor="itemName">
              <span>Item Name</span>
              <input
                type="text"
                name="itemDetails.itemName"
                id="itemName"
                value={formData.itemDetails.itemName}
                onChange={handleChange}
                placeholder="Enter Item name"
              />
            </label>
            <label htmlFor="quantity">
              <span>Quantity</span>
              <input
                type="text"
                name="itemDetails.quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.itemDetails.quantity}
                placeholder="Enter quantity"
              />
            </label>
          </div>

          <div>
            <label htmlFor="price">
              <span>Unit Price</span>
              <input
                type="text"
                name="itemDetails.price"
                id="price"
                onChange={handleChange}
                value={formData.itemDetails.price}
                placeholder="Enter unit price"
              />
            </label>
            <label htmlFor="dos">
              <span>Date of Submission</span>
              <input
                type="date"
                name="itemDetails.dos"
                id="dos"
                onChange={handleChange}
                value={formData.itemDetails.dos}
                placeholder="Select date"
              />
            </label>
          </div>
        </div>
      </form>
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default ItemDetails;
