import React from "react";
import { useState } from "react/cjs/react.development";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";

function RiwayatTransaksiPage() {
  const [statiusTransaksi, setStatusTransaksi] = useState(0);
  return (
    <div>
      <UserDashboardNavbarComponent />
      <div className="container">
        <div>
          <h1>Daftar Transaksi</h1>
          <span>Proses</span>
          <span>Ditolak</span>
          <span>Diterima</span>
        </div>
      </div>
      <UserFooterComponent />
    </div>
  );
}

export default RiwayatTransaksiPage;
