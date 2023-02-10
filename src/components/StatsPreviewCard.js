import React from "react";
import "../style/stats_preview.css";

function StatsPreviewCard() {
  return (
    <div id="stats_preview">
      <div className="container flex">
        <div className="hero_img_wrapper"></div>

        <div className="context_container flex">
          <h2>
            Get <span>insights</span> that help your business grow.
          </h2>
          <p>
            Discover the benefits of data analitics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex stats">
            <div className="stat">
              <span>10k+</span>
              <span>companies</span>
            </div>
            <div className="stat">
              <span>314 </span>
              <span>templates</span>
            </div>
            <div className="stat">
              <span>12M+</span>
              <span>queries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsPreviewCard;
