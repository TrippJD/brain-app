import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="pic-wrapper center ma">
      <div className="relative mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
