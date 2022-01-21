import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table,{DateRenderer} from "./Table"
import { read_cookie } from 'sfcookies';
import axios from 'axios';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";

function DashboardRiwayatTransaksi() {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get(BASE_URL_API + 'users/' + read_cookie('user_cred') + "/transaction", HEADER_API)
      .then(function (response) {
        console.log(response.data.data.length);
        setData(response.data.data.length > 2 ? response.data.data.slice(0, 2) : response.data.data.slice(0, response.data.data.length))
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [])
  const columns = [
    {
      Header: 'Tanggal Transaksi',
      accessor: "transactionDate",
      Cell: DateRenderer
    },
    {
      Header: 'Nominal Transaksi',
      accessor: "transaction",
    },
    {
      Header: 'Point',
      accessor: "point",
    },
  ];
  const datas = []
  return (
    <div className=" grid  grid-cols-1">
      <div className="grid grid-cols-1 place-content-center  bg-white py-10 px-6 md:p-10 rounded-3xl drop-shadow-xl w-100 mt-5 mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2  pt-5">
          <div>
            <p className="font-bold text-sm md:text-md mb-5 text-center md:text-left">
              Riwayat Transaksi
            </p>
          </div>
          <div>
            <Link to="/riwayattransaksi">
              <p className="font-normal text-sm md:text-md italic text-orange-500 mb-5 text-center md:text-right cursor-pointer ">
                Liat Selengkapnya
              </p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="table-auto text-xs md:text-sm text-left">
              <Table
                columns={columns}
                data={data ? data : datas}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRiwayatTransaksi;
