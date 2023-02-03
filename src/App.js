import AccordionCard from "./components/AccordionCard";
import ComingSoon from "./components/ComingSoon";
import HuddlePage from "./components/HuddlePage";
import PreviewCard from "./components/PreviewCard";
import PriceGrid from "./components/PriceGrid";
import SignUpForm from "./components/SignUpForm";
import SocialProofSection from "./components/SocialProofSection";
import StatsPreviewCard from "./components/StatsPreviewCard";

function App() {
  return (
    <div className="app">
      <h2>Small projects to practice HTML, CSS, JS</h2>
      <ul>
        <li>
          <HuddlePage />
        </li>
        <li>
          <ComingSoon />
        </li>
        <li>
          <PriceGrid />
        </li>
        <li>
          <SignUpForm />
        </li>
        <li>
          <AccordionCard />
        </li>
        <li>
          <PreviewCard />
        </li>
        <li>
          <SocialProofSection />
        </li>
        <li>
          <StatsPreviewCard />
        </li>
      </ul>
    </div>
  );
}

export default App;
