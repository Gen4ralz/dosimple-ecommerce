import {
  ArrowLeftOnRectangleIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/reducers/authReducer';

const AccountList = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout('userToken'));
  };
  return (
    <>
      <NavLink to="/user" className="account-list">
        <UserCircleIcon className="w-8 h-8" />
        <span className="account-list-title">my account</span>
      </NavLink>
      <NavLink to="/orders" className="account-list">
        <ShoppingCartIcon className="w-8 h-8" />
        <span className="account-list-title">orders</span>
      </NavLink>
      <span className="account-list cursor-pointer" onClick={logoutHandler}>
        <ArrowLeftOnRectangleIcon className="w-8 h-8" />
        <span className="account-list-title">logout</span>
      </span>
    </>
  );
};

export default AccountList;
