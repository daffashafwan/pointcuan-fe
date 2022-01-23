import React, { useEffect } from "react";
import UserDashboardNavbarComponent from "../../views/UserDashboardNavbarComponent";
import UserFooterComponent from "../../views/UserFooterComponent";
import { AppProvider } from "../../contexts/RedeemContext";
import { useParams } from "react-router-dom";
import RedeemNavigasiComponent from "../../components/RedeemNavigasiComponent";
import RedeemDaftarComponent from "../../components/RedeemDaftarComponent";
import { useNavigate } from "react-router-dom";
import { read_cookie, delete_cookie } from 'sfcookies';

function RedeemPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (read_cookie('user_cred').length < 1) {
      navigate('/');
    }
  })
  const params = useParams();
  const category = params.categoryId;

  console.log(category);

  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <UserDashboardNavbarComponent />
      </div>
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto pt-20">
          <AppProvider>
            <RedeemNavigasiComponent category={category} />

            {/* batas */}
            <RedeemDaftarComponent category={category} />
          </AppProvider>
        </div>
      </div>
      <div>
        <UserFooterComponent />
      </div>
    </div>
  );
}

export default RedeemPage;
