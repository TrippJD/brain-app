import React, { Component } from "react";
import Particles from "react-particles-js";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Signin from "./components/signin/signin";
import Register from "./components/register/register";
import Logo from "./components/logo/logo";
import Rank from "./components/rank/rank";
import ImageLinkForm from "./components/imageLinkForm/imageLinkForm";
import FaceRecognition from "./components/faceRecognition/faceRecognition";
import Samples from "./components/samples/samples";
import Footer from "./components/footer/footer";
import { ProgressBar } from "react-fetch-progressbar";
import { progressBarFetch, setOriginalFetch } from "react-fetch-progressbar";

// var http = require("http");
// setInterval(function() {
//   http.get("http://brains-app-api.herokuapp.com");
// }, 9000000); // every 5 minutes (300000)

setOriginalFetch(window.fetch);
window.fetch = progressBarFetch;

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#fcfffe"
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#ffffff"
      },
      polygon: {
        nb_sides: 7
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 91.21621621621624,
        size_min: 3.3783783783783794,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0,
      direction: "none",
      random: false,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

const initialState = {
  input: "",
  imageUrl: "",
  box: [],
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // loads user into state
  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  // calculates face location from coords
  calculateFaceLocation = data => {
    const regions = data.outputs[0].data.regions.reduce((acc, reg) => {
      acc.push(reg.region_info.bounding_box);
      return acc;
    }, []);

    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    const newbox = regions.map(bbObj => {
      return {
        leftCol: bbObj.left_col * width,
        topRow: bbObj.top_row * height,
        rightCol: width - bbObj.right_col * width,
        bottomRow: height - bbObj.bottom_row * height
      };
    });
    return newbox;
  };

  // sets box state
  displayFaceBox = box => {
    this.setState({ box: box });
  };

  // submit on enter key in url form
  enterPress = event => {
    if (event.which === 13) {
      return this.onButtonSubmit();
    }
  };

  // submits when sample pic is clicked
  sampleClick = pic => {
    this.setState(
      {
        input: pic
      },
      () => {
        this.onButtonSubmit();
      }
    );
  };

  // sets input state on url form change
  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  // submit photo function
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    // clear box state
    this.setState({ box: [] });
    // remove old boxes
    const oldBox = document.getElementsByClassName("bounding-box");
    if (oldBox.length) {
      for (var i = oldBox.length - 1; i >= 0; --i) {
        oldBox[i].remove();
      }
    }
    // fetch box coordinates
    fetch("https://brains-app-api.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        // if api responds with coordinates, run the following
        if (response.outputs) {
          // update "entries" in database
          fetch("https://brains-app-api.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              // update "entries" in state
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
          // update "box" in state/ start bounding box code
          this.displayFaceBox(this.calculateFaceLocation(response));
        }
      })
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === "signin") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className="particle" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        <ProgressBar style={{ backgroundColor: "#752cd4" }} />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              enterPress={this.enterPress}
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
            <Samples sampleClick={this.sampleClick} />
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
