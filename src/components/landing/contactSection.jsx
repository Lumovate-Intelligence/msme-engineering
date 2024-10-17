"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import productData from "../../data/products.json";
import SpinLoading from "../layout/loading";

const ContactSection = ({ selectedProduct = "" }) => {
  // State for form fields
  const [product, setProduct] = useState(selectedProduct);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Disable product selection if selectedProduct is passed
  const isProductDisabled = selectedProduct !== "";

  // Form submission handler
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (product && name && email) {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "msmeengineering@yahoo.com",
            cc: email,
            subject: `Enquiry for ${product}`,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p><strong>Product:</strong> ${product}</p>
              </div>
            `,
          }),
        });

        if (response.ok) {
          alert("Message sent successfully!");
          setEmail("");
          setPhone("");
          setMessage("");
          setProduct("");
          setName("");
        } else {
          alert("Failed to send the message.");
        }
      } else {
        alert("Please Select Product, Enter Name and Email is Required.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full flex flex-col items-center justify-center py-8"
    >
      <p className="text-center font-semibold text-4xl">
        Quick <span className="text-yellow-300">Enquiry</span>
      </p>
      <div className="w-[95%] md:w-[85%] border rounded-lg shadow bg-white py-4 px-4 md:px-8 my-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[45%] py-4">
              <img
                src="/contactUs.png" // Replace with actual image path
                alt="Woman with laptop"
                className="w-full h-auto mb-6"
              />
            </div>
            <form
              className="w-full md:w-[45%] flex flex-col justify-center"
              onSubmit={handleSubmit}
            >
              {/* Multi-select for Product */}
              <select
                className="border rounded p-2 w-full mb-4"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                disabled={isProductDisabled}
              >
                <option value="" disabled>
                  Select a product
                </option>
                {productData.map((prod) => (
                  <option key={prod.id} value={prod.name}>
                    {prod.name}
                  </option>
                ))}
              </select>

              {/* Other input fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="border rounded p-2 w-full">
                  <option>India</option>
                </select>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border rounded p-2 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded p-2 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="+91 Phone / Mobile"
                  className="border rounded p-2 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Leave a Message for us"
                className="border rounded p-2 w-full mt-4"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                className="flex justify-center bg-yellow-300 p-3 rounded-lg mt-4 w-full"
                type={loading ? "button" : "submit"}
              >
                {loading ? (
                  <SpinLoading className="w-5 h-5" />
                ) : (
                  <p>Send Message</p>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="space-x-0 space-y-6 md:space-x-6 md:space-y-0 flex flex-col md:flex-row justify-between my-4">
          <a
            href="https://www.google.com/maps/search/?api=1&query=JCCQ%2B8Q9%20Ghaziabad,%20Uttar%20Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2"
          >
            <div className="border rounded-full p-4">
              <FaMapMarkerAlt className="text-2xl text-yellow-300" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-yellow-300 font-semibold">
                Location
              </h4>
              <p>Ghaziabad, Uttar Pradesh</p>
            </div>
          </a>

          <a
            href="tel:+918448640282"
            className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2"
          >
            <div className="border rounded-full p-4">
              <FaPhoneAlt className="text-2xl text-yellow-300" />
            </div>
            <div className="w-full flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-yellow-300 font-semibold">Mobile</h4>
              <p>+91-8448640282</p>
            </div>
          </a>

          <a
            href="mailto:msmeengineering@yahoo.com"
            className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2"
          >
            <div className="border rounded-full p-4">
              <FaEnvelope className="text-2xl text-yellow-300" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-yellow-300 font-semibold">Email</h4>
              <p>msmeengineering@yahoo.com</p>
            </div>
          </a>

          <a
            href="https://www.msmeengineering.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex flex-col items-center space-x-4 border rounded-lg px-4 py-2 space-y-2"
          >
            <div className="border rounded-full p-4">
              <FaGlobe className="text-2xl text-yellow-300" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
              <h4 className="text-xl text-yellow-300 font-semibold">Website</h4>
              <p>www.msmeengineering.com</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
