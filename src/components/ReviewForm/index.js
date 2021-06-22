import React from "react";
import "./ReviewForm.css";


export const ReviewForm = ({ formData, setForm, navigation }) => {
  const { go } = navigation;

  const {
    firstName,
    lastName,
    jobdesc,
    gender,
    email,
    pc,
    address,
    mobile
  } = formData;
  return (
    <div className="review-form">
      <div class="element">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>Confirmation data of entry</h1>
          <h1>03</h1>
        </div>
        <div className="card review-card border border-darken-4 mt-5">
          <div className="review-detail">
            <Data details={[{ 'Name': firstName + lastName }]} />
            <Data details={[{ 'Jobdesc': jobdesc }]} />
            <Data details={[{ 'Gender': gender }]} />
            <Data details={[{ 'email': email }]} />
            <Data details={[{ 'Have a Laptop/PC': pc }]} />
            <Data details={[{ 'Mobile Number': mobile }]} />
            <Data details={[{ 'Address': address }]} />
          </div>
          <div className="btn-area d-flex justify-content-between pt-5 pb-5">
            <button
              className="btn btn-danger"
              onClick={() => navigation.previous()}
            >
              PREV
            </button>
            <button
              className="btn btn-primary"
              onClick={() => go('submit')}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export const Data = ({ details }) => (
  <div>
    <div className="d-flex">
      {details.map((data, index) => {
        const objKey = Object.keys(data)[0]
        const objValue = data[Object.keys(data)[0]];
        return <h3 key={index}>{`${objKey}: ${objValue}`}</h3>
      })}
    </div>
  </div>
)