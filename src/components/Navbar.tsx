import { NavLink } from "react-router-dom";

import CartIcon from "../assets/icons/cart.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-md sticky top-0 px-12 h-16">
        {/* ----- Navbar ----- */}
        <nav className=" flex justify-start items-center gap-4 h-full">
          <NavLink to={"/"}>
            <div className="text-gray-700 hover:text-blue-600 font-medium text-lg">
              Home
            </div>
          </NavLink>
          <NavLink to={"/store"}>
            <div className="text-gray-700 hover:text-blue-600 font-medium text-lg">
              Store
            </div>
          </NavLink>
          <NavLink to={"/about"}>
            <div className="text-gray-700 hover:text-blue-600 font-medium text-lg">
              About
            </div>
          </NavLink>
        </nav>

        {/* ----- Cart | Counter ----- */}
        <div className="relative">
          <button className="rounded-full h-10 w-10 px-1.5 py-0 bg-white hover:bg-slate-300 transition-all border border-black">
            <img className="h-6" src={CartIcon} alt="cart" />
          </button>

          <div className="absolute flex justify-center items-center h-6 w-6 bg-red-700 text-white rounded-full text-sm -bottom-2.5 left-7">
            0
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
