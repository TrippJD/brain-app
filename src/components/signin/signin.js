import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  // Switch focus on enter press
  enterTab = event => {
    if (event.which === 13) {
      document.getElementById("password").focus();
    }
  };

  // Submit signIn on enter press
  enterSubmit = event => {
    if (event.keyCode === 13) {
      return;
    }
    return this.onSubmitSignin();
  };

  // Update signIn state with value of form
  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  // Submit signIn info to sever/ Load user info/ change rout to home
  onSubmitSignin = () => {
    fetch("https://murmuring-hamlet-47938.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
          // this.props.pending(true);
        }
      });
  };

  // Render the signIn form
  render() {
    const { onRouteChange } = this.props;
    return (
      <article className=" art br3 ba b--black-20 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="sib f1 fw6 ph3 br3 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="br1 pa2 input-reset ba b--black hoverr bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                  onKeyDown={this.enterTab}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f5" htmlFor="password">
                  Password
                </label>
                <input
                  className="br1 pa2 input-reset ba b--black hoverr bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                  onKeyDown={this.onSubmitSignin}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignin}
                className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f4 fw6 link dim black db">
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
