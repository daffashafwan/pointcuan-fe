/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import DashboardPointComponent from "../../components/DashboardPointComponent";
import DashboardPointViewComponent from "../../components/DashboardPointViewComponent";
import DashboardReedemPoint from "../../components/DashboardReedemPoint";
import DashboardReedemRekomendasi from "../../components/DashboardReedemRekomendasi";
import DashboardRiwayatRedeem from "../../components/DashboardRiwayatRedeem";
import DashboardRiwayatTransaksi from "../../components/DashboardRiwayatTransaksi";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";
import { storage } from "../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";

function DashboardPage() {
  const percentage = 40;

  const [tanggalTransaksi, setTanggalTransaksi] = useState();
  const [progress, setProgress] = useState(0);

  const handlerFormTransaksi = (e) => {
    e.preventDefault();
    const totalPenjualan = e.target[0].value;
    const tanggal = e.target[1].value;
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
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div>
        <UserDashboardNavbarComponent />
      </div>
      <div className="flex-grow">
        <div className="container mx-auto pt-11">
          {/* sisi kiri */}
          <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
            {/* sisi kiri */}
            <div className="grid grid-cols-1 ">
              <div className="flex justify-between   gap-x-3 sm:gap-x-3 md:gap-x-3  lg:gap-x-0 xl:gap-x-0 mt-10 mx-2">
                <div className="flex justify-center basis-1/2 ml-3">
                  <DashboardPointComponent
                    handlerFormTransaksi={handlerFormTransaksi}
                    tanggalTransaksi={tanggalTransaksi}
                    setTanggalTransaksi={setTanggalTransaksi}
                  />
                </div>
                <div className="flex justify-center basis-1/2 mr-3">
                  <DashboardPointViewComponent percentage={percentage} />
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
