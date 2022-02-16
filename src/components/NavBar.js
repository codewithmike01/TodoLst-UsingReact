import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="Nav-bar">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose className="menu-close " />
        ) : (
          <IoIosMenu className="open-menu" />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li>
          <Link to="/" onClick={() => closeMenu()} className="link">
            {' '}
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => closeMenu()} className="link">
            {' '}
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}
