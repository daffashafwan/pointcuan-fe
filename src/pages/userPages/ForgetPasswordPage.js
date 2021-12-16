import React from "react";
import logo from "../../assets/images/logo.svg";
import VectorFront from "../../components/VectorFront";

function ForgetPasswordPage() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 ">
        <VectorFront />
        <div className="w-full aspect-w-0 aspect-h-0 flex justify-center bg-orange-50 h-screen">
          <form className="xl:basis-1/2 basis-full px-5 xl:px-0">
            <div className="flex items-center inline text-center ml-8 xl:ml-6 mb-3 mt-20 ml-0 xl:mt-40">
              <img src={logo} className="inline text-center " />
              <h1 className="inline font-sans text-4xl text-center font-medium pl-2 text-orange-500">
                PointCuan
              </h1>
            </div>
            <div className="w-full text-center mb-10">
              <p>Reset Password Anda</p>
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full py-2 px-5 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full border  rounded-xl px-5 py-2 bg-orange-500 font-sans text-white font-bold "
              >
                Reset Password
              </button>
            </div>
            <div className="xl:mt-20 mt-10 text-center">
              <p className="inline ">Belum Punya Akun?</p>
              <a
                href="/register"
                className="inline border border-orange-500 rounded-xl px-3 py-1 ml-3"
              >
                Daftar Disini
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
