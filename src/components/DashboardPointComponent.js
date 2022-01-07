import React from "react";
import iconAddPoint from "../assets/images/iconAddPoint.svg";
import { MdOutlineAddCircle } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function DashboardPointComponent() {
  const handlerTambahPoint = () => {
    MySwal.fire({
      title: <strong className="">Dapatkan Point</strong>,
      html: (
        <form
          action="/action_page.php"
          className="text-left text-black font-semibold mx-1 md:mx-5 mt-10 mb-10"
        >
          <label for="totalPenjualan">Total Penjualan</label>
          <br />
          <input
            type="number"
            id="totalPenjualan"
            name="totalPenjualan"
            className="border border-black w-full py-2 px-4 rounded-md my-3"
          />
          <br />
          <label for="tanggal">Tanggal</label>
          <br />
          <input
            type="date"
            id="tanggal"
            name="tanggal"
            className="border border-black w-full py-2 px-4 rounded-md my-3"
          />
          <br />
          <input
            type="file"
            id="buktiGambar"
            name="buktiGambar"
            className="text-orange-500 mt-4"
          />
        </form>
      ),
      confirmButtonColor: "rgb(249 115 22)",
      cancelButtonColor: "rgb(168 162 158)",
      cancelButtonText: "Batal",
      confirmButtonText: "Kirim",
      showCloseButton: true,
      showCancelButton: true,
    });
  };
  return (
    <div className=" grid grid-cols-1 justify-items-center bg-white p-10 rounded-3xl drop-shadow-xl 4/5 md:w-full md:mx-8">
      <p className="text-center text-sm lg:text-md">Point Anda</p>
      <h1 className="text-center text-2xl lg:text-5xl font-semibold  text-orange-500">
        3.756
      </h1>
      <img src={iconAddPoint} className="justify-items-center mb-2" />
      <div
        className="bg-orange-500 w-auto text-center text-sm md:text-md rounded-md cursor-pointer text-white py-1 px-3"
        onClick={handlerTambahPoint}
      >
        <MdOutlineAddCircle className="mr-2 hidden md:block md:inline " />
        tambah point
      </div>
    </div>
  );
}

export default DashboardPointComponent;
