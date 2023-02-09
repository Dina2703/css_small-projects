import { useState } from "react";
import "../style/coming_soon.css";
import heroImg from "../assets/coming-soon/images/illustration-dashboard.png";
import PingLogo from "../assets/coming-soon/images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ComingSoon() {
  const [err, setErr] = useState(false);
  const [input, setInput] = useState("");

  // console.log(input);
  function handleChange(e) {
    setInput((prev) => e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      setErr(false);
      console.log("Success");
      setInput("");
    } else {
      setInput("");
      setErr(true);
    }
  }

  return (
    <div id="coming-soon">
      <div className="container">
        <div className="app_name">
          <img src={PingLogo} alt="" />
        </div>
        <div className="ping-title">
          We are launching <span>soon!</span>
        </div>
        <p>Subscribe and get notified</p>
        <form className="notify_wrapper" onSubmit={handleSubmit}>
          <div>
            <input
              className={err ? "err" : ""}
              type="text"
              placeholder={err ? "example@email.com" : "Your email address..."}
              value={input}
              onChange={handleChange}
            />
            <p
              className="err-message"
              style={{ display: err ? "block" : "none" }}
            >
              Please Provide a valid email address
            </p>
          </div>

          <button type="submit">Notify Me</button>
        </form>
        <div className="img_wrapper">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <footer>
        <ul>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
        <p> &copy; Copyright Ping. All rights reserved</p>
      </footer>
    </div>
  );
}

export default ComingSoon;
