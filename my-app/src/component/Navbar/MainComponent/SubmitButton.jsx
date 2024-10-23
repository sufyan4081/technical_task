import React from "react";

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div className="btn-div">
      <h1>Submitted Data</h1>
      <p>The data submitted by users will be displayed below</p>
      <button onClick={handleSubmit} type="submit" className="submit-btn">
        Save Changes
      </button>
    </div>
  );
};

export default SubmitButton;
