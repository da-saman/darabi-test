import React, { useState, useEffect } from "react";

function Header(props) {
  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userJWT");
    props.onLogout();
  };
  return <button onClick={logOut}>log out</button>;
}

export default Header;
