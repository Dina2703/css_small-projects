import React from "react";
import "../style/preview_card.css";
import sedanImg from "../assets/preview-card/images/icon-sedans.svg";
import suvsImg from "../assets/preview-card/images/icon-suvs.svg";
import luxuryImg from "../assets/preview-card/images/icon-luxury.svg";

function PreviewCard() {
  return (
    <section id="preview-card">
      <div className="container">
        <div className="grid-container">
          <div className="item left">
            <div className="img-wrapper">
              <img src={sedanImg} alt="" />
            </div>
            <div>
              <h3>SEDANS</h3>
            </div>
            <div className="">
              <p>
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or an your next road trip
              </p>
            </div>
            <div>
              <button>Learn More</button>
            </div>
          </div>
          <div className="item middle">
            <div className="img-wrapper">
              <img src={suvsImg} alt="" />
            </div>
            <div>
              <h3>SEDANS</h3>
            </div>
            <div>
              <p>
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
            </div>
            <div>
              <button>Learn More</button>
            </div>
          </div>
          <div className="item right">
            <div className="img-wrapper">
              <img src={luxuryImg} alt="" />
            </div>
            <div>
              <h3>LUXURY</h3>
            </div>
            <div className="">
              <p>
                Cruise in the best car brands without the bloated prices. Enjoy
                the enhanced comfort of a luxury rental and arrive in style.
              </p>
            </div>
            <div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewCard;
