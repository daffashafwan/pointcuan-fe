import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { read_cookie } from "sfcookies";
import axios from "axios";
import { BASE_URL_API, HEADER_API } from "../config/urlApi";
import { RedeemKategori } from "./RedeemKategori";
import lainnya from "../assets/images/reedemPointCategory/lainnya.svg";

function DashboardReedemPoint() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        BASE_URL_API + read_cookie("user_cred") + "/categoryitems",
        HEADER_API
      )
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  return (
    <div className=" grid  grid-cols-1 w-full ">
      <div className="grid grid-cols-1 w-5/5 place-content-center bg-white p-10 rounded-3xl drop-shadow-xl w-100 mt-5 mx-10">
        <div className="grid grid-cols-1 ">
          <p className="font-bold mb-5  md:pl-5 text-center md:text-left">
            Reedem Item
          </p>
        </div>
        <div className="grid  md:grid-cols-6  md:place-content-center md:flex md:w-full  grid-cols-3 gap-x-10 gap-y-2  text-xs md:text-sm text-center px-5 w-full  ">
          {data?.map(function (x) {
            return <RedeemKategori id={x.id} name={x.name} svg={x.svg} />;
          })}
          <div className=" w-10 md:basis-1/6 basis-1/3 text-center w-full justify-center md:flex md:justify-center">
            <Link to="/redeem/lainnya">
              <div className="w-12 ">
                <img src={lainnya} className="" />
              </div>
              <p className="hidden md:block md:mt-1.5 text-center text-base">
                Lainnya
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardReedemPoint;
