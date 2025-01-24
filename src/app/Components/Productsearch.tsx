"use client";

import React, { useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import IProducts from "@/types/type";
import { urlFor } from "@/sanity/lib/image"; // Import Sanity's image builder
import { FaSearch, FaTimes } from "react-icons/fa"; // Import icons from react-icons

const ProductSearch: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Search input state
  const [results, setResults] = useState<IProducts[]>([]); // Search results state
  const [isOpen, setIsOpen] = useState<boolean>(false); // Control for showing/hiding results

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    try {
      const sanityQuery = `*[_type == "product" && productName match $searchQuery + "*"] {
        _id,
        productName,
        price,
        image,
        category
      }`;

      const fetchedResults: IProducts[] = await client.fetch(sanityQuery, {
        searchQuery: value,
      });

      setResults(fetchedResults);
      setIsOpen(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  const handleClose = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative container mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-full py-3 pl-4 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button className="absolute right-4 top-3 text-gray-500" onClick={handleClose}>
            {query ? <FaTimes size={16} /> : <FaSearch size={16} />}
          </button>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="absolute z-10 bg-white shadow-lg rounded-lg w-full max-w-xl mx-auto mt-2">
          <div className="p-4 max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              results.map((product) => (
                <Link key={product._id} href={`/NewProducts/${product._id}`} passHref>
                  <div className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
                        alt={product.productName}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">{product.productName}</h3>
                      <p className="text-xs text-gray-500">{product.category}</p>
                      <p className="text-sm font-bold text-indigo-600">₹{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
