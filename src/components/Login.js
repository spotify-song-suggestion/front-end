import React, { useState, useContext, useEffect } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { appContext } from "../utilities/appContext";
import * as yup from "yup";


// *****Styles*****
const Input = styled.input`
  background-color: rgba(33, 33, 33, 0.9);
  height: 2em;
  width: 20em;
  margin: 0 1em;
  border: 1px solid white;
  border-radius: 25px;
  text-align: center;
  font-size: 1em;
  margin-bottom: 2em;
  overflow: hidden;
  outline: none;
  color: #e8e8e8;
`;
const Title = styled.h1`
  margin-top: 1em;
  margin-bottom: 1em;
  color: #b3b3b3;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginButton = styled.button`
  width: 150px;
  height: 35px;
  padding-bottom: 5px;
  font-size: 1.25em;
  border-radius: 10px;
  background-color: rgba(29, 185, 84, 0.8);
  
`;
const LoginText = styled.span`
  color: #b3b3b3;
  text-shadow: 1px 1px #212121;
`;

// *****Styles*****



const Login = (props) => {
  const { push } = useHistory();



  const initialFormState = {
    username: "",
    password: "",
  };

// state for whether our button should be disabled or not.
const [buttonDisabled, setButtonDisabled] = useState(false);
// state for our errors
const [errors, setErrors] = useState(initialFormState);

const [credentials, setCredentials] = useState(initialFormState);
 const setCurrentUser = useContext(appContext).setCurrentUser;
 const setIsLoggedIn = useContext(appContext).setIsLoggedIn;

// Validation schema

const formSchema = yup.object().shape({
username: yup
.string()
.required("Username is required"),
password: yup
.string()
.required("Password is required")
});

 //Activate that button if everything is ok!
 useEffect(() => {
  formSchema.isValid(credentials).then((isValid) => {
    setButtonDisabled(!isValid);
  });
}, [credentials]);

  

  const handleChanges = (e) => {
    e.persist();
    e.preventDefault();
    validateChange(e);
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://spotify-song-suggestor-x.herokuapp.com/api/auth/login",
        credentials)

      .then((res) => {
        console.log(res.data);
        setIsLoggedIn(true)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("Logged In", true);
        
        setCurrentUser(credentials)
        localStorage.setItem('currentUser', JSON.stringify(credentials))
        console.log(credentials)
        push("/search");
        
        
      })
      .catch((err) => console.log("err", err.message));
  };
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




  return (
    <div>
      <Title>User Login</Title>
      <LoginForm onSubmit={handleSubmit}>
        <label htmlFor="username">
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChanges}
          />
        </label>{errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}
        <label htmlFor="password">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChanges}
          />
        </label>
        <LoginButton type="submit" disabled={buttonDisabled}>
          <LoginText>Login</LoginText>
        </LoginButton>
      </LoginForm>
    </div>
  );
};

export default Login;
