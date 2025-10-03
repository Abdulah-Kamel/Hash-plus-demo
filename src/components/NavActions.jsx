import React from 'react';
import NavSearch from './NavSearch';

const NavActions = () => {
  return (
    <div className="hidden lg:flex items-center gap-2 lg:order-2">
      <NavSearch />
      <button
        type="button"
        className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-full text-sm px-5 py-2 text-center"
      >
        تسجيل الدخول
      </button>
    </div>
  );
};

export default NavActions;
