import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { calculateTotal } from "../redux/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  };
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border p-4 rounded shadow bg-gray-100 flex flex-col"
              >
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.description}</p>
                <p className="font-semibold">
                  {item.price?.currency}
                  {item.price?.discount ?? item.price?.original}
                </p>
                <button
                  onClick={() => removeItem(item)}
                  className="hover:text-2xl  hover:text-green-400"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right text-xl font-bold">
            {total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
