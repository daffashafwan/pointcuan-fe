import React from "react";
import TableRiwayatRedeem from "../../components/TableRiwayatRedeem";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";

function RiwayatRedeemPage() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <UserDashboardNavbarComponent />
      </div>
      <div className="flex-grow">
        <div className="container mx-auto pt-20">
          <div>
            <h1 className="md:mx-10 text-center md:text-left font-bold text-3xl mt-2">
              Daftar Redeem
            </h1>
            <TableRiwayatRedeem />
          </div>
        </div>
      </div>
      <div>
        <UserFooterComponent />
      </div>
    </div>
  );
}

export default RiwayatRedeemPage;
