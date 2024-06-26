// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Notefy.in</Link>
      {/* Add navigation links here */}
    </nav>
  );
};

export default Header;
