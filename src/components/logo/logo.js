import React from "react";
import Tilt from "react-tilt";
import "./logo.css";
import physics from "./rocket.png";

const Logo = () => {
  return (
    <Tilt className="Tilt" options={{ max: 50 }}>
      <div className="Tilt-inner">
        <img className="rocket" alt="atom" src={physics} />
      </div>
    </Tilt>
  );
};

export default Logo;
