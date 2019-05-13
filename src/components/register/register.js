import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  enterTab = event => {
    if (event.which === 13) {
      document.getElementById("password").focus();
    }
  };

  enterSubmit = event => {
    if (event.keyCode === 13) {
      return this.onSubmitSignin();
    }
  };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignin = () => {
    fetch("https://brains-app-api.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(Response => Response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className="art br3 ba b--black-20 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="sib f1 fw6 ph3 br3 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f5" htmlFor="name">
                  Name
                </label>
                <input
                  className="br1 pa2 input-reset ba b--black hoverr bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
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
                className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
