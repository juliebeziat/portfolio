// == Import utils
import { NavHashLink } from 'react-router-hash-link';

// == Import style
import './desktopmenu.scss';
import Logo from '../../assets/icons/logo-julie.png';
import Toggle from '../../assets/icons/toggle.svg';
import BackTop from '../../assets/icons/back_to_top.svg';

const DesktopMenu = () => (
  <div className="section-menu">
    <div className="desktop-menu">
      <NavHashLink to="/#home" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
        <img className="desktop-menu-logo" src={Logo} alt="logo-portfolio" />
      </NavHashLink>
      <NavHashLink to="/#home" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} className="desktop-menu-nav">
        Accueil
      </NavHashLink>
      <NavHashLink to="/#competences" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} className="desktop-menu-nav">
        Compétences
      </NavHashLink>
      <div>
        <img className="desktop-menu-icon" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} src={Toggle} alt="dark-light-mode" />
      </div>
      <NavHashLink to="/#projets" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} className="desktop-menu-nav">
        Projets
      </NavHashLink>
      <NavHashLink to="/#contact" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} className="desktop-menu-nav">
        Contact
      </NavHashLink>
    </div>
    <div className="back-to-top">
      <NavHashLink to="/#home" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} className="desktop-menu-nav">
        <img src={BackTop} alt="retour en haut du site" />
      </NavHashLink>
    </div>
  </div>
);

export default DesktopMenu;
