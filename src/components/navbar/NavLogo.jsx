import React from 'react';
import { Link } from 'react-router';
import logo from "../../assets/logo.svg";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="Hash Plus Logo" className="h-12" />
    </Link>
  );
};

export default NavLogo;
