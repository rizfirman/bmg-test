import React from "react";
import "./SubmitForm.css";
import { Link } from "react-router-dom";

const SubmitForm = () => {
  return (
    <div className="submit">
      <div class="element">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="card card-submit border-0 bg-transparent">
          <div className="text-center">
            <h1>Thank You!</h1>
            <Link to="/home">
              <button className="btn btn-primary mt-5">
                Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
