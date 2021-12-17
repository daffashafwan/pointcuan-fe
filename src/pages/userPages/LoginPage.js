/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo.svg";
import VectorFront from "../../components/VectorFront";
import LoginPageIm from "../../assets/images/loginPage/LoginPage.svg";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      className=" bg-no-repeat bg-cover h-screen w-screen"
      style={{
        backgroundImage: `url(${LoginPageIm})`,
      }}
    >
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 ">
          <VectorFront />
          <div className="w-full aspect-w-0 aspect-h-0 flex justify-center">
            <form className="xl:basis-1/2 basis-full px-5 xl:px-0">
              <div className="flex items-center justify-center inline text-center  mb-10 mt-20 xl:mt-40">
                <img src={logo} className="inline text-center " />
                <h1 className="inline font-sans text-4xl text-center font-medium pl-2 text-orange-500">
                  PointCuan
                </h1>
              </div>
              <div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="Username"
                  className="w-full py-2 px-5 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full py-2 px-5  text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full border  rounded-xl px-5 py-2 bg-orange-500 font-sans text-white font-bold "
                >
                  Masuk
                </button>
              </div>
              <div className="w-full text-center mt-5">
                <a
                  onClick={() => navigate("/forgetpassword")}
                  className="text-blue-600 cursor-pointer"
                >
                  lupa password ?
                </a>
              </div>
              <div className="xl:mt-20 mt-10 text-center">
                <p className="inline ">Belum Punya Akun?</p>
                <a
                  onClick={() => navigate("/register")}
                  className="inline border border-orange-500 rounded-xl px-3 py-1 ml-3 cursor-pointer"
                >
                  Daftar Disini
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
