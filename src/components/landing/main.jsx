import React from "react";
import HeroSection from "./heroSection";
import { NavbarSection } from "../layout/navbar";
import { FooterSection } from "../layout/footer";
import { LatestProducts } from "./latestProducts";
import { ContactBar } from "../layout/contactBar";

const LandingPage = () => {
  return (
    <div>
      <ContactBar />
      <NavbarSection />
      <HeroSection />
      <LatestProducts />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
