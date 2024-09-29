import { ContactBar } from "../../components/layout/contactBar";
import { FooterSection } from "../../components/layout/footer";
import { NavbarSection } from "../../components/layout/navbar";
import WhatsupFloating from "../../components/layout/whatsappFloating";
import { Products } from "../../components/products/products";

export default function AllProducts() {
  return (
    <div>
      <ContactBar />
      <NavbarSection />
      <Products />
      <FooterSection />
      <WhatsupFloating />
    </div>
  );
}
