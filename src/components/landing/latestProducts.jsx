"use client";
import { useState } from "react";

// Sample JSON array of products
const products = [
  {
    id: 1,
    name: "Electric Cable Tray",
    imgSrc: "/productImages/electric-cable-tray.jpeg",
    price: "$599",
    rating: 5.0,
    otherDetails: [
      { key: "Battery Life", value: "18 hours" },
      { key: "Water Resistance", value: "50 meters" },
      { key: "Color", value: "Starlight" },
    ],
  },
  {
    id: 2,
    name: "Galvanized Cable Trays",
    imgSrc: "/productImages/galvanized-cable-trays.jpeg",
    price: "$199",
    rating: 4.8,
    otherDetails: [
      { key: "Battery Life", value: "12 hours" },
      { key: "Noise Cancellation", value: "Active" },
      { key: "Color", value: "White" },
    ],
  },
  {
    id: 3,
    name: "Galvanized Cross Cable Tray",
    imgSrc: "/productImages/galvanized-cross-cable-tray.jpeg",
    price: "$349",
    rating: 4.9,
    otherDetails: [
      { key: "Noise Cancellation", value: "Industry Leading" },
      { key: "Battery Life", value: "30 hours" },
      { key: "Color", value: "Black" },
    ],
  },
  {
    id: 4,
    name: "GI Ladder Type Cable Tray",
    imgSrc: "/productImages/gi-ladder-type-cable-tray.jpeg",
    price: "$2499",
    rating: 5.0,
    otherDetails: [
      { key: "Processor", value: "M1 Pro" },
      { key: "Storage", value: "1TB SSD" },
      { key: "Color", value: "Silver" },
    ],
  },
];

export function LatestProducts() {
  return (
    <div className="py-4">
      <p className="text-center font-semibold text-2xl">
        Our <span className="text-blue-500">Products</span>
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-4">
        {products.map((product) => (
          <FlipCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// FlipCard component for individual products
function FlipCard({ product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative max-w-xs w-full cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full transition-transform duration-500 ease-in-out transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="w-full h-full">
          <div className="w-full max-w-sm h-80 devide-y bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {isFlipped ? (
              <div className="w-full h-full flex flex-col justify-between transform rotate-y-180 bg-gray-100 dark:bg-gray-800 p-4">
                <div className="space-y-4">
                  <h5 className="text-xl font-semibold text-blue-500">
                    {product.name}
                  </h5>
                  <ul>
                    {product.otherDetails.map((detail, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-400"
                      >
                        <span className="font-semibold">{detail.key}:</span>{" "}
                        {detail.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-full flex justify-between items-center gap-2">
                    <button className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
                      Enquiry Now
                    </button>
                    <button className="w-full rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-800">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full divide-y flex flex-col justify-between">
                <div className="">
                  <img
                    className="h-60"
                    src={product.imgSrc}
                    alt={product.name}
                  />
                </div>
                <div className="py-4">
                  <h5 className="text-xl font-semibold tracking-tight text-blue-500 text-center">
                    {product.name}
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
