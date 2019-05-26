import React from "react";
import "./sample.css";
import sample1 from "./sample1.jpg";
import sample2 from "./sample2.jpg";
import sample3 from "./sample3.jpg";
import sample4 from "./sample4.jpg";

class Samples extends React.Component {
  render() {
    const { sampleClick } = this.props;
    return (
      <div>
        <div className="imgWrap">
          <div className="imgCard">
            <img
              src={sample1}
              alt=""
              height="72"
              width="auto"
              tabindex="0"
              className="sample grow pointer"
              onClick={() =>
                sampleClick(
                  "http://cdn.24.co.za/files/Cms/General/d/3903/f2966de913e94e9194fe058f449debb1.jpg"
                )
              }
            />
            <img
              src={sample2}
              alt=""
              height="72"
              width="auto"
              tabindex="0"
              className="sample grow dib pointer"
              onClick={() =>
                sampleClick(
                  "https://cdn2.stylecraze.com/wp-content/uploads/2013/07/6.-Liza-Soberano.jpg"
                )
              }
            />
            <img
              src={sample3}
              alt=""
              height="72"
              width="auto"
              tabindex="0"
              className="sample grow dib pointer"
              onClick={() =>
                sampleClick(
                  "https://fromthehipphoto.com/focus/wp-content/uploads/2016/08/From-The-Hip-Photo-0026.jpg"
                )
              }
            />
            <img
              src={sample4}
              alt=""
              height="72"
              width="auto"
              tabindex="0"
              className="sample grow dib pointer"
              onClick={() =>
                sampleClick(
                  "https://my-artwork.com/wp-content/uploads/2018/07/3915-ygnwxb.jpg"
                )
              }
            />
          </div>
        </div>
        <div className="sampleText">
          Click sample photos to see it in action
        </div>
      </div>
    );
  }
}

export default Samples;
