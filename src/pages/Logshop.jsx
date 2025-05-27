import React, { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

export default function Lumpshop() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // renamed

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        const logOnly = data.filter((item) => item.category?.main === "Log");
        console.log("Filtered lump-only products:", logOnly);
        setProduct(logOnly);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []); // fixed dependency array

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar className="border-8 border-amber-500" />

      <main
        className="w-3/4 p-6 bg-white text-black"
        style={{ backgroundColor: "#ffffff" }}
      >
        <h1 className="text-3xl font-bold mb-4">Log Shop</h1>
        <p className="mb-6">Browse our selection of premium Wooden products.</p>

        {loading ? (
          <p>Loading Products...</p>
        ) : product.length === 0 ? (
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
