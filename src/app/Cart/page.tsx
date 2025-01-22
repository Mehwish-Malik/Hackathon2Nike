"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Assuming this is where the image URL is handled
import Link from "next/link";
import IProducts from "@/types/type";

const CartPage = () => {
  const [cart, setCart] = useState<IProducts[]>([]);

  useEffect(() => {
    // Load cart data from localStorage when component mounts
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Increase quantity of an item
  const increaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity && !isNaN(updatedCart[index].quantity)) {
      updatedCart[index].quantity += 1;
    } else {
      updatedCart[index].quantity = 1; // Ensure the quantity is a valid number
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease quantity of an item
  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Remove item from the cart
  const removeItem = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success("Item removed from cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
      {cart.length > 0 ? (
        <div className="space-y-6">
          <ul className="space-y-4">
            {cart.map((product, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-6">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{product.productName}</h3>
                    <p className="text-gray-700">{product.price.toFixed(2)} INR</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Quantity Controls */}
                  <button
                    onClick={() => decreaseQuantity(index)}
                    className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg">{product.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(index)}
                    className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-between items-center">
            <h3 className="text-2xl font-bold">
              Total: ₹{cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0).toFixed(2)}
            </h3>
            <Link href ="/Checkout">
            <button className="bg-black text-white p-4 rounded-lg hover:bg-slate-500 transition-colors">
              Checkout
            </button></Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Your Cart is empty. Please add your products.</p>
      )}
    </div>
  );
};

export default CartPage;
