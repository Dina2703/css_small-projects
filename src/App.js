import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AccordionCard from "./components/AccordionCard";
import ComingSoon from "./components/ComingSoon";
import Home from "./components/Home";
import HuddlePage from "./components/HuddlePage";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import PreviewCard from "./components/PreviewCard";
import PriceGrid from "./components/PriceGrid";
import SignUpForm from "./components/SignUpForm";
import SocialProofSection from "./components/SocialProofSection";
import StatsPreviewCard from "./components/StatsPreviewCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      {/*when path is "/" you can use just the boolean prop 'index' */}
      <Route index element={<Main />} />
      <Route path="accordion-card" element={<AccordionCard />} />
      <Route path="coming-soon" element={<ComingSoon />} />
      <Route path="huddle-landing-page" element={<HuddlePage />} />
      <Route path="preview-card" element={<PreviewCard />} />
      <Route path="price-grid" element={<PriceGrid />} />
      <Route path="sign-up-form" element={<SignUpForm />} />
      <Route path="social-section" element={<SocialProofSection />} />
      <Route path="stats-preview-card" element={<StatsPreviewCard />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
