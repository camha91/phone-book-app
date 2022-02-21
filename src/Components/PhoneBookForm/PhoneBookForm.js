import React, { useState } from "react";
import "./PhoneBookForm.css";

export default function PhoneBookForm() {
  const [state, setState] = useState({
    values: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);

    const newValues = {
      ...state.values,
      [name]: value,
    };
    const newErrors = { ...state.errors };

    if (value.trim() === "") {
      newErrors[name] = name.toUpperCase() + " is invalid!";
    } else {
      newErrors[name] = "";
    }

    if (name === "phoneNumber") {
      const regexPhoneNumber =
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

      if (!regexPhoneNumber.test(value)) {
        newErrors[name] = name.toUpperCase() + " is invalid!";
      } else {
        newErrors[name] = "";
      }
    }

    setState({
      values: newValues,
      errors: newErrors,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              <input
                value={state.values.firstName}
                type="text"
                name="firstName"
                onChange={handleChangeValue}
                required
              />
              <span className="highLight" />
              <span className="bar" />
              <span className="text text-danger">{state.errors.firstName}</span>
              <label>First Name</label>
            </div>
          </div>
          <div className="col-12">
            <div className="group">
              <input
                value={state.values.lastName}
                type="text"
                name="lastName"
                onChange={handleChangeValue}
                required
              />
              <span className="highLight" />
              <span className="bar" />
              <span className="text text-danger">{state.errors.lastName}</span>
              <label>Last Name</label>
            </div>
          </div>
          <div className="col-12">
            <div className="group">
              <input
                value={state.values.phoneNumber}
                type="number"
                name="phoneNumber"
                onChange={handleChangeValue}
                required
              />
              <span className="highLight" />
              <span className="bar" />
              <span className="text text-danger">
                {state.errors.phoneNumber}
              </span>
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
