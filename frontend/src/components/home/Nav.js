import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  return (
    <nav className="nav">
      <div className="my-container">
        <div className="flex justify-between  items-center">
          <Link to="/">
            <img src="./logo.svg" alt="logo" width={100} height={100} />
          </Link>
          <ul className="flex items-center">
            <li className="nav-li">
              <MagnifyingGlassIcon className="w-8 h-8 text-white" />
            </li>
            {userToken ? (
              <li className="nav-li text-white font-bold">
                <Link to="/user">{user?.name}</Link>
              </li>
            ) : (
              <li className="nav-li">
                <Link to="/login">
                  <UserIcon className="h-8 w-8 text-white" />
                </Link>
              </li>
            )}
            <li className="nav-li relative">
              <Link to="/cart">
                <ShoppingBagIcon className="w-8 h-8 text-white" />
                <span className="nav-circle">10</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
