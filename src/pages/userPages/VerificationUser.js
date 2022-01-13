/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo.svg";
import verifiy from "../../assets/images/verify.png";
import VectorFront from "../../components/VectorFront";
import { useNavigate } from "react-router-dom";

function VerificationSuccess() {
    const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 ">
        <VectorFront />
        <div className="w-full aspect-w-0 aspect-h-0 flex justify-center bg-orange-100 h-screen">
          <form className="xl:basis-1/2 basis-full px-5 xl:px-0">
            <div className="flex items-center justify-center inline text-center  mb-3 mt-20 xl:mt-40">
              <img src={logo} className="inline text-center " />
              <h1 className="inline font-sans text-4xl text-center font-medium pl-2 text-orange-500">
                PointCuan
              </h1>
            </div>
            <div className="flex items-center justify-center inline text-center mb-10">
            <img src={verifiy} className="inline text-center object-scale-down h-20 w-20 " />
            </div>
            <div className="w-full text-center text-2xl font-medium">
              <p>Verifikasi berhasil</p>
            </div>
            <div className="w-full text-center mb-6">
              <p>Viola! Akun anda telah berhasil terverifikasi</p>
            </div>
            <div>
              <button
                onClick={() => navigate("/")}
                type="submit"
                className="w-full border  rounded-xl px-5 py-2 bg-orange-500 font-sans text-white font-bold "
              >
                Login disini!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerificationSuccess;
