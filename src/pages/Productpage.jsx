import React from "react";
import { useParams } from "react-router-dom";
import Products from "../../db.json"; // Replace with actual source

const ProductPage = () => {
  const { id } = useParams();
  const product = Products.products.find((p) => p.id === id);

  if (!product) return <p className="text-white">Product not found</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>Weight: {product.specifications.weight}</p>
      <p>Burn Time: {product.specifications.burnTime}</p>
      <p>Material: {product.specifications.material}</p>
      <p>Smoke Level: {product.specifications.features.smokeLevel}</p>
      <p>Ash Residue: {product.specifications.features.ashResidue}</p>
      {/* Add more specs here */}
    </div>
  );
};

export default ProductPage;
