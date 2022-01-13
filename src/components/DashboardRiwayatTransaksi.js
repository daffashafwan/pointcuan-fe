import React from "react";
import { Link } from "react-router-dom";

function DashboardRiwayatTransaksi() {
  return (
    <div lassName=" grid  grid-cols-1">
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
        <div className="grid grid-cols-1 pb-10 md:pb-20">
          <table class="table-auto text-xs md:text-sm text-left">
            <thead>
              <tr>
                <th>Tanggal Teransaksi</th>
                <th>Nomial Transaksi</th>
                <th>Point Transaksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11/12/2021</td>
                <td>1.500.000</td>
                <td>150</td>
              </tr>
              <tr>
                <td>12/12/2021</td>
                <td>1.600.000</td>
                <td>160</td>
              </tr>
              <tr>
                <td>13/12/2021</td>
                <td>1.700.000</td>
                <td>170</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardRiwayatTransaksi;
