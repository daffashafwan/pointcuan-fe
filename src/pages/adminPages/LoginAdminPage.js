import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import axios from "axios";
import { BASE_URL_API, HEADER_API_ADMIN } from "../../config/urlApi";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { bake_cookie } from 'sfcookies';
import Swal from "sweetalert2";

function LoginAdminPage() {
  const [hidePass, setHidePass] = useState(false);
  const navigate = useNavigate();
  const handlerHidePass = () => {
    setHidePass(!hidePass);
  };
  const cookie_key = 'admin_cred';
  const jwt_admin = 'jwt_admin';
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const set = name => {
    return ({ target: { value } }) => {
      setFormState(oldValues => ({ ...oldValues, [name]: value }));
    }
  };

  const handleLogin = async () => {
    console.log(HEADER_API_ADMIN)
    var bodyFormData = {
      username: formState.username,
      password: formState.password,
    }
    axios.post(BASE_URL_API + 'admin/login',
      bodyFormData, HEADER_API_ADMIN)
      .then(function (response) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Berhasil Login',
          showConfirmButton: false,
          timer: 1200
        });
        bake_cookie(cookie_key, response.data.data.id);
        bake_cookie(jwt_admin, response.data.data.jwtToken);
        setTimeout(function () {
          navigate('/admin');
        }, 1500)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response)
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Gagal Login',
          text: error.response.data.data,
          showConfirmButton: false,
          timer: 1200
        });
        setTimeout(function () {
          navigate('/loginadmin');
        }, 1500)
        console.log(error.response);
      });
  }

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
        await handleLogin();
        setFormState({
          username: '', password: ''
        });
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="bg-orange-500 h-screen">
      <div className="flex justify-center pt-20 ">
        <form onSubmit={onSubmit} className="xl:basis-2/5 bg-white xl:px-20 xl:pb-10 xl:pt-1 rounded-md basis-4/5 px-6">
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
              value={formState.username}
              onChange={set('username')}
              placeholder="Username"
              className="w-full py-2 px-5 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
            />
          </div>
          <div className="w-full flex  border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 bg-white">
            <input
              id="password"
              name="password"
              type={hidePass == true ? "text" : "password"}
              required
              value={formState.password}
              onChange={set('password')}
              placeholder="Password"
              className="w-20 basis-full py-2 px-5  text-primary rounded-xl border-hidden outline-none"
            />
            <div
              className=" inline basis-2 w-full justify-end align-middle "
              onClick={handlerHidePass}
            >
              {hidePass == true ? (
                <AiFillEyeInvisible className="inline text-center mx-2 mt-2 fill-gray-600" />
              ) : (
                <AiFillEye className="inline text-center mx-2 mt-2 fill-gray-600" />
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
