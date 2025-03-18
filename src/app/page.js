import DetailsSection from "./components/DetailsSection/DetailsSection";
import HeroArea from "./components/HeroArea/HeroArea";
import HowWeWork from "./components/HowWeWork/HowWeWork";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Services from "./components/Services/Services";

const Page = () => {
  return (
    <div>
      <HeroArea />
      <Services />
      <DetailsSection />
      <PortfolioSection />
      <HowWeWork />
    </div>
  );
};

export default Page;
