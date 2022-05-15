import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
// import Sidebar from "./components/Sidebar";
// import Rightbar from "./components/Rightbar";
import "./App.css";
import { useMoralis } from "react-moralis";
import { ConnectButton, Icon } from "web3uikit";
import Navbar from "./components/Navbar";

const App = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <>
    {isAuthenticated ? (
      <div className="page">
        <div className="navbar">
          <Navbar/>
        </div>
        {/* <div className="sideBar">
          <Sidebar />
          <div
              className="logout"
              onClick={() => {
                Moralis.User.logOut().then(() => {
                  window.location.reload();
                });
              }}
            >
              Logout
            </div>
        </div> */}
        <div className="mainWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        {/* <div className="rightBar">
          <Rightbar />
        </div> */}
      </div>
      ) : (
        <div className="loginPage">
              <img src="https://i.imgur.com/W4UQ1CS.jpg" 
                style={{borderRadius:"50%"}}
                width="120"
              ></img>
              <h2 style={{color:"#fff"}}>Welcome to Ape Lounge</h2>
          <ConnectButton />
        </div>

      )}
    </>
  );
};

export default App;
