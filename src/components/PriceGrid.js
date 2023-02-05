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
            <p>
              <span>$29</span> <span>per month</span>
            </p>
            <p className="access">Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
          <div className="why-us">
            <h4>Why Us </h4>
            <ul>
              <li>Tutorails by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHUb repos</li>
              <li>Community form</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceGrid;
