import React from "react";
import { useNavigate } from "react-router";

function UserFooterComponent() {
  const navigate = useNavigate();
  return (
    <div className="bg-white border-t-2 border-gray text-center font-semibold py-2 text-xs md:text-sm mt-10 ">
      Tutorial • Cara Kerja •
      <button
        className=" py-4 text-xs md:text-sm  font-semibold  border-t-2 border-gray "
        onClick={() => navigate("/faq")}
      >
        FAQ
      </button>
      • Syarat dan Ketentuan • Kebijakan Privasi
    </div>
  );
}

export default UserFooterComponent;
