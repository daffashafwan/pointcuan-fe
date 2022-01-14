import React, { useContext } from 'react';
import { MenuIcon } from '@heroicons/react/solid';
import { AdminContext } from "../contexts/AdminContext"
const AdminSidebarToggler = () => {
	const { openSidebar, isSidebarOpen } = useContext(AdminContext);

	return (
		<main>
			<button
				onClick={openSidebar}
				className={`${
					isSidebarOpen ? '-translate-x-8' : 'translate-x-0'
				} fixed top-2 transition transform ease-linear duration-500 text-gray-600 w-8 h-8 rounded-full flex items-center justify-center active:bg-gray-300 focus:outline-none ml-6 hover:bg-gray-200 hover:text-gray-800`}
			>
				<MenuIcon className="w-5 h-5" />
			</button>
		</main>
	);
};

export default AdminSidebarToggler;
