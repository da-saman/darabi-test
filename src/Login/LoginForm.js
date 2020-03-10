import React, { useState } from "react";
import "./Login.css";
const _USERNAME = "username";
const _PASSWORD = "password";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    if (!!username && !!password) {
      props.onSubmit(username, password);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === _USERNAME) {
      setUsername(value);
    } else if (name === _PASSWORD) {
      setPassword(value);
    }
  };

  return (
    <form name="loginForm" onSubmit={handleSubmit} className="loginContainer">
      <div className="formRow">
        <label className="formLable" htmlFor={_USERNAME}>
          Username
        </label>
        <input
          className="formInput"
          type="text"
          name={_USERNAME}
          value={username}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="formRow">
        <label className="formLable" htmlFor={_PASSWORD}>
          Password
        </label>
        <input
          className="formInput"
          type="password"
          name={_PASSWORD}
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>
      <p>{props.error}</p>
      {submitted && !username && <p>Username is requierd</p>}
      {submitted && !password && <p>Password is requierd</p>}
      <button className="loginButton" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
