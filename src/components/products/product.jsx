"use client";
import { useEffect, useState } from "react";
import productData from "../../data/products.json";
import { useParams } from "next/navigation";
import ContactSection from "../landing/contactSection";

export function Product() {
  const params = useParams();
  const productSlug = params.product;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by slug
    const foundProduct = productData.find(
      (product) => product.slug === productSlug
    );
    setProduct(foundProduct);
  }, [productSlug]);

  if (!product) {
    return null;
    // <p className="text-center font-bold text-2xl text-gray-500 my-10 mx-4">
    //   Product not found
    // </p>
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[95%] md:w-[85%] flex flex-wrap justify-between gap-8 mt-8">
        <div className="w-full flex flex-col md:flex-row justify-between shadow border rounded-lg">
          <div className="w-full">
            <img
              className="h-full w-full object-cover rounded-lg p-4"
              src={product.imgSrc}
              alt={product.name}
            />
          </div>
          <div className="md:border-l w-full h-full dark:bg-gray-800 p-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h5 className="text-2xl font-semibold text-yellow-300">
                {product.name}
              </h5>
              <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
                <tbody>
                  {product.otherDetails.map((detail, index) => (
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
                <a
                  href="#contact"
                  className="text-center w-full rounded-lg bg-yellow-300 px-4 py-2 text-sm font-medium hover:bg-yellow-400"
                >
                  Enquiry Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection selectedProduct={product.name} />
    </div>
  );
}
