import React from "react";
import "./imageLinkForm.css";

const ImageLinkForm = ({ enterPress, onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="entries-text f3">
        {"I will detect faces in any picture. Try me!"}{" "}
      </p>
      <div>
        <div className="shadow-5 center form">
          <input
            autoFocus="autofocus"
            onKeyPress={enterPress}
            className=" input-form f4"
            type="text"
            placeholder=" Paste image url here"
            onChange={onInputChange}
          />
          <button id="myBtn" className="grow link dib" onClick={onButtonSubmit}>
            Detect Faces
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

// useEffect(() => {
//   function foc() {
//     document.body.querySelector(".input-form").focus();
//   }
//   foc();
// });
