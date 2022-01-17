import React from "react";
import pulsa from "../assets/images/reedemPointCategory/pulsa.svg";
import data from "../assets/images/reedemPointCategory/paket.svg";
import emoney from "../assets/images/reedemPointCategory/emoney.svg";
import pln from "../assets/images/reedemPointCategory/pln.svg";
import cashout from "../assets/images/reedemPointCategory/cashout.svg";
import lainnya from "../assets/images/reedemPointCategory/lainnya.svg";
import { Link } from "react-router-dom";

function DashboardReedemPoint() {
  return (
    <div lassName=" grid  grid-cols-1 w-full ">
      <div className="grid grid-cols-1 w-5/5 place-content-center bg-white p-10 rounded-3xl drop-shadow-xl w-100 mt-5 mx-10">
        <div className="grid grid-cols-1 ">
          <p className="font-bold mb-5  md:pl-5 text-center md:text-left">
            Reedem Point
          </p>
        </div>
        <div className="grid  md:grid-cols-6  justify-items-center grid-cols-3 gap-x-10 gap-y-2  text-xs md:text-sm text-center px-5 w-full ">
          <div className="mx-2 w-10 basis-1/6">
            <Link to="/redeem/pulsa">
              <img src={pulsa} className=" " />
              <p className="hidden md:block md:mt-1">Pulsa</p>
            </Link>
          </div>
          <div className="mx-2 w-10 md:basis-1/6 basis-1/3">
            <Link to="/redeem/data">
              <img src={data} className=" " />
              <p className="hidden md:block md:mt-1">Data</p>
            </Link>
          </div>
          <div className="mx-2 w-10 md:basis-1/6  basis-1/3">
            <Link to="/redeem/emoney">
              <img src={emoney} className=" " />
              <p className="hidden md:block md:mt-1">E~Money</p>
            </Link>
          </div>
          <div className="mx-2 w-10 md:basis-1/6  basis-1/3">
            <Link to="/redeem/pln">
              <img src={pln} className=" " />
              <p className="hidden md:block md:mt-1">PLN</p>
            </Link>
          </div>
          <div className="mx-2 w-10 md:basis-1/6 basis-1/3 ">
            <Link to="/redeem/cashout">
              <img src={cashout} className=" " />
              <p className="hidden md:block md:mt-1">Cashout</p>
            </Link>
          </div>
          <div className="mx-2 w-10 md:basis-1/6 basis-1/3">
            <Link to="/redeem/lainnya">
              <img src={lainnya} className="" />
              <p className="hidden md:block md:mt-1">Lainnya</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardReedemPoint;
