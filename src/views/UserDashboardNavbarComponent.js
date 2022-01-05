/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export const UserDashboardNavbarComponent = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-white fill-black mb-3 border border-2 border-b-gray-200 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between container px-1 md:px-10">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-black"
              href="#pablo"
            >
              <img src={logo} className=" w-8 xl:w-10 mr-3 inline" />
              Point Cuan
            </a>
            <div
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu className="mt-3" />
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg font-normal leading-snug text-black hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-facebook-square text-lg  leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Beranda</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg font-normal leading-snug text-black hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Catatan Transaksi</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-sm md:text-lg font-normal leading-snug text-black hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Akun</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserDashboardNavbarComponent;
