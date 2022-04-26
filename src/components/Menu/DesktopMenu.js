// == Import utils
import { NavLink } from 'react-router-dom';

// == Import style
import './desktopmenu.scss';
import Logo from '../../assets/icons/logo-julie.png';
import Toggle from '../../assets/icons/toggle.svg';

const DesktopMenu = () => (
  <div className="desktop-menu">
    <NavLink to="/"><img className="desktop-menu-logo" src={Logo} alt="logo-portfolio" /></NavLink>
    <NavLink to="/" className="desktop-menu-nav">Accueil</NavLink>
    <NavLink to="/competences" className="desktop-menu-nav">Compétences</NavLink>
    <div><img className="desktop-menu-icon" src={Toggle} alt="dark-light-mode" /></div>
    <NavLink to="/projets" className="desktop-menu-nav">Projets</NavLink>
    <NavLink to="/contact" className="desktop-menu-nav">Contact</NavLink>
  </div>
);

export default DesktopMenu;
