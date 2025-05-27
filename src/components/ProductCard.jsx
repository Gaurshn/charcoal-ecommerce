import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Heart } from "lucide-react";
import { addToWishlist } from "../redux/wishlistSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { id, name, price, specifications } = product;
  const hasDiscount = price.discount && price.discount < price.original;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };
  return (
    <div className="bg-black rounded-3xl w-full max-w-xs mx-auto lg:flex lg:flex-col">
      <Link to={`/product/${id}`}>
        <div className="py-2 lg:w-70 lg:ml-3">
          <h1 className="text-base md:text-lg font-semibold text-white font-serif">
            {product.id}
          </h1>
          <h1 className="text-base md:text-lg font-semibold text-white font-serif">
            {name}
          </h1>
          <p className="text-sm md:text-base text-gray-300 font-serif">
            {product.description}
          </p>
          <p className="text-sm text-gray-400 font-serif">
            {product.shipping?.weight}
          </p>
          <div className="mt-3">
            {hasDiscount ? (
              <div className="space-x-2">
                <span className="text-red-600 font-bold text-lg">
                  ₹{price.discount}
                </span>
                <span className="line-through text-gray-500">
                  ₹{price.original}
                </span>
              </div>
            ) : (
              <span className="text-white font-bold text-lg">
                ₹{price.original}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-orange-900 px-4 py-2 md:px-6 md:py-3 rounded-lg text-black font-semibold mt-3 hover:text-white hover:bg-amber-100"
          >
            Add to cart
          </button>

          <Heart
            onClick={handleAddToWishlist}
            fill="red"
            stroke="red"
            className="mt-3 cursor-pointer hover:scale-110 transition-transform duration-200"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
