import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// ***** STYLES *****
const Input = styled.input`
  background-color: rgba(33, 33, 33, 0.9);
  height: 2em;
  width: 20em;
  margin: 0 1em;
  border: 1px solid white;
  border-radius: 25px;
  text-align: center;
  font-size: 1em;
  margin-bottom: 1em;
  overflow: hidden;
  outline: none;
  color: #e8e8e8;
`;
const Title = styled.h1`
  margin-top: 0.6em;
  margin-bottom: 0.6em;
  color: #b3b3b3;
  @media (max-width: 950px) {
    font-size: 1.75em;
    margin-bottom: 1em;
  }
  @media (max-width: 600px) {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
`;
const SignUpButton = styled.button`
  width: 150px;
  height: 35px;
  font-size: 1.25em;
  border-radius: 10px;
  background-color: rgba(29, 185, 84, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpText = styled.span`
  color: #b3b3b3;
  text-shadow: 1px 1px #212121;
  font-weight: 700;
`;
// ***** STYLES *****

export default function SignUp() {
  const { push } = useHistory();

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  //set state for new member signing up
  const [newMember, setNewMember] = useState(initialState);
  //register credentials
  const [credentials, setCredentials] = useState({
    username: newMember.username,
    password: newMember.password,
  });

  //temp. used to display response data
  const [members, setMembers] = useState([]);

  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // state for our errors
  const [errors, setErrors] = useState(initialState);

  // handle form submission

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
    username: yup
      .string()
      .min(6, "Must container at least 6 characters")
      .required("Must create username"),
    email: yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: yup
      .string()
      .required("Passwords must Match")
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

    setCredentials({
      ...credentials,
      username: newMember.username,
      password: newMember.password,
    });
    validateChange(e);
    setNewMember(newMemberData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("New member", newMember);
    setMembers([...members, newMember]);
    console.log("members", members);
    console.log(credentials);
    axios
      .post(
        "https://spotify-song-suggestor-x.herokuapp.com/api/auth/register",
        { username: newMember.username, password: newMember.password }
      )
      .then((res) => {
        console.log(credentials, "register success", res.data);
        alert("account created, please sign in");
        push("/login");
      })
      .catch((err) => {
        console.log(credentials, "register problem", err);
      });
  };

  return (
    <div className="signup">
      <Title>Sign Up</Title>
      <form onSubmit={formSubmit}>
        <label htmlFor="firstName">
          <Input
            //data-cy="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newMember.firstName}
            onChange={inputChange}
          />
        </label>
        {errors.firstName.length > 0 ? (
          <p className="error">{errors.firstName}</p>
        ) : null}

        <label htmlFor="lastName">
          <Input
            // data-cy="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newMember.lastName}
            onChange={inputChange}
          />
        </label>
        {errors.lastName.length > 0 ? (
          <p className="error">{errors.lastName}</p>
        ) : null}

        <label htmlFor="email">
          <Input
            // data-cy="email"
            type="email"
            name="email"
            placeholder="Email"
            value={newMember.email}
            onChange={inputChange}
          />
        </label>
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}

        <label>
          <Input
            //data-cy="firstName"
            type="text"
            name="username"
            placeholder="Username"
            value={newMember.username}
            onChange={inputChange}
          />
        </label>
        {errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}

        <label htmlFor="password">
          <Input
            // data-cy="password"
            type="password"
            name="password"
            placeholder="Choose Password"
            value={newMember.password}
            onChange={inputChange}
          />
        </label>
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}

        <SignUpButton data-cy="submit" disabled={buttonDisabled} type="submit">
          <SignUpText>Submit</SignUpText>
        </SignUpButton>
      </form>
    </div>
  );
}
