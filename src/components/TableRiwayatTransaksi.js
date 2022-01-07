import React from "react";
import { AiFillEye, AiOutlineClose } from "react-icons/ai";

function TableRiwayatTransaksi({ statusTransaksi }) {
  return (
    <div className="border border-gray-400 p-2 md:p-10 mt-10 mx-2 md:mx-10 rounded rounded-xl">
      {/* Proses */}
      {statusTransaksi == 0 ? (
        <table class="table-auto w-full text-center md:text-left text-xs md:text-base">
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal Transaksi</th>
              <th>Jumlah Transaksi</th>
              <th>Poin Yang Didapat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12-12-2021</td>
              <td>Rp. 1.000.000</td>
              <td>100</td>
              <td>
                <AiFillEye className="inline fill-gray-500" />
                {"  "}
                <AiOutlineClose className="inline fill-red-600" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>12-12-2021</td>
              <td>Rp. 1.000.000</td>
              <td>100</td>
              <td>
                <AiFillEye className="inline fill-gray-500" />
                {"  "}
                <AiOutlineClose className="inline fill-red-600" />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <span></span>
      )}
      {/* Ditolakj */}
      {statusTransaksi == 1 ? (
        <table class="table-auto w-full text-center md:text-left text-xs md:text-base">
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal Transaksi</th>
              <th>Jumlah Transaksi</th>
              <th>Poin Yang Didapat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12-12-2021</td>
              <td>Rp. 1.000.000</td>
              <td>100</td>
              <td>
                <AiFillEye className="inline fill-gray-500" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>12-12-2021</td>
              <td>Rp. 1.000.000</td>
              <td>100</td>
              <td>
                <AiFillEye className="inline fill-gray-500" />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <span></span>
      )}
      {/* Diterima */}
      {statusTransaksi == 2 ? (
        <table class="table-auto w-full text-center md:text-left text-xs md:text-base">
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal Transaksi</th>
              <th>Jumlah Transaksi</th>
              <th>Poin Yang Didapat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12-12-2021</td>
              <td>Rp. 1.000.000</td>
              <td>100</td>
              <td>
                <AiFillEye className="inline fill-gray-500" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>12-12-2021</td>
              <td>Rp. 1.000.000</td>
              <td>100</td>
              <td>
                <AiFillEye className="inline fill-gray-500" />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default TableRiwayatTransaksi;
