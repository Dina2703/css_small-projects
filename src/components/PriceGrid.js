import React from "react";
import "../style/price_grid.css";

function PriceGrid() {
  return (
    <section id="price-grid">
      <div className="container">
        <div className="main-desc">
          <h3>Join our community</h3>
          <p>30-day, hassle-free money back guarantee</p>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. <br /> Perfect for any developers who are serious about
            honing theri skills.
          </p>
        </div>
        <div className="grid-container">
          <div className="subscription">
            <h4>Monthly Subscription</h4>
            <p>$29 per month</p>
            <p>full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className="why-us">
            <h4>Why Us </h4>
            <p>
              Tutorails by industry experts Peer & expert code review Coding
              exercises Access to our GitHUb repos Community decks New videos
              every week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceGrid;
