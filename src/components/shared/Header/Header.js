import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import logo from "../../images/logo.png";
import mobileLogo from "../../images/moble-logo.png";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // mobile menu toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let customClass;
  if (isOpen) {
    customClass = "sm:hidden";
  } else {
    customClass = "sm:hidden cmobile-menu";
  }

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto">
          <div className="">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={toggle}
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={mobileLogo}
                      alt="Workflow"
                    />
                  </NavLink>
                  <NavLink to="/">
                    <img
                      className="hidden lg:block h-8 w-auto mobileLogo"
                      src={logo}
                      alt="Workflow"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/home"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-regular"
                      activeClassName="bg-gray-900"
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="/about"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-regular"
                      activeClassName="bg-gray-900"
                    >
                      About
                    </NavLink>

                    <NavLink
                      to="/all-services"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-regular"
                      activeClassName="bg-gray-900"
                    >
                      Services
                    </NavLink>

                    <NavLink
                      to="/contact-us"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-regular"
                      activeClassName="bg-gray-900"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative">
                  <div>
                    {user.email ? (
                      <button
                        onClick={logOut}
                        type="button"
                        className="loginLogout bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <p>
                          <span className="font-light">
                            {user?.displayName}
                          </span>
                          <span className="font-bold">(Log Out)</span>
                        </p>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="loginLogout bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <Link to="/register">
                          <span className="text-white">Login</span>
                        </Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={customClass} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 relative">
            <NavLink
              to="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
              activeClassName="bg-gray-900"
              onClick={toggle}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
              activeClassName="bg-gray-900"
              onClick={toggle}
            >
              About
            </NavLink>

            <NavLink
              to="/all-services"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
              activeClassName="bg-gray-900"
              onClick={toggle}
            >
              Services
            </NavLink>

            <NavLink
              to="/contact-us"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-regular"
              activeClassName="bg-gray-900"
              onClick={toggle}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
