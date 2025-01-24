"use client";

import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IProducts from "@/types/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ProductDetails({ product }: { product: IProducts }) {
  const [cart, setCart] = useState<IProducts[]>([]);
  const [wishlist, setWishlist] = useState<IProducts[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load cart data from localStorage
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          if (Array.isArray(parsedCart)) {
            setCart(parsedCart);
          } else {
            setCart([]);
          }
        } catch (error) {
          console.error("Failed to parse cart data:", error);
          setCart([]);
        }
      }

      // Load wishlist data from localStorage
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        try {
          const parsedWishlist = JSON.parse(savedWishlist);
          if (Array.isArray(parsedWishlist)) {
            setWishlist(parsedWishlist);
          } else {
            setWishlist([]);
          }
        } catch (error) {
          console.error("Failed to parse wishlist data:", error);
          setWishlist([]);
        }
      }
    }
  }, []);

  const addToCart = (product: IProducts) => {
    const existingProductIndex = cart.findIndex((item) => item.productName === product.productName);

    let updatedCart: IProducts[];

    if (existingProductIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${product.productName} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      router.push("/Cart");
    }, 3000);
  };

  const addToWishlist = (product: IProducts) => {
    const existingProductIndex = wishlist.findIndex((item) => item.productName === product.productName);

    if (existingProductIndex !== -1) {
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-6 shadow-lg rounded-lg">
        {/* Left Side: Product Image */}
        <div className="flex-shrink-0">
          <Image
            src={product.image ? urlFor(product.image).url() : "/placeholder-image.png"}
            alt={product.productName}
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Colors:</span> {product.colors}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Inventory:</span> {product.inventory}
          </p>
          <p className="text-lg font-bold text-gray-800 mb-4">
            Price: ₹{product.price}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-black px-6 py-2 rounded hover:bg-slate-600 text-white mb-4"
          >
            Add to Cart
          </button>
<div>
          {/* Add to Wishlist Button */}
          <button
            onClick={() => addToWishlist(product)}
            className="bg-blue-500 px-6 py-2 rounded space-x-5 hover:bg-gray-600 text-white"
          >
            Add to Wishlist
          </button></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
