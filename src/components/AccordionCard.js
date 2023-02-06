import React from "react";
import "../style/accordion.css";
import womanOnlineImgDesktop from "../assets/accordion-card/images/illustration-woman-online-desktop.svg";
import womanOnlineImgMobile from "../assets/accordion-card/images/illustration-woman-online-mobile.svg";
import boxImgDesktop from "../assets/accordion-card/images/illustration-box-desktop.svg";
import ArrowDownIcon from "../assets/accordion-card/images/icon-arrow-down.svg";
import BgPatternMobile from "../assets/accordion-card/images/bg-pattern-mobile.svg";
import BgPatternDesktop from "../assets/accordion-card/images/bg-pattern-desktop.svg";

function AccordionCard() {
  return (
    <div id="accordion-proj">
      <div className="container">
        <div className="hero-left">
          <div className="hero-img-container "></div>
          <div className="box-img">
            <img src={boxImgDesktop} alt="" />
          </div>
        </div>
        <div className="accordion-section">
          <div>
            <h3>FAQ</h3>
          </div>
          <div className="accordion">
            <div className="accordion_item">
              <div className="accordion_question">
                <p> How many team members can I invite?</p>
                <span className="arrowIcon">
                  <img src={ArrowDownIcon} alt="" />
                </span>
              </div>
              <div className="accordion_answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aut reiciendis
                </p>
              </div>
              <div className="devider"></div>
            </div>
            <div className="accordion_item">
              <div className="accordion_question">
                <p> How many team members can I invite?</p>
                <span className="arrowIcon">
                  <img src={ArrowDownIcon} alt="" />
                </span>
              </div>
              <div className="accordion_answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aut reiciendis
                </p>
              </div>
              <div className="devider"></div>
            </div>
            <div className="accordion_item">
              <div className="accordion_question">
                <p> How many team members can I invite?</p>
                <span className="arrowIcon">
                  <img src={ArrowDownIcon} alt="" />
                </span>
              </div>
              <div className="accordion_answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aut reiciendis
                </p>
              </div>
              <div className="devider"></div>
            </div>
            <div className="accordion_item">
              <div className="accordion_question">
                <p> How many team members can I invite?</p>
                <span className="arrowIcon">
                  <img src={ArrowDownIcon} alt="" />
                </span>
              </div>
              <div className="accordion_answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aut reiciendis
                </p>
              </div>
              <div className="devider"></div>
            </div>
            <div className="accordion_item">
              <div className="accordion_question">
                <p> How many team members can I invite?</p>
                <span className="arrowIcon">
                  <img src={ArrowDownIcon} alt="" />
                </span>
              </div>
              <div className="accordion_answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae aut reiciendis
                </p>
              </div>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionCard;
