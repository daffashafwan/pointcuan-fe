import React, { useState, useContext, createContext } from 'react';

const AdminContext = createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [onEdit, setOnEdit] = useState(false);
	const [approve, setApprove] = useState(false);
	const [activate, setActivate] = useState(false);
	const [onDelete, setOnDelete] = useState(false);
	const [menu, setMenu] = useState(1)
	const [contextData, setContextData] = useState();

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AdminContext.Provider
			value={{ activate, setActivate, isSidebarOpen, openSidebar, closeSidebar, menu, setMenu, contextData, setContextData, openModal, closeModal, isModalOpen, onEdit, setOnEdit, onDelete, setOnDelete, approve, setApprove }}
		>
			{children}
		</AdminContext.Provider>
	);
};

export { AdminContext, AppProvider };
