import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import headerImg from "../../../images/icons8-aeroplane-50.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img src={headerImg} alt="" />
          <span className="ml-3 text-xl">Travel-Man</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/home"
            className="mr-5 bg-yellow-500 text-black font-bold px-3 hover:bg-gray-300"
            style={{ padding: "2px 10px" }}
          >
            Home
          </NavLink>
          {user.email ? (
            <div>
              <NavLink
                to="/myBookings"
                className="mr-5 bg-yellow-500 text-black font-bold px-3 py-1 hover:bg-gray-300 hover:bg-gray-300"
              >
                My Bookings
              </NavLink>
              <NavLink
                to="/allBookings"
                className="mr-5 bg-yellow-500 text-black font-bold px-3 py-1 hover:bg-gray-300 hover:bg-gray-300"
              >
                Manage Bookings
              </NavLink>
              <NavLink
                to="/addPackage"
                className="mr-5 bg-yellow-500 text-black font-bold px-3 py-1 hover:bg-gray-300 hover:bg-gray-300"
              >
                Add Packages
              </NavLink>
            </div>
          ) : (
            <></>
          )}
          <NavLink
            to="/contact"
            className="mr-5 bg-yellow-500 text-black font-bold px-3 hover:bg-gray-300 hover:bg-gray-300"
            style={{ padding: "2px 10px" }}
          >
            Contact
          </NavLink>
          <NavLink
            to="/review"
            className="mr-5 bg-yellow-500 text-black font-bold px-3 hover:bg-gray-300 hover:bg-gray-300"
            style={{ padding: "2px 10px" }}
          >
            Review
          </NavLink>
        </nav>
        {user.email ? (
          <div>
            <div>
              <p className="text-md font-bold text-yellow-500">
                {user.displayName}
              </p>
            </div>
            <div>
              <button
                onClick={logOut}
                className="inline-flex text-gray-200 items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
              >
                logout
              </button>
            </div>
          </div>
        ) : (
          <button className="inline-flex text-gray-200 items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <NavLink to="/login">Log In</NavLink>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
