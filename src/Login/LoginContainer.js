import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Client } from "../client";

function LoginContainer(props) {
  const [errors, setErrors] = useState("");
  const handleSubmit = (user, pass) => {
    // login(user, pass, response => console.log(response));
    Client.login(user, pass)
      .then(e => {
        console.log(e);

        props.onLoggin();
      })
      .catch(error => {
        setErrors(error);
      });
  };
  return <LoginForm onSubmit={handleSubmit} error={errors}></LoginForm>;
}

export default LoginContainer;
