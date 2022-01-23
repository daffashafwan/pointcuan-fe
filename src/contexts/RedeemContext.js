import React, { useState, useContext, createContext } from 'react';

const RedeemContext = createContext();

const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [contextData, setContextData] = useState();

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<RedeemContext.Provider
			value={{ contextData, setContextData, openModal, closeModal, isModalOpen }}
		>
			{children}
		</RedeemContext.Provider>
	);
};

export { RedeemContext, AppProvider };
