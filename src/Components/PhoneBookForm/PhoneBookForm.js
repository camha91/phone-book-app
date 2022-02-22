import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewContactAction } from "../../redux/Actions/PhoneBookActions";
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

  const dispatch = useDispatch();

  const handleChangeValue = (e) => {
    const { name, value } = e.target;

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

  const handleAddContact = (e) => {
    e.preventDefault();

    const { values, errors } = state;

    // Create contact
    const newContact = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
    };

    let valid = true;

    for (let key in values) {
      if (values[key] === "") {
        valid = false;
      }
    }

    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Please check all fields!");
      return;
    }

    dispatch(addNewContactAction(newContact));

    setState({
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
        onSubmit={handleAddContact}
        style={{
          fontSize:
            'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
          width: 600,
        }}
        className="bg-white p-5 m-5"
      >
        <h1 className="text-center mt-0 mb-5">Phone Book Form</h1>
        <div className="row">
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
                type="tel"
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
