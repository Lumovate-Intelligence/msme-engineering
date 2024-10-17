import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function ContactBar() {
  return (
    <div className="w-full flex justify-center bg-yellow-300 py-2">
      <div className="w-[95%] md:w-[85%] space-y-2 md:space-y-0 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-fit flex space-x-4 justify-between">
          <a href="tel:+918448640282" className="flex items-center space-x-2">
            <MdOutlinePhoneInTalk />
            <p className="text-sm">+91 8448640282</p>
          </a>
          <a
            href="mailto:msmeengineering@yahoo.com"
            className="flex items-center space-x-2"
          >
            <MdOutlineMailOutline />
            <p className="text-sm">msmeengineering@yahoo.com</p>
          </a>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/#contact"
            className="justify-center w-full md:w-fit border border-black rounded-lg flex items-center space-x-2 px-2 py-1"
          >
            <MdOutlineMailOutline />
            <p className="text-sm">Send Email</p>
          </Link>
          <a
            href="https://wa.me/918448640282?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-center w-full md:w-fit border bg-green-500 text-white rounded-lg flex items-center space-x-2 px-2 py-1"
          >
            <FaWhatsapp />
            <p className="text-sm">Whatsapp</p>
          </a>
        </div>
      </div>
    </div>
  );
}
