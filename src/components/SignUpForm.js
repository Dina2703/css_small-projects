import React from "react";
import "../style/sign_up_form.css";

function SignUpForm() {
  return (
    <div id="sign_up_form" className="flex">
      <div className="container flex">
        <div className="hero_leftside">
          <h2>Learn to code by watching others </h2>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how deveolers think
            is invaluable.
          </p>
        </div>
        <div className="form_container">
          <div className="try button">
            <span> Try it free 7 days </span>then $20/mo.thereafter
          </div>
          <form className="flex">
            <input
              type="text"
              className="input_control"
              placeholder="First Name"
            />
            <input
              type="text"
              className="input_control"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="input_control"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="input_control"
              placeholder="Password"
            />
            <button className="button claim_trail">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="terms">
              By clicking the button you are agreeing to our{" "}
              <span>Terms and Services</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
