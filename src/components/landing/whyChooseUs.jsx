import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";

export default function WhyChooseUs() {
  return (
    <div id="whyChooseUs" className="w-full flex justify-center items-center">
      <div className="w-[95%] md:w-[85%] flex flex-col items-center justify-center pt-8">
        <p className="text-center font-semibold text-4xl">
          WHY <span className="text-yellow-300">CHOOSE</span> US
        </p>
        <section className="px-4 w-full bg-white border rounded-lg shadow py-8 mt-8">
          <p className="text-lg text-gray-800 mb-8 text-center">
            We have been offering unparalleled expertise to all our clients, and
            their utmost satisfaction is our ultimate goal.
          </p>

          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 24/7 Availability */}
            <div className="flex flex-col items-center">
              <IoCallOutline className="text-6xl text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            </div>

            {/* Certified Mechanics */}
            <div className="flex flex-col items-center">
              <GrCertificate className="text-6xl text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Certified Mechanics
              </h3>
            </div>

            {/* No Hidden Cost */}
            <div className="flex flex-col items-center">
              <FaRegMoneyBillAlt className="text-6xl text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Hidden Cost</h3>
            </div>

            {/* Affordable Prices */}
            <div className="flex flex-col items-center">
              <MdOutlinePriceChange className="text-6xl text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
