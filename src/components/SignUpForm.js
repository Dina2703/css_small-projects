import { useState } from "react";
import "../style/sign_up_form.css";
import { MdOutlineError } from "react-icons/md";

function SignUpForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isPasswordEmpty: false,
    isEmail: false,
  });

  const { isFirstNameEmpty, isLastNameEmpty, isPasswordEmpty, isEmail } = error;

  const { firstName, lastName, email, password } = form;

  const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.length <= 0) {
      setError((prev) => ({
        ...prev,
        isFirstNameEmpty: true,
      }));
    }
    if (lastName.length <= 0) {
      setError((prev) => ({
        ...prev,
        isLastNameEmpty: true,
      }));
    }
    if (password.length <= 0) {
      setError((prev) => ({
        ...prev,
        isPasswordEmpty: true,
      }));
    }
    if (email.length <= 0 || !isValidEmail.test(email)) {
      setError((prev) => ({
        ...prev,
        isEmail: true,
      }));
      console.log("email is not correct");
    } else {
      console.log(form);
      console.log("Form submitted");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  }

  function handleChange(e) {
    let { name, value } = e.target;
    if (isEmail || isFirstNameEmpty || isLastNameEmpty || isPasswordEmpty) {
      setError({
        isFirstNameEmpty: false,
        isLastNameEmpty: false,
        isPasswordEmpty: false,
        isEmail: false,
      });
    }
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div id="sign_up_form" className="flex">
      <div className="container flex">
        <div className="hero_leftside flex">
          <h2>Learn to code by watching others </h2>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how deveolers think
            is invaluable.
          </p>
        </div>
        <div className="form_container flex">
          <div className="try button">
            <span> Try it free 7 days </span>then $20/mo.thereafter
          </div>
          <form className="flex" onSubmit={handleSubmit}>
            <div className="input_control">
              <input
                onMouseDown={handleChange}
                className={isFirstNameEmpty ? "err" : ""}
                type="text"
                placeholder={isFirstNameEmpty ? "" : "First Name"}
                value={firstName}
                onChange={handleChange}
                name="firstName"
              />{" "}
              {isFirstNameEmpty ? <MdOutlineError className="err_icon" /> : ""}
              {isFirstNameEmpty ? (
                <p className="err_message">First Name cannot be empty</p>
              ) : (
                ""
              )}
            </div>

            <div className="input_control">
              <input
                onMouseDown={handleChange}
                className={isLastNameEmpty ? "err" : ""}
                type="text"
                placeholder={isLastNameEmpty ? "" : "Last Name"}
                value={lastName}
                onChange={handleChange}
                name="lastName"
              />{" "}
              {isLastNameEmpty ? <MdOutlineError className="err_icon" /> : ""}
              {isLastNameEmpty ? (
                <p className="err_message">Last Name cannot be empty</p>
              ) : (
                ""
              )}
            </div>

            <div className="input_control">
              <input
                onMouseDown={handleChange}
                className={isEmail ? "err" : ""}
                type="text"
                placeholder={isEmail ? email : "Email Address"}
                value={email}
                onChange={handleChange}
                name="email"
              />{" "}
              {isEmail ? <MdOutlineError className="err_icon" /> : ""}
              {isEmail ? (
                <p className="err_message">Looks like this is not an email</p>
              ) : (
                ""
              )}
            </div>

            <div className="input_control">
              <input
                onMouseDown={handleChange}
                className={isPasswordEmpty ? "err" : ""}
                type="password"
                placeholder={isPasswordEmpty ? "" : "Password"}
                value={password}
                onChange={handleChange}
                name="password"
                autoComplete="on"
              />{" "}
              {isPasswordEmpty ? <MdOutlineError className="err_icon" /> : ""}
              {isPasswordEmpty ? (
                <p className="err_message">Password cannot be empty</p>
              ) : (
                ""
              )}
            </div>

            <button className="button claim_trail" type="submit">
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
