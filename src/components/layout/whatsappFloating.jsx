// components/WhatsAppButton.js
import { FaWhatsapp } from "react-icons/fa";

const WhatsupFloating = () => {
  return (
    <a
      href="https://wa.me/918798345356?text=Hi"
      className="flex space-x-2 justify-center fixed w-full bottom-0 md:w-fit md:bottom-10 md:right-10 bg-green-500 text-white p-4 md:rounded-full shadow-xl hover:bg-green-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-3xl" />
      <p className="md:hidden text-lg font-semibold">Whatsapp US</p>
    </a>
  );
};

export default WhatsupFloating;
