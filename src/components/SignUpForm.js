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
  const [err, setError] = useState({
    isEmpty: false,
    isEmail: false,
  });

  const { isEmpty, isEmail } = err;

  const { firstName, lastName, email, password } = form;

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.length <= 0 || lastName.length <= 0 || password.length <= 0) {
      setError((prev) => ({
        ...prev,
        isEmpty: true,
      }));
    } else if (
      email.length <= 0 ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    ) {
      setError((prev) => ({
        ...prev,
        isEmail: true,
      }));
      console.log("email is not correct");
    } else {
      console.log(form);
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
    if (isEmail || isEmpty) {
      setError({
        isEmail: false,
        isEmpty: false,
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
          <form className="flex" onSubmit={handleSubmit} autocomplete="off">
            <div className="input_control">
              <input
                onMouseDown={handleChange}
                className={isEmpty ? "err" : ""}
                type="text"
                placeholder={isEmpty ? "" : "First Name"}
                value={firstName}
                onChange={handleChange}
                name="firstName"
              />{" "}
              {isEmpty ? <MdOutlineError className="err_icon" /> : ""}
              {isEmpty ? (
                <p className="err_message">First Name cannot be empty</p>
              ) : (
                ""
              )}
            </div>

            <div className="input_control">
              <input
                onMouseDown={handleChange}
                className={isEmpty ? "err" : ""}
                type="text"
                placeholder={isEmpty ? "" : "Last Name"}
                value={lastName}
                onChange={handleChange}
                name="lastName"
              />{" "}
              {isEmpty ? <MdOutlineError className="err_icon" /> : ""}
              {isEmpty ? (
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
                placeholder={isEmail ? "" : "Email Address"}
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
                className={isEmpty ? "err" : ""}
                type="password"
                placeholder={isEmpty ? "" : "Password"}
                value={password}
                onChange={handleChange}
                name="password"
              />{" "}
              {isEmpty ? <MdOutlineError className="err_icon" /> : ""}
              {isEmpty ? (
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
