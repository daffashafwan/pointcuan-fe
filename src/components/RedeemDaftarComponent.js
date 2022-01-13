import React from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

function RedeemDaftarComponent() {
  const handlerBeli = () => {
    MySwal.fire({
      title: <strong className="">Dapatkan Point</strong>,
      html: (
        <form
          action="/action_page.php"
          className="text-left text-black font-semibold mx-1 md:mx-5 mt-10 mb-10"
        >
          <div className="grid grid-cols-2 mb-5">
            <div>
              <p>Item</p>
              <p>Point Dibutuhkan</p>
            </div>
            <div>
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
          </div>
          <label for="totalPenjualan">Masukan No Hp :</label>
          <br />
          <input
            type="number"
            id="totalPenjualan"
            name="totalPenjualan"
            className="border border-black w-full py-2 px-4 rounded-md my-3"
          />
          <br />
        </form>
      ),
      confirmButtonColor: "rgb(249 115 22)",
      confirmButtonText: "Beli",
      showCloseButton: true,
      showCancelButton: false,
    });
  };

  return (
    <div className="col-span-3 grid grid-cols-1 place-items-start  gap-y-0 align-top  w-full ml-5 pr-10">
      <div className="grid grid-cols-1  w-full">
        <div className="py-0 my-0">
          <p className="font-bold text-base text-center mt-3 md:mt-0 md:text-left md:text-2xl">
            Reedem Pulsa
          </p>
        </div>
        <div className="grid grid-cols-1 w-full">
          <p className="text-sm text-gray-600 mt-2">Nama Operator</p>
          <div className="mt-2">
            <input className="w-full border border-orange-500 text-base px-4 py-1 outline-none rounded-xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 w-full">
          <div>
            <p className="text-sm text-gray-600 mt-2">Nominal</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-2 mt-2 max-h-200 text-xs md:text-sm lg:text-sm xl:text-base">
            <div className="font-semibold border-2 bg-orange-500 text-white text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
            <div className="font-semibold border-2 border-gray-400 text-center py-2 rounded-xl text-black hover:border-orange-300">
              <p>XL 10.000</p>
              <p>10 Point</p>
            </div>
          </div>
          <div className="grid grid-cols-5 md:grid-cols-4 mt-6 md:mt-2">
            <div className="col-span-4 md:col-span-3">
              <p className="text-xs md:text-sm text-gray-600">harga :</p>
              <p className="text-sm md:text-lg">10 Point</p>
            </div>
            <div
              className="grid grid-cols-1 place-items-end "
              onClick={handlerBeli}
            >
              <div className="bg-blue-600 rounded-xl py-2 px-10 md:px-20 cursor-pointer">
                <p className="text-center text-white font-semibold text-sm md:text-base">
                  Beli
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedeemDaftarComponent;
