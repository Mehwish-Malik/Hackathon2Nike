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
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  const addToCart = () => {
    const updatedCart = [...cart, product];
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

    // Navigate to the cart page after showing toast
    setTimeout(() => {
      router.push("/Cart");
    }, 3000); // Matches the toast duration
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
            onClick={addToCart}
            className="bg-black px-6 py-2 rounded hover:bg-slate-600 text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
