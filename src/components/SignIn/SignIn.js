import React from "react";
import "./SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://smart-brain-api-wffr.onrender.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
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
    const { onRouteChange } = this.props;
    return (
      <article autoComplete="off" className="form-container center">
        <main className="main">
          <div className="measure">
            <fieldset id="sign-up">
              <legend className="form-title">Sign In</legend>
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
                value="Sign in"
              />
            </div>
            <div className="signin-reg-container">
              <span
                onClick={() => onRouteChange("register")}
                className="signin-reg"
              >
                Register
              </span>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
