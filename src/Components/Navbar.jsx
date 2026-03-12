import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

  const links = (
    <>
      <li>
        <NavLink 
          to="/"
          className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary"}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/products"
          className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary"}
        >
          Products
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/whistList"
          className={({isActive}) => isActive ? "text-primary font-bold" : "hover:text-primary"}
        >
          WishList
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-6 mt-4">
      
      {/* left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <h1 className="text-2xl font-bold text-primary">
          🏠 Decor
        </h1>
      </div>

      {/* center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-lg">
          {links}
        </ul>
      </div>

      {/* right */}
      <div className="navbar-end">
        <button className="btn btn-primary rounded-full px-6">
          LogOut
        </button>
      </div>

    </div>
  );
};

export default Navbar;