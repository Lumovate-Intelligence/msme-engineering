import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export function ContactBar() {
  return (
    <div className="w-full flex justify-center bg-blue-500 py-2">
      <div className="w-[85%] flex justify-between">
        <div className="flex space-x-4 text-white">
          <a className="flex items-center space-x-2">
            <MdOutlinePhoneInTalk /> <p className="text-sm">+91 8798345356</p>
          </a>
          <a className="flex items-center space-x-2">
            <MdOutlineMailOutline />
            <p className="text-sm">sales@msmeengineering.com</p>
          </a>
        </div>
        <div className="flex space-x-4">
          <button className="border border-white text-white rounded-lg flex items-center space-x-2 px-2 py-1">
            <MdOutlineMailOutline />
            <p className="text-sm">Send Email</p>
          </button>
          <button className="border bg-green-500 text-white rounded-lg flex items-center space-x-2 px-2 py-1">
            <FaWhatsapp />
            <p className="text-sm">Whatsapp</p>
          </button>
        </div>
      </div>
    </div>
  );
}
