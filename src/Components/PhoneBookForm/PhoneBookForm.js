import React from "react";
import "./PhoneBookForm.css";

export default function PhoneBookForm() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#EEEEEE",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          fontSize:
            'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
          width: 600,
        }}
        className="bg-white p-5 m-5"
      >
        <h1 className="text-center mt-0 mb-5">Phone Book Form</h1>
        <div className="row">
          <div className="input-group mb-5">
            <div className="form-outline">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                name="search"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="col-12">
            <div className="group">
              <input type="text" name="firstName" required />
              <span className="highLight" />
              <span className="bar" />
              <label>First Name</label>
            </div>
          </div>
          <div className="col-12">
            <div className="group">
              <input type="text" name="lastName" required />
              <span className="highLight" />
              <span className="bar" />
              <label>Last Name</label>
            </div>
          </div>
          <div className="col-12">
            <div className="group">
              <input type="number" name="phoneNumber" required />
              <span className="highLight" />
              <span className="bar" />
              <label>Phone Number</label>
            </div>
          </div>
        </div>
        <div className="row">
          <button className="btn text-white bg-dark col-12 w-100 ">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}
