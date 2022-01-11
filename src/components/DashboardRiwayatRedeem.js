import React from "react";
import { Link } from "react-router-dom";

function DashboardRiwayatRedeem() {
  return (
    <div lassName=" grid  grid-cols-1">
      <div className="grid grid-cols-1 place-content-center  bg-white p-10 rounded-3xl drop-shadow-xl w-100 mt-5 mx-10">
        <div className="grid grid-cols-1 md:grid-cols-2  pt-5">
          <div>
            <p className="font-bold text-sm md:text-md mb-5 text-center">
              Riwayat Redeem
            </p>
          </div>
          <div>
            <Link to="/riwayatredeem">
              <p className="font-normal text-sm md:text-md italic text-orange-500 mb-5 text-center md:text-right cursor-pointer ">
                Liat Selengkapnya
              </p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 pb-10 md:pb-20">
          <table class="table-auto text-xs md:text-sm text-left">
            <thead>
              <tr>
                <th>Tanggal Teransaksi</th>
                <th>Item Redeem</th>
                <th>Point Diredeem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11/12/2021</td>
                <td>PLN 300.000</td>
                <td>350</td>
              </tr>
              <tr>
                <td>12/12/2021</td>
                <td>Cashout BNI 250.000</td>
                <td>300</td>
              </tr>
              <tr>
                <td>13/12/2021</td>
                <td>Pulsa Telkomsel 10.000</td>
                <td>120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardRiwayatRedeem;
