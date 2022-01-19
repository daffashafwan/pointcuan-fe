/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import UserFooterComponent from "../../views/UserFooterComponent";

function FaqPage() {
  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <div className="w-full aspect-w-0 aspect-h-0 flex justify-center bg-blue-100 h-40">
      <div className="flex items-center justify-center inline text-center  mb-3 mt-20 xl:mt-40">
              <img src={logo} className="inline text-center " />
            </div>
            <div className="flex items-center justify-center inline text-center  mb-3 mt-20 xl:mt-40">
                <button
                  type="submit"
                  className="w-full border rounded-xl px-5 py-2 bg-orange-500 mt-5 ml-20 font-sans text-white font-bold ">
                  Daftar
                </button>
              </div>
      </div>
      <div className="w-full text-center text-4xl font-bold mb-10 mt-6">
              <p>FAQ</p>
            </div>
      <div class="grid grid-rows-5 grid-flow-col gap-2">
  <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
            <div className="w-full text-center mb-6">
                <div className="font-medium">
                    <h1>1. Apa itu Pointcuan</h1>
                </div>
                <p>PointCuan adalah sebuah platform yang digunakan untuk manusia</p>
            </div>
</div>     
<div>
        <UserFooterComponent />
      </div>
    </div>
    
  );
}

export default FaqPage;
