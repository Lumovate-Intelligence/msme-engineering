import { FaRegBuilding, FaBalanceScale, FaChartLine } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBuildings } from "react-icons/bs";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

export default function CompanyFactsheet() {
  return (
    <div id="about" className="w-full flex justify-center items-center">
      <div className="w-[95%] md:w-[85%] flex flex-col items-center justify-center pt-8">
        <p className="text-center font-semibold text-4xl mb-8">
          Company <span className="text-yellow-300">FactSheet</span>
        </p>

        {/* Grid layout for company facts */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Nature of Business */}
          <div className="border p-6 rounded-lg flex items-center">
            <LiaGlobeAmericasSolid className="text-4xl text-yellow-300 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-300">
                NATURE OF BUSINESS
              </h3>
              <p>Manufacturer, Supplier, Exporter</p>
            </div>
          </div>

          {/* Card 2: Year of Establishment */}
          <div className="border p-6 rounded-lg flex items-center">
            <FaRegBuilding className="text-4xl text-yellow-300 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-300">
                YEAR OF ESTABLISHMENT
              </h3>
              <p>2017</p>
            </div>
          </div>

          {/* Card 3: Total Number of Employees */}
          <div className="border p-6 rounded-lg flex items-center">
            <HiOutlineUserGroup className="text-4xl text-yellow-300 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-300">
                TOTAL EMPLOYEES
              </h3>
              <p>22 People</p>
            </div>
          </div>

          {/* Card 4: Legal Status of Firm */}
          <div className="border p-6 rounded-lg flex items-center">
            <FaBalanceScale className="text-4xl text-yellow-300 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-300">
                LEGAL STATUS OF FIRM
              </h3>
              <p>Private Limited</p>
            </div>
          </div>

          {/* Card 5: Annual Turnover */}
          <div className="border p-6 rounded-lg flex items-center">
            <FaChartLine className="text-4xl text-yellow-300 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-300">
                ANNUAL TURNOVER
              </h3>
              <p>Rs. 15 Crore</p>
            </div>
          </div>

          {/* Card 6: Infrastructure */}
          <div className="border p-6 rounded-lg flex items-center">
            <BsBuildings className="text-4xl text-yellow-300 mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-300">
                INFRASTRUCTURE
              </h3>
              <p>22000 Sqft (Size of Premises)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
