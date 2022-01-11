import React, { useState, useContext, createContext } from 'react';

const AdminContext = createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	return (
		<AdminContext.Provider
			value={{ isSidebarOpen, openSidebar, closeSidebar }}
		>
			{children}
		</AdminContext.Provider>
	);
};

export { AdminContext, AppProvider };
