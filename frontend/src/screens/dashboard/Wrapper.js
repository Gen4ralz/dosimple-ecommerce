import { useState } from 'react';
import AdminNav from '../../components/AdminNav';
import Sidebar from '../../components/Sidebar';

const Wrapper = ({ children }) => {
  const [side, setSide] = useState('-left-56');
  const openSidebar = () => {
    setSide('left-0');
  };
  const closeSidebar = () => {
    setSide('-left-56');
  };
  return (
    <>
      <Sidebar side={side} closeSidebar={closeSidebar} />
      <AdminNav openSidebar={openSidebar} />
      <section className="ml-0 sm:ml-56 bg-gray-900 min-h-screen pt-28 px-4">
        <div className="text-white bg-gray-800 p-4">{children}</div>
      </section>
    </>
  );
};

export default Wrapper;
