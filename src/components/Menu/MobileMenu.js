// == Import utils
import { NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';
import useOnClickOutside from '../../utils/useOnClickOutside';

// == Import style
import './mobilemenu.scss';
import MenuBurger from '../../assets/icons/menu.svg';
import Cross from '../../assets/icons/cross.svg';

const MobileMenu = () => {
  // Action to toggle mobile menu
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="mobile-menu-container">
      <hr />
      <div>
        <button type="button" onClick={toggleMenu} className="menu-burger open">
          <img src={MenuBurger} alt="" />
        </button>
      </div>
      {open && (
      <div className="menu" ref={ref}>
        <button type="button" onClick={toggleMenu} className="menu-burger close">
          <img src={Cross} alt="" />
        </button>
        <nav className="menu-navbar">
          <NavLink onClick={toggleMenu} to="/" className="menu-navbar-nav">Home</NavLink>
          <NavLink onClick={toggleMenu} to="/competences" className="menu-navbar-nav">Compétences</NavLink>
          <NavLink onClick={toggleMenu} to="/projets" className="menu-navbar-nav">Projets</NavLink>
          <NavLink onClick={toggleMenu} to="/contact" className="menu-navbar-nav">Contact</NavLink>
        </nav>
      </div>
      )}
    </div>
  );
};

export default MobileMenu;
