import React from "react";
import pulsa from "../assets/images/reedemPointCategory/pulsa.svg";
import data from "../assets/images/reedemPointCategory/paket.svg";
import emoney from "../assets/images/reedemPointCategory/emoney.svg";
import pln from "../assets/images/reedemPointCategory/pln.svg";
import cashout from "../assets/images/reedemPointCategory/cashout.svg";
import lainnya from "../assets/images/reedemPointCategory/lainnya.svg";

function DashboardReedemPoint() {
  return (
    <div lassName=" grid  grid-cols-1 w-full ">
      <div className="grid grid-cols-1 w-5/5 place-content-center bg-white p-10 rounded-3xl drop-shadow-xl w-100 mt-5 mx-10">
        <div className="grid grid-cols-1 px-5">
          <p className="font-bold mb-5 pl-0 md:pl-5 text-center md:text-left">
            Reedem Point
          </p>
        </div>
        <div className="grid  md:grid-cols-6  justify-items-center grid-cols-3 gap-x-10 gap-y-2  text-xs md:text-sm text-center px-5 w-full ">
          <div className="mx-2 w-10 basis-1/6">
            <img src={pulsa} className=" " />
            <p className="hidden md:block">Pulsa</p>
          </div>
          <div className="mx-2 w-10 md:basis-1/6 basis-1/3">
            <img src={data} className=" " />
            <p className="hidden md:block">Data</p>
          </div>
          <div className="mx-2 w-10 md:basis-1/6  basis-1/3">
            <img src={emoney} className=" " />
            <p className="hidden md:block ">E-Money</p>
          </div>
          <div className="mx-2 w-10 md:basis-1/6  basis-1/3">
            <img src={pln} className=" " />
            <p className="hidden md:block">PLN</p>
          </div>
          <div className="mx-2 w-10 md:basis-1/6 basis-1/3 ">
            <img src={cashout} className=" " />
            <p className="hidden md:block">Cashout</p>
          </div>
          <div className="mx-2 w-10 md:basis-1/6 basis-1/3">
            <img src={lainnya} className="" />
            <p className="hidden md:block">Lainnya</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardReedemPoint;
