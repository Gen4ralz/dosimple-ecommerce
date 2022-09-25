import { Link } from 'react-router-dom';
import { ListBulletIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-56 h-screen bg-gray-800 z-10 transition-all`}
    >
      <XMarkIcon
        className="absolute top-4 right-4 w-7 h-7 text-white sm:hidden block cursor-pointer"
        onClick={closeSidebar}
      />
      <div className="p-4">
        <img src="/logo.svg" alt="logo" width={100} height={100} />
      </div>
      <ul className="mt-4">
        <li className="px-4 py-3 flex items-center text-white  hover:bg-gray-600 cursor-pointer transition-all">
          <Link to="/dashboard/products">
            <ListBulletIcon className="h-6 w-6 text-white mr-2 inline-block"></ListBulletIcon>
            Products
          </Link>
        </li>
        <li className="px-4 py-3 flex items-center text-white  hover:bg-gray-600 cursor-pointer transition-all">
          <Link to="/dashboard/products">
            <ShoppingBagIcon className="h-6 w-6 text-white mr-2 inline-block"></ShoppingBagIcon>
            Orders
          </Link>
        </li>
        <li className="px-4 py-3 flex items-center text-white  hover:bg-gray-600 cursor-pointer transition-all">
          <Link to="/dashboard/products">
            <UserGroupIcon className="h-6 w-6 text-white mr-2 inline-block"></UserGroupIcon>
            Customers
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
