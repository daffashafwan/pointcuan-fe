import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { read_cookie } from 'sfcookies';
import axios from 'axios';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";
import parse from 'html-react-parser'
import pulsa from "../assets/images/reedemPointCategory/pulsa.svg";
import data from "../assets/images/reedemPointCategory/paket.svg";
import emoney from "../assets/images/reedemPointCategory/emoney.svg";
import pln from "../assets/images/reedemPointCategory/pln.svg";
import cashout from "../assets/images/reedemPointCategory/cashout.svg";
import lainnya from "../assets/images/reedemPointCategory/lainnya.svg";

function RedeemNavigasiComponent({ category }) {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(BASE_URL_API + read_cookie('user_cred') + "/categoryitems", HEADER_API)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [])
  return (
    <div className="grid grid-cols-6 w-full md:w-auto md:grid-cols-2 justify-items-center gap-x-0 md:mx-10  my-1  md:my-0 md:py-10 border border-gray-300 md:border-none md:shadow-xl rounded-lg md:rounded-2xl md:h-fit">
      {
        data?.map(function (x) {
          return (
            <Link to={"/redeem/"+x.id}>
              <div
                className={
                  "my-2 rounded-full md:rounded-2xl md:px-3 md:py-2  hover:border-orange-500 hover:border" +
                  (x.id == category
                    ? "text-black bg-orange-200 border-2 md:border border-orange-500"
                    : "")
                }
              >
                <div className=" md:my-3 md:mx-3 w-8 md:w-10  basis-1/6  grid grid-cols-1 justify-items-center">
                  {parse(JSON.parse(x.svg).svg)}
                  <p className="hidden md:block md:mt-2 text-center ">{x.name}</p>
                </div>
              </div>
            </Link>
          )
        })
      }
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
