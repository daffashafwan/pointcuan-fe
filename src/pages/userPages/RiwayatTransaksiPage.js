import React from "react";
import { useState } from "react/cjs/react.development";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";

import TableRiwayatTransaksi from "../../components/TableRiwayatTransaksi";

function RiwayatTransaksiPage() {
  const [statusTransaksi, setStatusTransaksi] = useState(0);
  return (
    <div>
      <UserDashboardNavbarComponent />
      <div className="container mx-auto pt-20">
        <div>
          <h1 className="md:mx-10 text-center md:text-left font-bold text-3xl mt-2">
            Daftar Transaksi
          </h1>
          <div className="mt-7 mx-2 md:mx-10 text-center md:text-left">
            <span
              className={
                "border border-gray-400 border-2 rounded-md md:rounded-xl px-4 md:px-6 py-2 mx-2 text-xs md:text-lg font-semibold cursor-pointer " +
                (statusTransaksi === 0
                  ? "text-white bg-orange-500 hover:bg-orange-400 text-white "
                  : " text-black bg-white hover:bg-gray-200 text-black")
              }
              onClick={() => setStatusTransaksi(0)}
            >
              Proses
            </span>
            <span
              className={
                "border border-gray-400 border-2 rounded-md md:rounded-xl px-4 md:px-6 py-2 mx-2 text-xs md:text-lg font-semibold cursor-pointer " +
                (statusTransaksi === 1
                  ? "text-white bg-orange-500 hover:bg-orange-400 text-white "
                  : " text-black bg-white hover:bg-gray-200 text-black")
              }
              onClick={() => setStatusTransaksi(1)}
            >
              Ditolak
            </span>
            <span
              className={
                "border border-gray-400 border-2 rounded-md md:rounded-xl px-4 md:px-6 py-2 mx-2 text-xs md:text-lg font-semibold cursor-pointer " +
                (statusTransaksi === 2
                  ? "text-white bg-orange-500 hover:bg-orange-400 text-white "
                  : " text-black bg-white hover:bg-gray-200 text-black")
              }
              onClick={() => setStatusTransaksi(2)}
            >
              Diterima
            </span>
          </div>
        </div>
        <div>
          <TableRiwayatTransaksi statusTransaksi={statusTransaksi} />
        </div>
      </div>
      <UserFooterComponent />
    </div>
  );
}

export default RiwayatTransaksiPage;
