"use client";

import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Assuming this is where the image URL is handled
import IProducts from "@/types/type";

const ThankYouPage = () => {
  const [cart, setCart] = useState<IProducts[]>([]);
  const [orderNumber, setOrderNumber] = useState<string>("");

  useEffect(() => {
    // Get cart data from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    // Generate a random order number
    setOrderNumber(`ORD-${Math.floor(Math.random() * 1000000)}`);
    
    // Clear the cart after displaying the thank you page
    localStorage.removeItem("cart");
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce((total, product) => {
    const quantity = product.quantity || 1; // Ensure quantity defaults to 1 if undefined
    return total + product.price * quantity;
  }, 0).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-6">Thank You for Your Order!</h2>
      <p className="text-xl text-center mb-6">Your order is being processed, and you will receive an email confirmation shortly.</p>

      {/* Order Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        <p className="mb-4">Order Number: <span className="font-bold">{orderNumber}</span></p>

        <ul className="space-y-4">
          {cart.map((product: IProducts, index: number) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 p-4 rounded-lg"
            >
              <div className="flex items-center space-x-6">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.productName}</h3>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                  <p className="text-gray-700">₹{(product.price * (product.quantity || 1)).toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button
          onClick={() => window.location.href = "/"} // Redirect to home
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
