/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import defaultPhoto from "../assets/images/photoProfil/default.jpeg";

export const UserDashboardNavbarComponent = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [akunOpen, setAkunOpen] = useState(false);

  return (
    <div>
      <nav className="fixed z-50 flex flex-wrap w-screen items-center justify-between px-2 py-1 top-0 bg-white fill-black mb-3 border border-2 border-b-gray-200 ">
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
              <li className="nav-item" onClick={() => setAkunOpen(!akunOpen)}>
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
        {akunOpen ? (
          <div className="container">
            <div className="justify-items-center bg-white border border-2 border-gray-200 fixed   md:right-10 h-16  z-50 grid grid-cols-2 max-w-sm h-40 rounded-xl">
              <div>
                <div className="w-20 h-20 mx-2 mt-5 mb-2 text-center">
                  <img src={defaultPhoto} className="rounded rounded-full " />
                  <p>Log Out</p>
                </div>
              </div>
              <div className="pt-3 pr-5">
                <ul>
                  <li className="text-xl font-bold">Jurgen Klop</li>
                  <li className="text-sm">jurgenKlop123</li>
                  <li className="text-sm">081245456767</li>
                  <li className="text-sm ">
                    <p>JL.Ahmad Yani No.5 Jakarta Barat </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </nav>
      {/* {akunOpen ? (
        <div className="container">
          <div className="justify-items-center bg-white border border-2 border-gray-200 fixed top-44 md:top-20 right-0 md:right-10 h-16  z-50 grid grid-cols-2 max-w-sm h-40 rounded-xl">
            <div>
              <div className="w-20 h-20 mx-2 mt-5 mb-2 text-center">
                <img src={defaultPhoto} className="rounded rounded-full " />
                <p>Log Out</p>
              </div>
            </div>
            <div className="pt-3 pr-5">
              <ul>
                <li className="text-xl font-bold">Jurgen Klop</li>
                <li className="text-sm">jurgenKlop123</li>
                <li className="text-sm">081245456767</li>
                <li className="text-sm ">
                  <p>JL.Ahmad Yani No.5 Jakarta Barat </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <span></span>
      )} */}
    </div>
  );
};

export default UserDashboardNavbarComponent;
