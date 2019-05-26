import React from "react";
import "./navigation.css";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        className="nav"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start"
        }}>
        <p onClick={() => onRouteChange("signin")} className="nav-font">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        className="nav"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "flex-start"
        }}>
        <p onClick={() => onRouteChange("signin")} className="nav-font">
          Sign In
        </p>
        <p onClick={() => onRouteChange("register")} className="nav-font">
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
