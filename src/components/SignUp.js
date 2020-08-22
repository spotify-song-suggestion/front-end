import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";

export default function SignUp() {
  //set state for new member signing up
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [member, setMember] = useState([]);

  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // state for our errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // handle form submission
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/member", newMember)
      .then((res) => {
        console.log("New member", res.data);
        // update state with value from API
        setMember([...member, res.data]);
        console.log("member", member);
        setNewMember({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        setErrors("There was an error retreiving data");
        console.log(err);
      });
  };

  //validation schema
  const formSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "Name must be at least 2 characters."),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Name must be at least 2 characters."),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: yup
      .string()
      .required("Please create a password")
      .min(8, "Password must be at least 8 characters."),
  });

  //Activate that button if everything is ok!
  useEffect(() => {
    formSchema.isValid(newMember).then((isValid) => {
      setButtonDisabled(!isValid);
    });
  }, [newMember]);

  //validate the changes
  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  // handle changes
  const inputChange = (e) => {
    e.persist();
    console.log("input changed", e.target.value);
    const newMemberData = {
      ...newMember,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setNewMember(newMemberData);
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="firstName">
          First Name:<br/>
          <input
            // data-cy="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newMember.firstName}
            onChange={inputChange}
          />
          {errors.firstName.length > 0 ? (
            <label className="error">{errors.firstName}</label>
          ) : null}
        </label>
        <label htmlFor="lastName">
          Last Name: <br/>
          <input
            // data-cy="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newMember.lastName}
            onChange={inputChange}
          />
          {errors.lastName.length > 0 ? (
            <label className="error">{errors.lastName}</label>
          ) : null}
        </label>
        <label htmlFor="email">
          Email:<br/>
          <input
            // data-cy="email"
            type="email"
            name="email"
            placeholder="email"
            value={newMember.email}
            onChange={inputChange}
          />
          {errors.email.length > 0 ? (
            <label className="error">{errors.email}</label>
          ) : null}
        </label>
        <label htmlFor="password">
          Password:<br/>
          <input
            // data-cy="password"
            type="password"
            name="password"
            placeholder="Password"
            value={newMember.password}
            onChange={inputChange}
          />
          {errors.password.length > 0 ? (
            <label className="error">{errors.password}</label>
          ) : null}
        </label>
        <button data-cy="submit" disabled={buttonDisabled} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
