import React from "react";
import "../style/social_section.css";
import avatar1 from "../assets/social-section/images/image-colton.jpg";
import avatar2 from "../assets/social-section/images/image-irene.jpg";
import avatar3 from "../assets/social-section/images/image-anne.jpg";
import starIcon from "../assets/social-section/images/icon-star.svg";

function SocialProofSection() {
  return (
    <div id="social-proof-section">
      <div className="grid_container">
        <div className="promo">
          <h3>
            10,000+ of our <br /> users love our <br /> products.
          </h3>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            service
          </p>
        </div>
        <div className="rating">
          <div className="rate_item">
            <div className="stars">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" /> <img src={starIcon} alt="" />
              <img src={starIcon} alt="" /> <img src={starIcon} alt="" />
            </div>
            <span>Rated 5 Stars in Reviews</span>
          </div>
          <div className="rate_item">
            <div className="stars">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" /> <img src={starIcon} alt="" />
              <img src={starIcon} alt="" /> <img src={starIcon} alt="" />
            </div>
            <span>Rated 5 Stars in Guru</span>
          </div>
          <div className="rate_item">
            <div className="stars">
              <img src={starIcon} alt="" />
              <img src={starIcon} alt="" /> <img src={starIcon} alt="" />
              <img src={starIcon} alt="" /> <img src={starIcon} alt="" />
            </div>
            <span>Rated 5 Stars in BestTech</span>
          </div>
        </div>
        <div className="testimonials flex">
          {data.map((custom) => (
            <div key={custom.id} className="testimonial_card flex">
              <div className="flex user">
                <img src={custom.avatar} alt={custom.name} />
                <div className="user_info">
                  <span>{custom.name}</span> <br />
                  <span>Verified Buyer</span>
                </div>
              </div>
              <p>{`" ${custom.review} "`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: "Colton Smith",
    review:
      "We neede the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Irene Roberts",
    review:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Anne Wallace",
    review:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
  },
];

export default SocialProofSection;
