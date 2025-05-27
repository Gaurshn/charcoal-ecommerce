import React from "react";

const Sidebar = ({ className }) => {
  return (
    <div className={`w-1/4 p-4 bg-white ${className} `}>
      <h2 className="text-xl font-bold mb-4 text-black">Filters</h2>
      <ul className="space-y-2">
        <li>
          <button className="hover:text-orange-400 text-black ">
            All Products
          </button>
        </li>
        <li>
          <button className="hover:text-orange-400 text-black">Hardwood</button>
        </li>
        <li>
          <button className="hover:text-orange-400 text-black">Natural</button>
        </li>
        <li>
          <button className="hover:text-orange-400 text-black">
            Restaurant Grade
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
