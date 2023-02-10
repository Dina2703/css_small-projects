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
        <div className="form_container"></div>
      </div>
    </div>
  );
}

export default SignUpForm;
