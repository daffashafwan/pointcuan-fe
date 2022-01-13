import React from "react";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";

import { useParams } from "react-router-dom";
import RedeemNavigasiComponent from "../../components/RedeemNavigasiComponent";
import RedeemDaftarComponent from "../../components/RedeemDaftarComponent";

function RedeemPage() {
  const params = useParams();
  const category = params.categoryName;

  console.log(category);

  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <UserDashboardNavbarComponent />
      </div>
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto pt-20">
          <RedeemNavigasiComponent category={category} />

          {/* batas */}
          <RedeemDaftarComponent category={category} />
        </div>
      </div>
      <div>
        <UserFooterComponent />
      </div>
    </div>
  );
}

export default RedeemPage;
