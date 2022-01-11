import { Routes, Route } from "react-router-dom";
import LoginAdminPage from "./pages/adminPages/LoginAdminPage";
import DashboardPage from "./pages/userPages/DashboardPage";
import ForgetPasswordPage from "./pages/userPages/ForgetPasswordPage";
import LoginPage from "./pages/userPages/LoginPage";
import RegisterPage from "./pages/userPages/RegisterPage";
import ResetPassword from "./pages/userPages/ResetPassword";
import RiwayatRedeemPage from "./pages/userPages/RiwayatRedeemPage";
import RiwayatTransaksiPage from "./pages/userPages/RiwayatTransaksiPage";
import BasePage from "./pages/adminPages/BasePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/riwayattransaksi" element={<RiwayatTransaksiPage />} />
        <Route path="/riwayatredeem" element={<RiwayatRedeemPage />} />

        <Route path="/loginadmin" element={<LoginAdminPage />} />
        <Route
          path="/forgetpassword/resetpassword"
          element={<ResetPassword />}
        />

        <Route
          path="/admin"
          element={<BasePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
