import React from "react";
import "../style/coming_soon.css";
import heroImg from "../assets/coming-soon/images/illustration-dashboard.png";
import PingLogo from "../assets/coming-soon/images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ComingSoon() {
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
        <div className="notify_wrapper">
          <input type="text" placeholder="Your email address..." />{" "}
          <button>Notify Me</button>
        </div>
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
