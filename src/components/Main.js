import accordionImg from "../assets/accordion-card/design/active-states.jpg";
import comingSoonImg from "../assets/coming-soon/design/desktop-design.jpg";
import priceGridImg from "../assets/price-grid/design/desktop-design.jpg";
import huddleImg from "../assets/huddle-landing/design/active-states.jpg";
import previewCardImg from "../assets/preview-card/design/active-states.jpg";
import signupFormImg from "../assets/sign-up/design/active-states.jpg";
import socialImg from "../assets/social-section/design/desktop-design.jpg";
import statsPreviewImg from "../assets/stats-preview/design/desktop-design.jpg";
import { Link } from "react-router-dom";
import "../style/main.css";

const images = [
  {
    img: signupFormImg,
    id: 9,
    path: "sign-up-form",
    project: "Intro component with sign-up form",
  },
  {
    img: socialImg,
    id: 7,
    path: "social-section",
    project: "Social proof section",
  },
  {
    img: statsPreviewImg,
    id: 8,
    path: "stats-preview-card",
    project: "Stats preview card component",
  },

  {
    img: accordionImg,
    id: 1,
    path: "accordion-card",
    project: "FAQ accordion card",
  },
  {
    img: comingSoonImg,
    id: 2,
    path: "coming-soon",
    project: "Ping single column coming soon page",
  },
  {
    img: priceGridImg,
    id: 3,
    path: "price-grid",
    project: "Single price grid component",
  },
  {
    img: huddleImg,
    id: 4,
    path: "huddle-landing-page",
    project: "Huddle landing page ",
  },
  {
    img: previewCardImg,
    id: 5,
    path: "preview-card",
    project: "3-column preview card component",
  },
];

function Main() {
  return (
    <section id="main">
      <div className="container">
        <h2 className="title">
          {" "}
          Collection of responsive layouts. Practice HTML, CSS, JS
        </h2>
        <div className="projects-wrapper">
          <ul>
            {images.map((each) => (
              <li key={each.id}>
                <Link to={each.path}>
                  <img src={each.img} alt="project name" />
                </Link>
                <span className="label">{each.project} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Main;
