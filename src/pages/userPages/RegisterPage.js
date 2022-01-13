import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/images/logo.svg";
import { BASE_URL_API, HEADER_API } from "../../config/urlApi";
import VectorFront from "../../components/VectorFront";
import LoginPageIm from "../../assets/images/loginPage/LoginPage.svg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function RegisterPage() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    username: '',
    address: '',
    password: '',
    email: '',
    retypePassword: '',
    name: ''
  });
  const [hidePass, setHidePass] = useState(false);

  const handlerHidePass = () => {
    setHidePass(!hidePass);
  };
  const set = name => {
    return ({ target: { value } }) => {
      setFormState(oldValues => ({ ...oldValues, [name]: value }));
      console.log(formState)
    }
  };
  const saveFormData = async () => {
    var bodyFormData = {
      name: formState.name,
      email: formState.email,
      username: formState.username,
      password: formState.password,
      address: formState.address,
    }
    axios.post(BASE_URL_API + 'users/register',
      bodyFormData, HEADER_API)
      .then(function (response) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Berhasil Daftar',
          showConfirmButton: false,
          timer: 1200
        });
        setTimeout(function () {
          navigate('/register');
        }, 1500)
        console.log(response);
      })
      .catch(function (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Gagal Daftar',
          text: error.response.data.data,
          showConfirmButton: false,
          timer: 1200
        });
        setTimeout(function () {
          navigate('/register');
        }, 1500)
        console.log(error.response);
      });
  }
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      if (formState.password === formState.retypePassword) {
        await saveFormData();
        setFormState({
          name: '', username: '', email: '', password: '', address: '', retypePassword: ''
        });
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Password tidak sama',
          showConfirmButton: false,
          timer: 1200
        });
      }
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div
      className=" bg-no-repeat bg-cover h-screen w-screen"
      style={{
        backgroundImage: `url(${LoginPageIm})`,
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-1 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 ">
          <VectorFront />
          <div className="w-full aspect-w-0 aspect-h-0 flex justify-center">
            <form onSubmit={onSubmit} className="xl:basis-1/2 basis-full px-5 xl:px-0">
              <div className="flex items-center justify-center  inline text-center  mb-10 mt-20 xl:mt-40">
                <img src={logo} className="text-center w-15 xl:w-20  " />
                <h1 className="inline font-sans text-3xl xl:text-4xl text-center font-medium pl-2 text-orange-500">
                  PointCuan
                </h1>
              </div>
              <div>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  value={formState.name}
                  onChange={set('name')}
                  required
                  placeholder="Nama"
                  className="w-full py-2 px-3 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={set('email')}
                  required
                  placeholder="Email"
                  className="w-full py-2 px-3 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
                />
              </div>
              <div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={set('username')}
                  required
                  placeholder="Username"
                  className="w-full py-2 px-3 text-primary border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4"
                />
              </div>
              <div className="w-full flex  border border-gray-600 rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 bg-white">
                <input
                  id="password"
                  name="password"
                  value={formState.retypePassword}
                  onChange={set('retypePassword')}
                  type={hidePass == true ? "text" : "password"}
                  required
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
                  className="w-full border  rounded-xl px-5 py-2 bg-orange-500 font-sans text-white font-bold "
                >
                  Daftar
                </button>
              </div>
              <div className="w-full text-center mt-5">
                <p href="#" className="text-sm">
                  Dengan mendaftar saya telah setuju dengan Syarat & Ketentuan
                  serta Kebijakan Privasi yang ditetapkan oleh Pointcuan
                </p>
              </div>
              <div className="xl:mt-20 mt-10 text-center pb-5">
                <p className="inline ">Sudah Punya Akun?</p>
                <a
                  onClick={() => navigate("/")}
                  className="inline border border-orange-500 rounded-xl px-3 py-1  ml-3 cursor-pointer"
                >
                  Masuk Disini
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
