import React from "react";
import "./faceRecognition.css";

// const boxStorage = [];

class FaceRecognition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  boxs = () => {
    this.boxStorage = this.props.box;
    console.log("in boxs", this.boxStorage === this.props.box);
    let fragment = document.createDocumentFragment();
    this.props.box.forEach(function(cords) {
      var div = document.createElement("div");

      div.setAttribute(
        "style",
        `top:${cords.topRow}px;
        left:${cords.leftCol}px;
        bottom:${cords.bottomRow}px;
        right:${cords.rightCol}px;`
      );
      console.log(
        "boxs",
        cords.topRow,
        cords.leftCol,
        cords.bottomRow,
        cords.rightCol
      );
      div.className = "bounding-box";
      fragment.appendChild(div);
    });
    let boxWrap = document.getElementById("box-wrap");
    boxWrap.appendChild(fragment);
  };

  render() {
    const { imageUrl } = this.props;
    return (
      <div className="pic-wrapper center ma">
        <div className="relative mt2" id="box-wrap">
          <img
            id="inputimage"
            alt=""
            src={imageUrl}
            width="500"
            height="auto"
          />

          {!this.props.box.length ? (
            <div />
          ) : this.props.box === this.boxStorage ? (
            <div />
          ) : (
            this.boxs()
          )}
        </div>
      </div>
    );
  }
}

export default FaceRecognition;

/* <div
            className="bounding-box"
            style={{
              top: cords.topRow,
              right: cords.rightCol,
              bottom: cords.bottomRow,
              left: cords.leftCol
            }}
          />
        </div>  */

// const FaceRecognition = ({ imageUrl, box }) => {

// {this.props.box.length ? this.boxs() : <div />}
