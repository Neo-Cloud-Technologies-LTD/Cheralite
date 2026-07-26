import { Hero } from "../components/sections/Hero";
import { AboutPreview } from "../components/sections/AboutPreview";
import { ServicesPreview } from "../components/sections/ServicesPreview";
import { Testimonials } from "../components/sections/Testimonials";
import { CTABanner } from "../components/sections/CTABanner";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default HomePage;