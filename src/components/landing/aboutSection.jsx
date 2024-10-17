import { Button } from "flowbite-react";

export default function AboutUsSection() {
  return (
    <div id="about" className="w-full flex justify-center items-center">
      <div className="w-[95%] md:w-[85%] flex flex-col items-center justify-center pt-8">
        <p className="text-center font-semibold text-4xl">
          About <span className="text-yellow-300">US</span>
        </p>
        <section className="bg-white border rounded-lg shadow py-8 mt-8">
          <div className="px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-4 md:gap-0">
              {/* Text Section */}
              <div className="w-full md:w-[45%]">
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
                <Button
                  href="/products"
                  className="w-full mt-6 bg-yellow-300 text-black"
                >
                  Explore Our Products
                </Button>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-[45%]">
                <div className="relative h-full w-full flex items-center">
                  <img
                    src="./aboutUs.png"
                    alt="MSME Engineering Team"
                    layout="fill"
                    objectfit="cover"
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
