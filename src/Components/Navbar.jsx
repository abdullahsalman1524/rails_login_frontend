import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-gray-900 text-white font-bold px-10 pt-6 h-16 text-xl justify-between">
      <div>
        <NavLink to="/" className="nav-link">
          Navbar
        </NavLink>
      </div>
      <div className="flex gap-4">
        <div className="nav-item">
          <NavLink to="/signup" className="nav-link">
            Registration
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/logout" className="nav-link">
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
