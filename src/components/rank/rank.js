import React from "react";

const Rank = ({ name, entries }) => {
  // capitalize first letter of name
  const cap = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="entries-text">
      <div className="f3">
        {" "}
        {`${cap(name)}`}
        <br />
        {`Number of submitions...`}
      </div>
      <div className="f1">{`${entries}`}</div>
    </div>
  );
};

export default Rank;
