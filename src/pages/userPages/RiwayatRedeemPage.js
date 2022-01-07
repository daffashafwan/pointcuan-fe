import React from "react";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";

function RiwayatRedeemPage() {
  return (
    <div>
      <UserDashboardNavbarComponent />
      <div className="container mx-auto pt-20">
        <div>
          <h1 className="md:mx-10 text-center md:text-left font-bold text-3xl mt-2">
            Daftar Transaksi
          </h1>
          <div className="border border-gray-400 p-2 md:p-10 mt-10 mx-2 md:mx-10 rounded rounded-xl">
            <table class="table-auto w-full text-center md:text-left text-xs md:text-base">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Tanggal</th>
                  <th>Nomor Hp</th>
                  <th>Item</th>
                  <th>Nilai Poin</th>
                  <th>Ket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>13-12-2021</td>
                  <td>081256789021</td>
                  <td>Pulsa Xl 10000</td>
                  <td>100</td>
                  <td>sukses</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>13-12-2021</td>
                  <td>081256789021</td>
                  <td>Pulsa Xl 10000</td>
                  <td>100</td>
                  <td>sukses</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>13-12-2021</td>
                  <td>081256789021</td>
                  <td>Pulsa Xl 10000</td>
                  <td>100</td>
                  <td>sukses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <UserFooterComponent />
    </div>
  );
}

export default RiwayatRedeemPage;
