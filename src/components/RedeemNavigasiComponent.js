import React from "react";
import pulsa from "../assets/images/reedemPointCategory/pulsa.svg";
import data from "../assets/images/reedemPointCategory/paket.svg";
import emoney from "../assets/images/reedemPointCategory/emoney.svg";
import pln from "../assets/images/reedemPointCategory/pln.svg";
import cashout from "../assets/images/reedemPointCategory/cashout.svg";
import lainnya from "../assets/images/reedemPointCategory/lainnya.svg";
import { Link } from "react-router-dom";

function RedeemNavigasiComponent({ category }) {
  return (
    <div className="grid grid-cols-6 w-full md:w-auto md:grid-cols-2 justify-items-center gap-x-0 md:mx-10  my-1  md:my-0 md:py-10 border border-gray-300 md:border-none md:shadow-xl rounded-lg md:rounded-2xl md:h-fit">
      <Link to="/redeem/pulsa">
        <div
          className={
            "my-2 rounded-full md:rounded-2xl md:px-3 md:py-2  hover:border-orange-500 hover:border" +
            (category == "pulsa"
              ? "text-black bg-orange-200 border-2 md:border border-orange-500"
              : "")
          }
        >
          <div className=" md:my-3 md:mx-3 w-8 md:w-10  basis-1/6  grid grid-cols-1 justify-items-center">
            <img src={pulsa} className="fill-orange-500" />
            <p className="hidden md:block md:mt-2 text-center ">Pulsa</p>
          </div>
        </div>
      </Link>
      <Link to="/redeem/data">
        <div
          className={
            "my-2 rounded-full md:rounded-2xl md:px-3 md:py-2  hover:border-orange-500 hover:border" +
            (category == "data"
              ? "text-black bg-orange-200 border-2 md:border border-orange-500"
              : "")
          }
        >
          <div className=" md:my-3 md:mx-3 w-8 md:w-10  basis-1/6  grid grid-cols-1 justify-items-center">
            <img src={data} className=" " />
            <p className="hidden md:block md:mt-2 text-center">Data</p>
          </div>
        </div>
      </Link>
      <Link to="/redeem/emoney">
        <div
          className={
            "my-2 rounded-full md:rounded-2xl md:px-3 md:py-2  hover:border-orange-500 hover:border" +
            (category == "emoney"
              ? "text-black bg-orange-200 border-2 md:border border-orange-500"
              : "")
          }
        >
          <div className=" md:my-3 md:mx-3 w-8 md:w-10  basis-1/6  grid grid-cols-1 justify-items-center">
            <img src={emoney} className=" " />
            <p className="hidden md:block md:mt-2 text-center ">E~Money</p>
          </div>
        </div>
      </Link>
      <Link to="/redeem/pln">
        <div
          className={
            "my-2 rounded-full md:rounded-2xl md:px-3 md:py-2  hover:border-orange-500 hover:border" +
            (category == "pln"
              ? "text-black bg-orange-200 border-2 md:border border-orange-500"
              : "")
          }
        >
          <div className=" md:my-3 md:mx-3 w-8 md:w-10  basis-1/6  grid grid-cols-1 justify-items-center ">
            <img src={pln} className=" " />
            <p className="hidden md:block md:mt-2 text-center ">PLN</p>
          </div>
        </div>
      </Link>
      <Link to="/redeem/cashout">
        <div
          className={
            "my-2 rounded-full md:rounded-2xl md:px-3 md:py-2  hover:border-orange-500 hover:border" +
            (category == "cashout"
              ? "text-black bg-orange-200 border-2 md:border border-orange-500"
              : "")
          }
        >
          <div className=" md:my-3 md:mx-3 w-8 md:w-10  basis-1/6  grid grid-cols-1 justify-items-center">
            <img src={cashout} className=" " />
            <p className="hidden md:block md:mt-2 text-center">Cashout</p>
          </div>
        </div>
      </Link>
      <Link to="/redeem/lainnya">
        <div
          className={
            "my-2 rounded-full md:rounded-2xl md:px-3 md:py-2  hover:border-orange-500 hover:border" +
            (category == "lainnya"
              ? "text-black bg-orange-200 border-2 md:border border-orange-500"
              : "")
          }
        >
          <div className=" md:my-3 md:mx-3 w-8 md:w-10  basis-1/6  grid grid-cols-1  justify-items-center ">
            <img src={lainnya} className="" />
            <p className="hidden md:block md:mt-2 text-center">Lainnya</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RedeemNavigasiComponent;
