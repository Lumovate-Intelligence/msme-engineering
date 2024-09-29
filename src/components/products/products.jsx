"use client";
import { useState } from "react";
import productData from "../../data/products.json";
import Link from "next/link";

export function Products() {
  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <p className="text-center font-semibold text-4xl mt-8">
        Our <span className="text-blue-500">Products</span>
      </p>

      <div className="w-[95%] md:w-[85%] flex flex-wrap justify-between gap-8 mt-8">
        {productData.map((product) => (
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
      className="relative md:max-w-sm w-full h-80 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <div className="">
              <img
                className="h-60 w-full object-cover rounded-lg p-4"
                src={product.imgSrc}
                alt={product.name}
              />
            </div>
            <div className="py-4 border-t">
              <h5 className="text-xl font-semibold tracking-tight text-blue-500 text-center">
                {product.name}
              </h5>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full border dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col justify-between">
            <div className="space-y-4">
              <h5 className="text-xl font-semibold text-blue-500">
                {product.name}
              </h5>
              <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
                <tbody>
                  {product.otherDetails?.slice(0, 4)?.map((detail, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 dark:border-gray-700"
                    >
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-400 font-semibold border-r border-gray-300 dark:border-gray-700">
                        {detail.key}
                      </td>
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-400">
                        {detail.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="w-full flex justify-between items-center gap-2">
                <Link
                  href={"/products/" + product.slug + "#contact"}
                  className="text-center w-full rounded-lg border-blue-500 px-4 py-2 text-sm font-medium text-blue-500 border"
                >
                  Enquiry Now
                </Link>
                <Link
                  href={"/products/" + product.slug}
                  className="w-full rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-800 text-center"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
