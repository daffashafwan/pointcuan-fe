import React, { useEffect, useState } from "react";
import { AiFillEye, AiOutlineClose } from "react-icons/ai";
import Table,{DateRenderer} from "./Table";
import { read_cookie } from 'sfcookies';
import axios from 'axios';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";

function TableRiwayatTransaksi({ statusTransaksi }) {
  const [data, setData] = useState();
  useEffect(() => {
    var bodyFormData = {
      status: statusTransaksi
    }
    axios.post(BASE_URL_API + 'users/' + read_cookie('user_cred') + "/transaction/status", bodyFormData, HEADER_API)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [statusTransaksi])

  const columns = [
    {
      Header: 'Tanggal Transaksi',
      accessor: "transactionDate",
      Cell: DateRenderer
    },
    {
      Header: 'Nominal',
      accessor: "transaction",
    },
    {
      Header: 'Point',
      accessor: "point",
    },
  ];
  const datas = [

  ]
  return (
    <div className="border border-gray-400 p-5 mt-10 mx-2 md:mx-10 rounded rounded-xl">
      <div className="table-auto w-full text-center md:text-left text-xs md:text-base">
        <Table
          isPagination={true}
          isSearch={true}
          columns={columns}
          data={data ? data : datas}
        />
      </div>
    </div>
  );
}

export default TableRiwayatTransaksi;
