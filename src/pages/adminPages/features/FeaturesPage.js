import React, { useEffect, useContext, useState } from 'react';
import { AdminContext } from "../../../contexts/AdminContext";
import PCRPage from "./PCRPage";
import { Route, Switch } from "react-router";
import { links } from '../../../datas/AdminSidebarData';

const FeaturePage = () => {
    const [componentss, setComponent] = useState()
    const { menu, setMenu, isSidebarOpen, closeSidebar } = useContext(AdminContext);
    useEffect(() => {
        links.map((index) => {
            if (index.id === menu) {
                console.log(menu)
                setComponent(index)
            }
        })
    }, [menu])
    if (componentss) {
        return (
            <>
                {componentss.components}
            </>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default FeaturePage;