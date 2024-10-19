import { ContactBar } from "../../components/layout/contactBar";
import { NavbarSection } from "../../components/layout/navbar";
import { FooterSection } from "../../components/layout/footer";
import WhatsupFloating from "../../components/layout/whatsappFloating";
import ContactSection from "../../components/landing/contactSection";

export default function contactUs() {
  return (
    <div>
      <ContactBar />
      <NavbarSection />
      <ContactSection />
      <FooterSection />
      <WhatsupFloating />
    </div>
  );
}
