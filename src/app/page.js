import DetailsSection from "./components/DetailsSection/DetailsSection";
import HeroArea from "./components/HeroArea/HeroArea";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Services from "./components/Services/Services";
import TeamMembers from "./components/TeamMembers/TeamMembers";
import Testimonials from "./components/Testimonials/Testimonials";

const Page = () => {
  return (
    <div>
      <HeroArea />
      <Services />
      <DetailsSection />
      <PortfolioSection />
      <HowWeWork />
      <Testimonials />
      <TeamMembers />
    </div>
  );
};

export default Page;
