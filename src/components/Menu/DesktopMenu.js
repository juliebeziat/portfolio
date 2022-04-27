// == Import utils
import { NavLink } from 'react-router-dom';

// == Import style
import './desktopmenu.scss';
import Logo from '../../assets/icons/logo-julie.png';

const DesktopMenu = () => (
  <div className="section-menu">
    <div className="desktop-menu">
      <NavLink to="/" scroll>
        <img className="desktop-menu-logo" src={Logo} alt="logo-portfolio" />
      </NavLink>
      <NavLink to="/" scroll className="desktop-menu-nav">
        Accueil
      </NavLink>
      <NavLink to="/competences" scroll className="desktop-menu-nav">
        Compétences
      </NavLink>
      <NavLink to="/projets" scroll className="desktop-menu-nav">
        Projets
      </NavLink>
      <NavLink to="/contact" scroll className="desktop-menu-nav">
        Contact
      </NavLink>
    </div>
  </div>
);

export default DesktopMenu;
