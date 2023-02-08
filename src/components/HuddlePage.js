import React from "react";
import "../style/HuddleLandingPage.css";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/huddle-landing/images/logo.svg";
import mockups from "../assets/huddle-landing/images/illustration-mockups.svg";

function HuddlePage() {
  return (
    <div id="huddle">
      <div className="huddle-container">
        <header>
          <div className="logo-wrapper">
            <img src={logo} alt="huddle logo" />
          </div>
        </header>

        <main>
          <div className="hero-image">
            <img src={mockups} alt="mockups" />
          </div>
          <div className="hero-context-wrapper">
            <div className="hero-context">
              <div className="title heading1">
                <h1>Build The Community</h1>
                <h1>Your Fans Will Love</h1>
              </div>

              <div>
                <p>
                  Huddle re-imagines the way we build communities. You have a
                  voice, but so does your audience. Create connections with your
                  users as you engage in genuine discussion.
                </p>
              </div>
              <button>Register</button>
            </div>
          </div>
        </main>
        <footer>
          <div>
            <ul>
              <li>
                <FaFacebookF size={23} />
              </li>
              <li>
                <FaTwitter size={23} />
              </li>
              <li>
                <FaInstagram size={23} />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HuddlePage;
