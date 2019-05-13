import React from "react";
import "./imageLinkForm.css";

const ImageLinkForm = ({ enterPress, onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="entries-text f3">
        {"I will detect faces in any picture. Try me!"}{" "}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form">
          <input
            onKeyPress={enterPress}
            className=" input-form f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            id="myBtn"
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}>
            Detect Faces
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
