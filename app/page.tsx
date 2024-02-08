import { AboutMeSection } from "./components/sections/About";
import { AppsSection } from "./components/sections/Apps";
import { ShareSection } from "./components/sections/Share";
import { WelcomeSection } from "./components/sections/Welcome";

export default function Home() {
  return (
    <div className="px-6 md:px-8 overflow-hidden">
      <WelcomeSection />
      <AboutMeSection />
      <AppsSection />
      <ShareSection />
    </div>
  );
}
