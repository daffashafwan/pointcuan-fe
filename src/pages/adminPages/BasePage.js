import AdminSidebar from "../../components/AdminSidebar";
import AdminSidebarToggler from "../../components/AdminSidebarToggler";
import { AppProvider } from "../../contexts/AdminSidebarContext";
import FeaturePage from "./features/FeaturesPage";

const BasePage = () => {
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