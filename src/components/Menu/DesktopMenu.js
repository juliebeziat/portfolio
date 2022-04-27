// == Import utils
import { NavLink } from 'react-router-dom';

// == Import style
import './desktopmenu.scss';
import Logo from '../../assets/icons/logo-julie.png';

const DesktopMenu = () => (
  <div className="section-menu">
    <div className="desktop-menu">
      <NavLink to="/">
        <img className="desktop-menu-logo" src={Logo} alt="logo-portfolio" />
      </NavLink>
      <NavLink to="/" className="desktop-menu-nav">
        Accueil
      </NavLink>
      <NavLink to="/competences" className="desktop-menu-nav">
        Compétences
      </NavLink>
      <NavLink to="/projets" className="desktop-menu-nav">
        Projets
      </NavLink>
      <NavLink to="/contact" className="desktop-menu-nav">
        Contact
      </NavLink>
    </div>
    <hr />
  </div>
);

export default DesktopMenu;
