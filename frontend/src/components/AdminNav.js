import { Link } from 'react-router-dom';
import { ListBulletIcon } from '@heroicons/react/24/outline';

const AdminNav = ({ openSidebar }) => {
  return (
    <nav className="fixed left-0 sm:left-56 top-0 right-0 mx-4">
      <div className="bg-gray-800 w-full flex p-4 justify-between sm:justify-end items-center">
        <ListBulletIcon
          className="w-8 h-8 text-white cursor-pointer sm:hidden block"
          onClick={openSidebar}
        />
        <Link
          to="/"
          className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
