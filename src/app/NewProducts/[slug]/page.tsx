// pages/[slug].tsx or the main page where you fetch product
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import IProducts from "@/types/type";
import ProductDetails from "@/app/Components/ProductDetails";

interface ProductPageProps {
  params: { slug: string };
}

async function getProducts(slug: string): Promise<IProducts | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      description,
      inventory,
      colors,
      status,
      category,
      price,
      image,
      slug {
        current
      }
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProducts(slug);

  if (!product) {
    return (
      <div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
     
      </div>
      
      
      
    );
  }

  return <ProductDetails product={product} />;



  
}



