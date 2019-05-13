import React from "react";
import "./navigation.css";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        className="nav ph4 pt0"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start"
        }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="nav-font f3 link dim ph3 mt2 mb3 pointer">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        className="nav ph4 pt0 mt0"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "flex-start"
        }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="nav-font f3 link dim ph3 mt2 mb3 pointer">
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="nav-font f3 link dim ph3 mt2 mb3 pointer">
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
