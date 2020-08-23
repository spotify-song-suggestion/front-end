import React, { useState } from "react";
import axiosWithAuth from "../utilities/axiosWithAuth";
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
      .post("https://spotify-song-suggestor-x.herokuapp.com/api/auth/login", credentials)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log("err", err.message));
  };

  return (
    <div>
      <h3>User Login</h3>
      <form className = 'login' onSubmit={handleSubmit}>
        <label> Email: 
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChanges}
          />
        </label>
        <label> Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
