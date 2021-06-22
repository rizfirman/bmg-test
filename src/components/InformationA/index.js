import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import "./InformationA.css";

const InformationA = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, jobdesc, gender, email } = formData;
  const [inputField, setInputField] = useState([jobdesc]);
  const { gender1, gender2 } = formData.gender
  const handleAddField = () => {
    setInputField([...inputField, jobdesc]);
    console.log(jobdesc);
  };
  return (
    <div className="informationA">
      <div class="element">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container bg-transparent">
        <div className="d-flex justify-content-between pt-3">
          <h1>Information A</h1>
          <h1>01</h1>
        </div>
        <div className="card main-card border border-darken-4 bg-transparent mt-5 ">
          <div className=" top-field d-flex justify-content-between">
            <div class="mb-3">
              <label for="firstName" class="form-label">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                value={firstName}
                onChange={setForm}
                name="firstName"
              ></input>
            </div>

            <div class="mb-3 text-end">
              <label for="lastName" class="form-label ">
                Last Name
              </label>
              <input
                type="email"
                class="form-control"
                id="lastName"
                value={lastName}
                onChange={setForm}
                name="lastName"
              ></input>
            </div>
          </div>
          <div className="dynamic-field">
            <div class="mb-3">
              <div className="row">
                <div className="col-md-11">
                  {inputField.map((index) => (
                    <>
                      <label for="inputText" class="form-label">
                        Job Desc
                      </label>
                      <textarea
                        key={index}
                        class="form-control"
                        id="inputText"
                        rows="3"
                        value={jobdesc}
                        onChange={setForm}
                        name="jobdesc"
                      ></textarea>
                    </>
                  ))}
                </div>
                <div className="col-md-1">
                  <span class="add-icon">
                    <AddIcon onClick={() => handleAddField()} />
                  </span>
                </div>
              </div>
            </div>


          </div>

          <div className="option pt-3">
            <label for="genderOption" class="form-label">
              Gender
            </label>
            <select
              class="form-select"
              id="genderOption"
              aria-label="Default select example"
              onChange={setForm}
            >
              <option selected onChange={setForm}>------</option>
              <option value={gender1}>Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="email pt-3">
            <div class="mb-3">
              <label for="inputText" class="form-label">
                Email
              </label>
              <textarea
                class="form-control"
                id="inputText"
                rows="3"
                value={email}
                onChange={setForm}
                name="email"
              ></textarea>
            </div>
          </div>


          <div className="d-flex justify-content-center pt-5 pb-5">
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

export default InformationA;
