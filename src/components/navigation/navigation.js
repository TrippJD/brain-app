import React from "react";

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
          className="pin f3 link dim ph3 pointer">
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
          className="pin f3 link dim ph3 mt1 pointer">
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="pin f3 link dim ph3 mt1 pointer">
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
