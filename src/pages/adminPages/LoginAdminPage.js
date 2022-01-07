import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function LoginAdminPage() {
  const [hidePass, setHidePass] = useState(false);

  const handlerHidePass = () => {
    setHidePass(!hidePass);
  };

  return (
    <div className="bg-orange-500 h-screen">
      <div className="flex justify-center pt-20 ">
        <form className="xl:basis-2/5 bg-white xl:px-20 xl:pb-10 xl:pt-1 rounded-md basis-4/5 px-6">
          <div className="flex items-center justify-center  inline text-center  mb-10 mt-20 xl:mt-40">
            <img src={logo} className="text-center w-15 xl:w-20  " />
            <h1 className="inline font-sans text-3xl xl:text-4xl text-center font-medium pl-2 text-orange-500">
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
          <div className="w-full flex py-2 px-5  text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4">
            <input
              id="password"
              name="password"
              type={hidePass == true ? "text" : "password"}
              required
              placeholder="Password"
              className="w-20 basis-full"
            />
            <div
              className=" inline basis-2 w-full justify-end h-fit"
              onClick={handlerHidePass}
            >
              {hidePass == true ? (
                <AiFillEyeInvisible className="inline text-center" />
              ) : (
                <AiFillEye className="inline text-center" />
              )}
            </div>
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
