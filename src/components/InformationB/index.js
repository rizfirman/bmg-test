import React from "react";
import "./InformationB.css";

const AdressForm = ({ formData, setForm, navigation }) => {
  const { pc, address, mobile } = formData;

  return (
    <div className="informationB">
      <div class="element">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between pt-3">
          <h1>Information B</h1>
          <h1>02</h1>
        </div>
        <div className="card infoB-card border border-darken-4">
          <div className=" radio-area pb-5">
            <h5>Have a Laptop/PC?</h5>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pc"
                id="inlineRadio1"
                value={pc}
                onChange={setForm}
              ></input>
              <label className="form-check-label" for="inlineRadio1">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pc"
                id="inlineRadio2"
                value={pc}
                onChange={setForm}
              ></input>
              <label className="form-check-label" for="inlineRadio2">
                No
              </label>
            </div>
          </div>
          <div className="address-field">
            <div class="mb-3">
              <label for="inputText" class="form-label">
                Address
              </label>
              <textarea
                class="form-control"
                id="inputText"
                rows="3"
                onChange={setForm}
                name="address"
                value={address}
              ></textarea>
            </div>
          </div>

          <div className="mobile pt-3">
            <div class="mb-3">
              <label for="inputText" class="form-label">
                Mobile Number
              </label>
              <textarea
                class="form-control"
                id="inputText"
                rows="3"
                onChange={setForm}
                name="mobile"
                value={mobile}
              ></textarea>
            </div>
          </div>

          <div className=" btn-area d-flex justify-content-between pt-5 pb-5">
            <button
              className="btn btn-danger"
              onClick={() => navigation.previous()}
            >
              PREV
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigation.next()}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressForm;
