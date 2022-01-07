import React from "react";

function DashboardReedemRekomendasi() {
  return (
    <div lassName=" grid  grid-cols-1">
      <div className="grid grid-cols-1 place-content-center bg-orange-500 p-10 rounded-3xl drop-shadow-xl w-5/5 mt-5 mx-10">
        <div className="grid grid-cols-1 px-5">
          <p className="font-bold mb-5 pl-5 text-white">Reedem Rekomendasi</p>
        </div>
        <div className="grid grid-cols-3 place-content-center text-center gap-x-1 md:gap-x-2 text-orange-500 text-xs md:text-sm font-semibold px-5">
          <div className=" ">
            <div className="bg-white px-1 md:px-8 py-3 rounded-2xl">
              Pulsa By.u 50.000
            </div>
          </div>
          <div className=" ">
            <div className="bg-white px-1 md:px-8 py-3 rounded-2xl">
              Pulsa By.u 50.000
            </div>
          </div>
          <div className="">
            <div className="bg-white px-1 md:px-8 py-3 rounded-2xl">
              Pulsa By.u 50.000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardReedemRekomendasi;
