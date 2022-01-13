import React, { useState, useContext, createContext } from 'react';

const AdminContext = createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [menu, setMenu] = useState(1)

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	return (
		<AdminContext.Provider
			value={{ isSidebarOpen, openSidebar, closeSidebar, menu, setMenu }}
		>
			{children}
		</AdminContext.Provider>
	);
};

export { AdminContext, AppProvider };
