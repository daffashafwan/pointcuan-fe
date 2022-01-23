import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { RedeemContext } from "../contexts/RedeemContext";
import { read_cookie } from 'sfcookies';
import axios from 'axios';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";
import withReactContent from "sweetalert2-react-content";
import { classNames } from "../utils/Utils";
import Swal from "sweetalert2";
import RedeemItem from "./RedeemItem";

// const MySwal = withReactContent(Swal);

function RedeemDaftarComponent({ category }) {
  const { openModal, isModalOpen, closeModal, contextData, setContextData } = useContext(RedeemContext)
  const [dataSearch, setDataSearch] = useState({
    data: ""
  })
  const [filteredData, setFilteredData] = useState()
  const [choosed, setChoosed] = useState()
  const [data, setData] = useState()
  useEffect(() => {
    console.log("tes")
    console.log(isModalOpen)
    setData()
    setChoosed()
    axios.get(BASE_URL_API + read_cookie('user_cred') + "/items/category/" + category, HEADER_API)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [category, isModalOpen])

  useEffect(() => {
    var temp = []
    data?.map(function (x) {
      if (x.name.includes(dataSearch.data)) {
        temp.push(x)
      }
    })
    setFilteredData(temp)
    console.log(filteredData)
  }, [dataSearch])

  const handleChoosed = (x) => {
    setChoosed(x)
  }

  const set = name => {
    return ({ target: { value } }) => {
      setDataSearch(oldValues => ({ ...oldValues, [name]: value }));
    }
  };

  const handlerBeli = (choosed) => {
    console.log("tumbas")
    console.log(choosed)
    setContextData(choosed)
    if (choosed) {
      openModal()
    } else {
      Swal.fire(
        'Gagal Redeem',
        'Item Belum Terpilih',
        'warning'
      )
    }

  };

  return (
    <div className="col-span-3 grid grid-cols-1 place-items-start  gap-y-0 align-top  w-full ml-5 pr-10">
      <div className="grid grid-cols-1  w-full">
        <div className="py-0 my-0">
          <p className="font-bold text-base text-center mt-3 md:mt-0 md:text-left md:text-2xl">
            Reedem Item
          </p>
        </div>
        <div className="grid grid-cols-1 w-full">
          <p className="text-sm text-gray-600 mt-2">Nama Item</p>
          <div className="mt-2">
            <input
              value={dataSearch.data}
              onChange={
                set('data')
              }
              className="w-full border border-orange-500 text-base px-4 py-1 outline-none rounded-xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 w-full">
          <div>
            <p className="text-sm text-gray-600 mt-2">Nominal</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-2 mt-2 max-h-200 text-xs md:text-sm lg:text-sm xl:text-base">
            {isModalOpen ?
              <RedeemItem />
              : null

            }
            {data ?
              data?.map(function (x) {
                return (
                  <button disabled={x.stock === "0" ? "disabled" : null} onClick={() => handleChoosed(x)}>
                    <div className={classNames(
                      "font-semibold border-2",
                      choosed ? (choosed.id === x.id ? "bg-orange-500 text-white text-center py-2 rounded-xl hover:border-orange-300" : (x.stock === "0" ? "bg-gray-200 text-center py-2 rounded-xl text-black hover:border-orange-300" : "bg-white-500 text-center py-2 rounded-xl text-black hover:border-orange-300")) : (x.stock === "0" ? "bg-gray-200 text-center py-2 rounded-xl text-black hover:border-orange-300" : "bg-white-500 text-center py-2 rounded-xl text-black hover:border-orange-300")
                    )}>
                      <p>{x.name}</p>
                      <p>{x.pointRedeem} Point</p>
                      <p>{x.stock} tersisa</p>
                    </div>
                  </button>
                )
              })
              : null
            }
          </div>
          <div className="grid grid-cols-5 md:grid-cols-4 mt-6 md:mt-2">
            <div className="col-span-4 md:col-span-3">
              <p className="text-xs md:text-sm text-gray-600">harga :</p>
              <p className="text-sm md:text-lg">{choosed ? choosed.pointRedeem : null}</p>
            </div>
            <button
              disabled={choosed ? null : "disabled"}
              className="grid grid-cols-1 place-items-end "
              onClick={() => handlerBeli(choosed)}
            >
              <div className="bg-blue-600 rounded-xl py-2 px-10 md:px-20 cursor-pointer">
                <p className="text-center text-white font-semibold text-sm md:text-base">
                  Beli
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedeemDaftarComponent;
