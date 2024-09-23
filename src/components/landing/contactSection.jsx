// components/ContactForm.js
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <p className="text-center font-semibold text-4xl">
        Quick <span className="text-blue-500">Enquiry</span>
      </p>
      <div className="w-[85%] border rounded-lg shadow bg-white py-4 px-8 my-8">
        {/* Left side (Image and Enquiry Form) */}
        <div className="flex flex-col items-center">
          <div className="flex justify-between">
            <div className="w-[45%]">
              <img
                src="./contactUs.jpg" // Replace with actual image path
                alt="Woman with laptop"
                className="w-full h-auto mb-6"
              />
            </div>
            <form className="w-[45%] flex flex-col justify-center">
              <input
                type="text"
                placeholder="Product / Service Looking for"
                className="border rounded p-2 w-full mb-4"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="border rounded p-2 w-full">
                  <option>India</option>
                </select>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border rounded p-2 w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded p-2 w-full"
                />
                <input
                  type="tel"
                  placeholder="+91 Phone / Mobile"
                  className="border rounded p-2 w-full"
                />
              </div>
              <textarea
                placeholder="Leave a Message for us"
                className="border rounded p-2 w-full mt-4"
                rows="4"
              ></textarea>
              <button className="bg-blue-500 text-white p-3 rounded-lg mt-4 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="space-x-6 flex justify-between my-4">
          <div className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2">
            <div className="border rounded-full p-4">
              <FaMapMarkerAlt className="text-2xl text-blue-500" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-blue-500 font-semibold">Location</h4>
              <p>Mundka, Delhi</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2">
            <div className="border rounded-full p-4">
              <FaPhoneAlt className="text-2xl text-blue-500" />
            </div>
            <div className="w-full flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-blue-500 font-semibold">Mobile</h4>
              <p>+91-9672768874</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2">
            <div className="border rounded-full p-4">
              <FaEnvelope className="text-2xl text-blue-500" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-blue-500 font-semibold">Email</h4>
              <p>sales@hmeicabletray.com</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2">
            <div className="border rounded-full p-4">
              <FaGlobe className="text-2xl text-blue-500" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-blue-500 font-semibold">Website</h4>
              <p>www.bajiyacabletrays.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
