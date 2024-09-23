import { Button } from "flowbite-react";

export default function AboutUsSection() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[85%] flex flex-col items-center justify-center pt-8">
        <p className="text-center font-semibold text-4xl">
          About <span className="text-blue-500">US</span>
        </p>
        <section className="bg-white border rounded-lg shadow py-16 mt-8">
          <div className="px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Text Section */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  MSME Engineering
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  MSME Engineering, an ISO 9001:2008 certified company, was
                  founded in 2019 and is located in Noida, UP. With more than 4
                  years of experience, we are now one of the top manufacturers
                  and suppliers in the region, specializing in cable tray
                  systems.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  As industry leaders, MSME Engineering is known for providing
                  innovative, eco-friendly products and cutting-edge
                  technologies. We focus on customer support, sustainability,
                  and delivering highly engineered cabling solutions.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Our products, including wire mesh cable trays, cable ladders,
                  and perforated products, are ideal for various industries such
                  as data centers, wind towers, and solar power systems.
                </p>
                <Button href="/contact" className="w-[90%] mt-6 bg-blue-500">
                  Explore Our Products
                </Button>
              </div>

              {/* Image Section */}
              <div className="">
                <div className="relative h-full w-full">
                  <img
                    src="./aboutUs.jpg"
                    alt="MSME Engineering Team"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
