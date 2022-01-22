import { CameraIcon } from '@heroicons/react/solid'
import PCRPage from '../pages/adminPages/features/PCRPage';
import TransactionPage from '../pages/adminPages/features/Transaction/TransactionPage';
import CategoryPage from '../pages/adminPages/features/Category/CategoryPage';
import UserPage from '../pages/adminPages/features/User/UserPage';
import RedeemPage from '../pages/adminPages/features/RedeemPage';
import ItemPage from '../pages/adminPages/features/Item/ItemPage';
import FAQPage from '../pages/adminPages/features/FAQ/FAQPage';

export const links = [
	{
		id: 1,
		url: '/admin/pcr',
		text: 'PCR',
		icon: <CameraIcon className="w-5 h-5" />,
		components: <PCRPage />
	},
	{
		id: 2,
		url: '/grocery-bud',
		text: 'Transactions',
		icon: <CameraIcon className="w-5 h-5" />,
		components: <TransactionPage />
	},
	{
		id: 3,
		url: '/navbar',
		text: 'User',
		icon: <CameraIcon className="w-5 h-5" />,
		components: <UserPage />
	},
	{
		id: 4,
		url: '/sidebar',
		text: 'Redeem',
		icon: <CameraIcon className="w-5 h-5" />,
		components: <RedeemPage />
	},
	{
		id: 5,
		url: '/sidebar',
		text: 'Item',
		icon: <CameraIcon className="w-5 h-5" />,
		components: <ItemPage />
	},
	{
		id: 6,
		url: '/sidebar',
		text: 'Category',
		icon: <CameraIcon className="w-5 h-5" />,
		components: <CategoryPage />
	},
	{
		id: 7,
		url: '/sidebar',
		text: 'FAQ',
		icon: <CameraIcon className="w-5 h-5" />,
		components: <FAQPage />
	},
];