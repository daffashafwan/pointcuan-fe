import React from "react";
import iconAddPoint from "../assets/images/iconAddPoint.svg";
import { MdOutlineAddCircle } from "react-icons/md";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

function DashboardPointComponent({ setTambahPoint }) {
  return (
    <div className=" grid grid-cols-1 justify-items-center bg-white p-10 rounded-3xl drop-shadow-xl 4/5 md:w-full md:mx-8">
      <p className="text-center text-sm lg:text-md">Point Anda</p>
      <h1 className="text-center text-2xl lg:text-5xl font-semibold  text-orange-500">
        3.756
      </h1>
      <img src={iconAddPoint} className="justify-items-center mb-2" />
      <div
        className="bg-orange-500 w-auto text-center text-sm md:text-md rounded-md cursor-pointer text-white py-1 px-3"
        onClick={() => setTambahPoint(true)}
      >
        <MdOutlineAddCircle className="mr-2 hidden md:block md:inline " />
        tambah point
      </div>
    </div>
  );
}

export default DashboardPointComponent;
