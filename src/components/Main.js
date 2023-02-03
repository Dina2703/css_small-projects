import accordionImg from "../assets/accordion-card/design/active-states.jpg";
import comingSoonImg from "../assets/coming-soon/design/desktop-design.jpg";
import priceGridImg from "../assets/price-grid/design/desktop-design.jpg";
import huddleImg from "../assets/huddle-landing/design/active-states.jpg";
import previewCardImg from "../assets/preview-card/design/active-states.jpg";
import signupFormImg from "../assets/sign-up/design/active-states.jpg";
import socialImg from "../assets/social-section/design/desktop-design.jpg";
import statsPreviewImg from "../assets/stats-preview/design/desktop-design.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    img: accordionImg,
    id: 1,
    path: "accordion-card",
  },
  {
    img: comingSoonImg,
    id: 2,
    path: "coming-soon",
  },
  {
    img: priceGridImg,
    id: 3,
    path: "price-grid",
  },
  {
    img: huddleImg,
    id: 4,
    path: "huddle-landing-page",
  },
  {
    img: previewCardImg,
    id: 5,
    path: "preview-card",
  },
  {
    img: socialImg,
    id: 7,
    path: "social-section",
  },
  {
    img: statsPreviewImg,
    id: 8,
    path: "stats-preview-card",
  },
  {
    img: signupFormImg,
    id: 9,
    path: "sign-up-form",
  },
];

function Main() {
  return (
    <div className="app">
      <h2 className="title">Small projects to practice HTML, CSS, JS</h2>
      <ul>
        {images.map((each) => (
          <li key={each.id}>
            <Link to={each.path}>
              <img src={each.img} alt="project name" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
