import React, { useState } from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    credentials: {
      username: "",
      password: "",
    },
  });

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch((err) => console.log("err", err.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
