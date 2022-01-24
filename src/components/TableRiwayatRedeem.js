import React, { useEffect, useState } from "react";
import Table,{DateRenderer} from "./Table";
import { read_cookie } from 'sfcookies';
import axios from 'axios';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";

function TableRiwayatRedeem() {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(BASE_URL_API + 'users/' + read_cookie('user_cred') + "/redeem", HEADER_API)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data)
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, [])

  const columns = [
    {
      Header: 'Tanggal Redeem',
      accessor: "redeemDate",
      Cell: DateRenderer
    },
    {
      Header: 'Item Redeem',
      accessor: "item.Name",
    },
    {
      Header: 'Point Redeem',
      accessor: "point",
    },
    {
      Header: 'Data Redeem',
      accessor: "dataRedeem",
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

export default TableRiwayatRedeem;
