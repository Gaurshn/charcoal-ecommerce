import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sticky top-0 z-100 h-30 bg-gray-500 text-2xl font-[var(--font-luckiest)] text-orange-500">
      <nav className="space-x-4 text-lg">
        <Link to="/" className="text-white hover:text-orange-500">
          <h1> Moz Charcoa</h1>
        </Link>

        <Link to="/lumpshop" className="text-white hover:text-orange-500">
          LumpShop
        </Link>
        <Link to="/logshop" className="text-white hover:text-orange-500">
          LogShop
        </Link>
        <Link to="/cart" className="text-white hover:text-orange-500">
          Cart
        </Link>
        <Link to="/wishlist" className="text-white hover:text-orange-500">
          Wishlist
        </Link>
      </nav>
    </div>
  );
}
