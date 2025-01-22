"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import IProducts from "@/types/type";

const client = createClient({
  projectId: "nx37aj9v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-18",
});

const builder = imageUrlBuilder(client);

function urlFor(source: string | null) {
  return source ? builder.image(source).url() : "/placeholder-image.png";
}

const ProductCards = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        productName,
        inventory,
        category,
        description,
        colors,
        image,
        status,
        price,
        slug {
        current
        }
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error in fetching Products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden">
              <Image
                src={urlFor(product.image) || "/placeholder-image.png"}
                alt={product.productName || "Product Image"}
                width={300}
                height={300}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <Link href={`/NewProducts/${product.slug?.current || ""}`}>
                <button className="absolute inset-0"></button>
              </Link>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
              <p className="text-gray-600 mb-4">
                {product.description?.slice(0, 50)}...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">
                  Color: {product.colors }
                  <br />
                  Status: {product.status }
                  <br />
                  Price: ₹{product.price }
                </span>
                <Link href={`/NewProducts/${product.slug?.current}`}>
                  <button className="bg-black hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
