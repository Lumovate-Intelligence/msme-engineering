import React from "react";
import HeroSection from "./heroSection";
import { NavbarSection } from "../layout/navbar";
import { FooterSection } from "../layout/footer";
import { LatestProducts } from "./latestProducts";
import { ContactBar } from "../layout/contactBar";
import ContactSection from "./contactSection";
import AboutUsSection from "./aboutSection";
import WhatsupFloating from "../layout/whatsappFloating";

const LandingPage = () => {
  return (
    <div>
      <ContactBar />
      <NavbarSection />
      <HeroSection />
      <LatestProducts />
      <AboutUsSection />
      <ContactSection />
      <FooterSection />
      <WhatsupFloating />
    </div>
  );
};

export default LandingPage;
