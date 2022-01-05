/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import DashboardPointComponent from "../../components/DashboardPointComponent";
import DashboardPointViewComponent from "../../components/DashboardPointViewComponent";
import DashboardReedemPoint from "../../components/DashboardReedemPoint";
import DashboardReedemRekomendasi from "../../components/DashboardReedemRekomendasi";
import DashboardRiwayatRedeem from "../../components/DashboardRiwayatRedeem";
import DashboardRiwayatTransaksi from "../../components/DashboardRiwayatTransaksi";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";

function DashboardPage() {
  const percentage = 13;
  return (
    <div>
      <UserDashboardNavbarComponent />
      <div className="container mx-auto ">
        {/* sisi kiri */}
        <div className="grid grid-cols-1  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
          {/* sisi kiri */}
          <div className="grid grid-cols-1 ">
            <div className="grid grid-cols-2  gap-x-3 sm:gap-x-3 md:gap-x-3  lg:gap-x-0 xl:gap-x-0 mt-10 mx-2">
              <div className="flex justify-center ">
                <DashboardPointComponent />
              </div>
              <div className="flex justify-center">
                <DashboardPointViewComponent percentage={percentage} />
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center ">
              <DashboardReedemPoint />
            </div>
            <div className="grid grid-cols-1 justify-items-center ">
              <DashboardReedemRekomendasi />
            </div>
          </div>
          {/* sisi kanan */}
          <div className="grid ">
            <div className="">
              <DashboardRiwayatTransaksi />
            </div>
            <div className="">
              <DashboardRiwayatRedeem />
            </div>
          </div>
        </div>
      </div>
      <UserFooterComponent />
    </div>
  );
}

export default DashboardPage;
