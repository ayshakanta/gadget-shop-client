import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <div className="navbar bg-slate-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <h1 className="btn btn-ghost text-xl">Gadget Shop</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <UserDropdown></UserDropdown>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link to="/login">
                <button className="btn bg-gray-400 text-black rounded-md border border-black">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn bg-black text-white rounded-md border border-black">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
