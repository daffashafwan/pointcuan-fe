/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import DashboardPointComponent from "../../components/DashboardPointComponent";
import DashboardPointViewComponent from "../../components/DashboardPointViewComponent";
import DashboardReedemPoint from "../../components/DashboardReedemPoint";
import DashboardReedemRekomendasi from "../../components/DashboardReedemRekomendasi";
import DashboardRiwayatRedeem from "../../components/DashboardRiwayatRedeem";
import DashboardRiwayatTransaksi from "../../components/DashboardRiwayatTransaksi";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";
import { BASE_URL_API, HEADER_API } from "../../config/urlApi";
import Swal from "sweetalert2";
import axios from 'axios';
import { storage } from "../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { useNavigate } from "react-router-dom";
import { read_cookie, delete_cookie } from 'sfcookies';

function DashboardPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (read_cookie('user_cred').length < 1) {
      navigate('/');
    }
  })

  const percentage = 11;
  const [url, setUrl] = useState()
  const [tambahPoint, setTambahPoint] = useState(false);
  const [form, setForm] = useState({
    transactionDate: "",
    transaction: 0,
    transactionAttachment: "",
    status: 0,
    userId: 0
  })
  const [loadingUpload, setLoadingUpload] = useState(0);
  const set = name => {
    return ({ target: { value } }) => {
      setForm(oldValues => ({ ...oldValues, [name]: value }));
    }
  };

  const handlerFormTransaksi = (e) => {
    e.preventDefault();
    const file = e.target[2].files[0];
    uploadFiles(file);
  };

  // upload to firebase
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/bukti/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setLoadingUpload(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url)
          var bodyFormData = {
            transactionDate: form.transactionDate,
            transaction: form.transaction,
            transactionAttachment: url,
            status: 0,
            userId: read_cookie('user_cred'),
          }
          console.log(bodyFormData)
          axios.post(BASE_URL_API + 'users/'+bodyFormData.userId+'/transaction', bodyFormData, HEADER_API)
                .then(function (response) {
                    console.log(response.data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Tambah Data',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setTimeout(function () {
                        setTambahPoint(false)
                    }, 1000)

                })
                .catch(function (error) {
                    console.log(error.response);
                });
        });
      }
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div>
        <UserDashboardNavbarComponent />
      </div>

      {/* Popup */}
      {tambahPoint == true ? (
        <div className="fixed h-screen w-screen z-30 ">
          <div
            className="fixed bg-black h-screen w-screen z-40 opacity-75"
            onClick={() => setTambahPoint(false)}
          ></div>
          <div className="fixed z-50 grid grid-cols-1 justify-items-center inset-1/4">
            <div className="bg-white w-fit opacity-100 rounded-md px-3">
              <form
                action="/action_page.php"
                className="text-left text-black font-semibold mx-1 md:mx-5 mt-3 mb-3"
                onSubmit={handlerFormTransaksi}
              >
                <p className="text-center font-semibold text-3xl mb-5">
                  Dapatkan Point
                </p>
                <label for="totalPenjualan">Total Penjualan</label>
                <br />
                <input
                  type="number"
                  id="totalPenjualan"
                  name="totalPenjualan"
                  value={form.transaction}
                  onChange={set('transaction')}
                  className="border border-black w-full py-2 px-4 rounded-md my-3 outline-none"
                  required
                />
                <br />
                <label for="tanggal">Tanggal</label>
                <br />
                <input
                  type="date"
                  id="tanggal"
                  name="tanggal"
                  value={form.transactionDate}
                  onChange={set('transactionDate')}
                  className="border border-black w-full py-2 px-4 rounded-md my-3  outline-none"
                  required
                />
                <br />
                <input
                  type="file"
                  id="buktiGambar"
                  name="buktiGambar"
                  className="text-orange-500 mt-4 "
                  required
                />
                <div className="grid grid-cols-2 justify-center mt-5 gap-x-2 text-sm md:text-base">
                  <button
                    type="submit"
                    className="bg-orange-500 px-5 py-2 text-white rounded-md  "
                  >
                    Kirim
                  </button>
                  <button
                    className="bg-gray-500 px-5 py-2 text-white rounded-md inline"
                    onClick={() => setTambahPoint(false)}
                  >
                    Batal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {/* isis */}
      <div className="flex-grow">
        <div className="container mx-auto pt-11">
          {/* sisi kiri */}
          <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
            {/* sisi kiri */}
            <div className="grid grid-cols-1 ">
              <div className="flex justify-between   gap-x-3 sm:gap-x-3 md:gap-x-3  lg:gap-x-0 xl:gap-x-0 mt-10 mx-2">
                <div className="flex justify-center basis-1/2 ml-3">
                  <DashboardPointComponent setTambahPoint={setTambahPoint} />
                </div>
                <div className="flex justify-center basis-1/2 mr-3">
                  <DashboardPointViewComponent />
                </div>
              </div>
              <div className="grid grid-cols-1 mx-2 justify--center">
                <DashboardReedemPoint />
              </div>
              <div className="grid grid-cols-1 justify-items-center ">
                <DashboardReedemRekomendasi />
              </div>
            </div>
            {/* sisi kanan  */}
            <div className="grid md:mt-6">
              <div className="">
                <DashboardRiwayatTransaksi />
              </div>
              <div className="">
                <DashboardRiwayatRedeem />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UserFooterComponent />
      </div>
    </div>
  );
}

export default DashboardPage;
