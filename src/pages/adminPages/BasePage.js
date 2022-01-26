import React, { useEffect } from 'react';
import AdminSidebar from "../../components/AdminSidebar";
import AdminSidebarToggler from "../../components/AdminSidebarToggler";
import { AppProvider } from "../../contexts/AdminContext";
import { HEADER_API_ADMIN } from '../../config/urlApi';
import FeaturePage from "./features/FeaturesPage";
import { read_cookie, delete_cookie } from 'sfcookies';
import { useNavigate } from 'react-router-dom';


const BasePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        
        if (read_cookie('admin_cred').length < 1) {
            navigate('/loginadmin');
        }
        if(HEADER_API_ADMIN.headers.Authorization === "Bearer "){
            window.location.reload()
          }
    })
    return (
        <AppProvider>
            <>
                <div className="grid grid-cols-5">
                    <div className="grid grid-cols-1">
                        <AdminSidebarToggler />
                        <AdminSidebar />
                    </div>
                    <div className="relative col-span-4">
                        <FeaturePage />
                    </div>
                </div>
            </>
        </AppProvider>
    )
}

export default BasePage;