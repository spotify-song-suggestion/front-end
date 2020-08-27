import React, { useState, useContext } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { appContext } from "../utilities/appContext";

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

const Login = (props) => {
  const { push } = useHistory();

  const initialFormState = {
    username: "",
    password: "",
  };

  const [credentials, setCredentials] = useState(initialFormState);

  const handleChanges = (e) => {
    e.persist();
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://spotify-song-suggestor-x.herokuapp.com/api/auth/login",
        credentials
      )

      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("Logged In", true);
        push("/search");
        window.location.reload();
      })
      .catch((err) => console.log("err", err.message));
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
        </label>
        <label htmlFor="password">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChanges}
          />
        </label>
        <LoginButton type="submit">
          <LoginText>Login</LoginText>
        </LoginButton>
      </LoginForm>
    </div>
  );
};

export default Login;
