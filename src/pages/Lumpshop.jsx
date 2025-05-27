import { useLoaderData } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

export async function lumpShoploader() {
  const res = await fetch("http://localhost:8000/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.filter((item) => item.category?.main === "Lump");
}

export default function Lumpshop() {
  const product = useLoaderData(); // fixed dependency array

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar className="border-8 border-black" />

      <main className="w-3/4 p-6 bg-white text-black">
        <h1 className="text-3xl font-bold mb-4">Lump Shop</h1>
        <p className="mb-6">
          Browse our selection of premium lump charcoal products.
        </p>
        {product.length === 0 ? (
          <p>No lump products found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.map((product) => (
              <div key={product.id} className="border p-4 rounded shadow">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
