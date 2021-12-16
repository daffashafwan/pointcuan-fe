import React from "react";
import logo from "../../assets/images/logo.svg";

function LoginAdminPage() {
  return (
    <div className="bg-orange-500 h-screen">
      <div className="flex justify-center pt-20 ">
        <form className="xl:basis-2/5 bg-white xl:px-20 xl:py-10 rounded-md basis-4/5 px-6">
          <div className="flex items-center inline text-center  mb-20 mt-20 xl:mt-5 justify-center">
            <img src={logo} className="inline text-center " />
            <h1 className="inline font-sans text-4xl text-center font-medium pl-2 text-orange-500">
              PointCuan
            </h1>
          </div>
          <div className="text-center font-medium text-xl mb-5">
            <p>Login as Admin</p>
          </div>
          <div>
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Username"
              className="w-full py-2 px-5 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full py-2 px-5  text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full border  rounded-xl px-5 py-2 xl:mb-10 mb-12  bg-orange-500 font-sans text-white font-bold "
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginAdminPage;
