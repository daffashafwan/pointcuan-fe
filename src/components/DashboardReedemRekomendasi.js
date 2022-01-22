import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { read_cookie } from 'sfcookies';
import axios from 'axios';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";
import { ItemRekomendasi } from "./ItemRekomendasi";

function DashboardReedemRekomendasi() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(BASE_URL_API + read_cookie('user_cred') + "/items", HEADER_API)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data.length > 3 ? response.data.data.slice(0, 3) : response.data.data.slice(0, response.data.data.length))
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [])
  console.log(data)
  return (
    <div className=" grid  grid-cols-1">
      <div className="grid grid-cols-1 place-content-center bg-orange-500 py-10 px-2 md:p-10 rounded-3xl drop-shadow-xl w-5/5 mt-5 mx-10">
        <div className="grid grid-cols-1 px-5">
          <p className="font-bold mb-5  text-white md:text-left text-center">
            Reedem Rekomendasi
          </p>
        </div>
        <div className="grid grid-cols-3 place-content-center text-center gap-x-1 md:gap-x-2 text-orange-500 text-xs md:text-sm font-semibold px-5">
          {
            data?.map(function (x) {
              return (<ItemRekomendasi
                value={x.name}
              />)
            })
            }

        </div>
      </div>
    </div>
  );
}

export default DashboardReedemRekomendasi;
