import { useState } from "react";
import "../style/accordion.css";
import boxImgDesktop from "../assets/accordion-card/images/illustration-box-desktop.svg";
import ArrowDownIcon from "../assets/accordion-card/images/icon-arrow-down.svg";

const accordionData = [
  {
    id: 1,
    question: "How many team members can I invite?",
    answer:
      " You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we'll process your request no questions asked.",
  },
  {
    id: 5,
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

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
            {accordionData.map((each) => (
              <AccordionItem each={each} key={each.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const AccordionItem = ({ each }) => {
  const [isActive, setIsActive] = useState("");

  function toggleAccordion() {
    setIsActive(isActive === "" ? "active" : "");
  }
  return (
    <div className="accordion_item" key={each.id} onClick={toggleAccordion}>
      <div className="accordion_question">
        <p style={{ fontWeight: isActive ? "bold" : "" }}>{each.question}</p>
        <span className="arrowIcon">
          <img src={ArrowDownIcon} alt="" />
        </span>
      </div>
      <div
        className="accordion_answer"
        style={{ display: isActive ? "block" : "none" }}
      >
        <p>{each.answer}</p>
      </div>
      <div className="devider"></div>
    </div>
  );
};

export default AccordionCard;
