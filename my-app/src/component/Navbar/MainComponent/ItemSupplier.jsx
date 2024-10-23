import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import axios from "axios";

const ItemSupplier = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    price: "",
    dos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const url =
      "https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers";
    e.preventDefault();
    console.log("formData", formData);
    axios
      .post(url, formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
      <h1>Supplier Details</h1>
      <form className="form-div">
        <div className="form-field">
          <div>
            <label htmlFor="name">
              <span>Supplier Name</span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter supplier name"
              />
            </label>
            <label htmlFor="company">
              <span>Company Name</span>
              <input
                type="text"
                name="company"
                id="name"
                placeholder="Enter company name"
              />
            </label>
          </div>

          <div>
            <label htmlFor="country">
              <span>Country</span>
              <select
                type="text"
                name="country"
                id="country"
                value="USA"
                placeholder="Select Country"
              >
                <option value="USA">USA</option>
              </select>
            </label>
            <label htmlFor="state">
              <span>State</span>
              <select
                type="date"
                name="state"
                id="state"
                value="Florida"
                placeholder="Select State"
              >
                <option value="Florida">Florida</option>
              </select>
            </label>
          </div>

          <div>
            <label htmlFor="price">
              <span>City</span>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter City"
              />
            </label>
            <label htmlFor="dos">
              <span>Email Address</span>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Email Address "
              />
            </label>
          </div>
        </div>
      </form>
      {/* <SubmitButton handleSubmit={handleSubmit} /> */}
    </div>
  );
};

export default ItemSupplier;
