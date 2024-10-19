import { ContactBar } from "../../components/layout/contactBar";
import { NavbarSection } from "../../components/layout/navbar";
import { FooterSection } from "../../components/layout/footer";
import WhatsupFloating from "../../components/layout/whatsappFloating";
import AboutUsSection from "../../components/landing/aboutSection";

export default function AboutUs() {
  return (
    <div>
      <ContactBar />
      <NavbarSection />
      <AboutUsSection />
      <FooterSection />
      <WhatsupFloating />
    </div>
  );
}
