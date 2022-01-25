import { useContext, useState, useEffect } from "react";
import { AdminContext } from "../contexts/AdminContext";
import { links } from '../datas/AdminSidebarData';
import { MenuIcon } from '@heroicons/react/solid';
import { Route, Switch } from "react-router";
import { delete_cookie } from "sfcookies";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AdminSidebar = () => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)
    const [clicked, setClicked] = useState(1)
    const { menu, setMenu, isSidebarOpen, closeSidebar } = useContext(AdminContext);
    const handleMenu = (idx) => {
        setMenu(idx)
    }
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])
    const handleLogout = () =>{
        delete_cookie('admin_cred');
        delete_cookie('jwt_admin');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Berhasil Logout',
            showConfirmButton: false,
            timer: 1200
        });
        setTimeout(function(){
            navigate('/loginadmin');
        }, 1500)
    }


    return (

        <div
            className={`transition-all  duration-500  fixed top-0 ${isSidebarOpen ? 'left-0' : '-left-64'
                }`}
        >
            <div className="flex h-screen overflow-y-auto flex-col bg-white  w-64 px-4 py-8 border-r min-h-screen relative">
                <button
                    onClick={closeSidebar}
                    className="absolute top-1 right-1  text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800"
                >
                    <MenuIcon className="w-5 h-5" />
                </button>
                <h2 className="text-3xl font-semibold text-gray-800">
                    POINTCUAN <span className="text-indigo-500 ml-1">Admin</span>
                </h2>
                <div className="relative mt-6">
                    <label
                        className="absolute inset-y-0 left-0 pl-3 flex items-center "
                        htmlFor="searchP"
                    >
                        <MenuIcon className="w-5 h-5 text-gray-400 hover:text-gray-500" />
                    </label>
                    <input
                        id="searchP"
                        type="text"
                        placeholder="Search"
                        className="w-full border border-gray-300 hover:border-gray-400 pl-10 py-3 pr-4 text-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col mt-6  justify-between flex-1">
                    <nav className="text">
                        {links.map((link, index) => {
                            const { id, url, text, icon } = link;
                            return (
                                <a
                                    key={id}
                                    onClick={() => handleMenu(id)}
                                    className={`capitalize btn-menu btn-${id} flex items-center px-4 py-2 ${index > -1
                                        ? 'mt-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-200 transform'
                                        : null
                                        } rounded-md`}
                                >
                                    {icon}
                                    <span className="mx-4 font-medium">
                                        {text}
                                    </span>
                                </a>
                            );
                        })}
                        <hr className="my-6" />
                    </nav>
                    <div className="flex items-center px-4 -mx-2 mt-5">
                        <h4 className="mx-2 font-medium text-gray-800 hover:underline cursor-pointer">
                            Admin
                        </h4>
                        <button onClick={handleLogout}>
                            <h5 className="mx-2 font-medium text-orange-800 hover:underline cursor-pointer">
                                Logout
                            </h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSidebar;