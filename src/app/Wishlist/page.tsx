"use client";

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IProducts from "@/types/type";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaHeart,  } from "react-icons/fa"; // Import heart icons

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<IProducts[]>([]);

  // Load wishlist data from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Add product to wishlist
  const addToWishlist = (product: IProducts) => {
    // Check if the product already exists in wishlist
    const existingProduct = wishlist.find(item => item._id === product._id);
    if (existingProduct) {
      toast.info("This item is already in your wishlist!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const updatedWishlist = [...wishlist, product];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast.success(`${product.productName} added to wishlist!`, {
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

  // Remove item from wishlist
  const removeFromWishlist = (index: number) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast.success("Item removed from wishlist", {
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
      <h2 className="text-3xl font-bold text-center mb-6">Your Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="space-y-6">
          <ul className="space-y-4">
            {wishlist.map((product, index) => (
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
                    <p className="text-gray-700">₹{product.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="text-right flex items-center space-x-4">
                  {/* Heart Icon Button for Adding to Wishlist */}
                  <button
                    onClick={() => addToWishlist(product)}
                    className="p-3 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
                  >
                    <FaHeart />
                  </button>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(index)}
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Your Wishlist is empty. Add some products.</p>
      )}
    </div>
  );
};

export default WishlistPage;
