import React, {useEffect} from 'react';
import AdminSidebar from "../../components/AdminSidebar";
import AdminSidebarToggler from "../../components/AdminSidebarToggler";
import { AppProvider } from "../../contexts/AdminContext";
import FeaturePage from "./features/FeaturesPage";
import { read_cookie, delete_cookie } from 'sfcookies';
import { useNavigate } from 'react-router-dom';


const BasePage = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(read_cookie('admin_cred').length < 1){
            navigate('/loginadmin');
        }
    })
    return (
        <AppProvider>
            <>
                <div className="grid grid-rows-1">
                    <div className="relative grid grid-cols-1">
                        <FeaturePage />
                    </div>
                    <div className="grid grid-cols-1">
                        <AdminSidebarToggler />
                        <AdminSidebar />
                    </div>
                </div>
            </>
        </AppProvider>
    )
}

export default BasePage;