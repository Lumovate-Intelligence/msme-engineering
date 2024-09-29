import { Product } from "../../../components/products/product";
import { ContactBar } from "../../../components/layout/contactBar";
import { FooterSection } from "../../../components/layout/footer";
import { NavbarSection } from "../../../components/layout/navbar";
import WhatsupFloating from "../../../components/layout/whatsappFloating";

export default function ProductById() {
  return (
    <div>
      <ContactBar />
      <NavbarSection />
      <Product />
      <FooterSection />
      <WhatsupFloating />
    </div>
  );
}
