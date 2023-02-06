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
          <div className="hero-img-container"></div>
          {/* <div className="box-img">
            <img src={boxImgDesktop} alt="" />
          </div> */}
        </div>
        <div className="accordion-section">
          <div>FAG</div>
          <div>accordion</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionCard;
