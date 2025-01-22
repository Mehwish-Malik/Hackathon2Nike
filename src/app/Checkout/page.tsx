"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

type IProduct = {
  productName: string;
  price: number;
  quantity: number;
  image: string;
};

const CheckoutPage = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  useEffect(() => {
    // Fetch cart data from localStorage and parse it
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as IProduct[];
        setCart(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart data:", error);
        setCart([]); // Clear cart in case of an error
      }
    }
  }, []);

  const handleCheckout = () => {
    if (!name.trim() || !address.trim()) {
      toast.error("Please provide your name and address before proceeding.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
      return;
    }

    toast.success("Checkout successful! Your order is being processed.", {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
    });

    // Clear the cart after checkout
    localStorage.removeItem("cart");
    setCart([]);
  };

  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-6">Checkout</h2>

      {cart.length > 0 ? (
        <div className="space-y-6">
          <ul className="space-y-4">
            {cart.map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-6">
                  <Image
                    src={urlFor(product.image)?.url() || "/placeholder.png"}
                    alt={product.productName}
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {product.productName}
                    </h3>
                    <p className="text-gray-700">
                      ₹{product.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {product.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <h3 className="text-2xl font-bold">Total: ₹{totalAmount.toFixed(2)}</h3>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <select
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <Link href="/Customer">
            <button
              onClick={handleCheckout}
              className="bg-black text-white p-4 rounded-lg hover:bg-gray-700 transition-colors w-full"
            >
              Confirm and Pay
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">
          Your cart is empty. Please add some products.
        </p>
      )}
    </div>
  );
};

export default CheckoutPage;
