// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-pink-100 px-8 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-2xl font-extrabold capitalize">
        code<span className="text-4xl text-yellow-600">vector</span>
      </h1>

      <ul className="flex items-center gap-6 capitalize">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium"
                : "text-gray-600 px-4 py-2 rounded-lg hover:bg-pink-200 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product-list"
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium"
                : "text-gray-600 px-4 py-2 rounded-lg hover:bg-pink-200 transition"
            }
          >
            Product-list
          </NavLink>
        </li>
        <li>
       
        </li>
      </ul>
    </div>
  );
};

export default Navbar;