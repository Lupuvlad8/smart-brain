import React from "react";
import "./Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://smart-brain.up.railway.app/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className="form-container center">
        <main className="main">
          <div className="measure">
            <fieldset id="sign-up">
              <legend className="form-title">Register</legend>
              <div className="field-container">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  autoComplete="off"
                  className="form-input"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="field-container">
                <label className="label" htmlFor="email-address">
                  Email
                </label>
                <input
                  autoComplete="off"
                  className="form-input"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="field-container">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  autoComplete="off"
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="button-container">
              <input
                onClick={this.onSubmitSignIn}
                className="form-button"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
