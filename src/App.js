import { Routes, Route } from "react-router-dom";
import LoginAdminPage from "./pages/adminPages/LoginAdminPage";
import ForgetPasswordPage from "./pages/userPages/ForgetPasswordPage";
import LoginPage from "./pages/userPages/LoginPage";
import RegisterPage from "./pages/userPages/RegisterPage";
import ResetPassword from "./pages/userPages/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
        <Route path="/loginadmin" element={<LoginAdminPage />} />
        <Route
          path="/forgetpassword/resetpassword"
          element={<ResetPassword />}
        />
      </Routes>
    </div>
  );
}

export default App;
