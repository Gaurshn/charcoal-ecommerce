import React from "react";
import { useSelector } from "react-redux";

const WishlistItem = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <ul className="space-y-4">
          {wishlistItems.map((item) => (
            <li key={item.id} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>{item.description}</p>
              <p>₹{item.price?.discount ?? item.price?.original ?? 0}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistItem;
