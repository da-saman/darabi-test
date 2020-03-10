import React, { useState, useEffect } from "react";
import LoginContainer from "./Login/LoginContainer";
import MainList from "./MainContent/MainList";
import FameDetails from "./FameCard/FameDetails";
import Header from "./Header/Header";
import "./App.css";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      setIsLoggedIn(true);
    }
  }, []);

  const isLoggedIn = () => {
    return !!localStorage.getItem("userJWT");
  };
  const backHandler = () => {
    setSelectedItem(null);
  };
  const selectItemHandler = id => {
    setSelectedItem(id);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  console.log(selectedItem);
  return (
    <div className="App">
      <Header onLogout={logoutHandler} />
      {isLoggedin ? (
        selectedItem ? (
          <FameDetails id={selectedItem} onBack={backHandler} />
        ) : (
          <MainList onSelect={selectItemHandler} />
        )
      ) : (
        <LoginContainer onLoggin={loginHandler} />
      )}
    </div>
  );
}

export default App;
