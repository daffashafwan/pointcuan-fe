/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { useNavigate } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import Swal from "sweetalert2";
import defaultPhoto from "../assets/images/photoProfil/default.jpeg";
import { Link } from "react-router-dom";
import axios from 'axios';
import { read_cookie, delete_cookie } from 'sfcookies';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";

export const UserDashboardNavbarComponent = () => {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(BASE_URL_API + 'users/' + read_cookie('user_cred'), HEADER_API)
      .then(function (response) {
        setData(response.data.data)
        //console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  },[])
  const navigate = useNavigate()
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [akunOpen, setAkunOpen] = useState(false);
  const handleLogout = () =>{
      delete_cookie('user_cred');
      delete_cookie('jwt_user');
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Berhasil Logout',
          showConfirmButton: false,
          timer: 1200
      });
      setTimeout(function(){
          navigate('/');
      }, 1500)
  }
  return (
    <div>
      <nav className="fixed z-20 flex flex-wrap w-screen items-center justify-between px-2 py-1 top-0 bg-white fill-black mb-3 border border-2 border-b-gray-200 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between container px-1 md:px-10">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap  text-black"
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
                <Link to="/dashboard">
                  <p className="px-3 py-2 flex items-center text-sm md:text-lg font-normal leading-snug text-black hover:opacity-75">
                    <i className="fab fa-facebook-square text-lg  leading-lg text-black opacity-75"></i>
                    <span className="ml-2">Beranda</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/riwayattransaksi">
                  <p className="px-3 py-2 flex items-center text-sm md:text-lg font-normal leading-snug text-black hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2">Catatan Transaksi</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/riwayatredeem">
                  <p className="px-3 py-2 flex items-center text-sm md:text-lg font-normal leading-snug text-black hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2">Catatan Redeem</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item" onClick={() => setAkunOpen(!akunOpen)}>
                <p className="px-3 py-2 flex items-center text-sm md:text-lg font-normal leading-snug text-black hover:opacity-75">
                  <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                  <span className="ml-2">Akun</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        {akunOpen ? (
          <div className="container">
            <div className="justify-items-center bg-white border border-2 border-gray-200 fixed   md:right-10 h-16  z-50 grid grid-cols-2 max-w-sm h-40 rounded-xl">
              <button onClick={handleLogout}>
                <div className="w-20 h-20 mx-2 mt-5 mb-2 text-center">
                  <img src={defaultPhoto} className="rounded rounded-full " />
                    <p className="cursor-pointer mt-5 hover:text-gray-400">
                      Log Out
                    </p>
                </div>
              </button>
              <div className="pt-3 pr-5">
                <ul>
                  <li className="text-xl font-bold">{data ? data.name : "loading"}</li>
                  <li className="text-sm">{data ? data.username : "loading"}</li>
                  <li className="text-sm">{data ? data.email : "loading"}</li>
                  <li className="text-sm ">
                    <p>{data ? data.address : "loading"}</p>
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
