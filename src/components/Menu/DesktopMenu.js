// == Import style
import './menu.scss';

// == Import utils
import { NavLink } from 'react-router-dom';

const DesktopMenu = () => {

  return (
    <div>
      <div className='menu'>
        <nav className='menu-navbar'>
          <NavLink to='/' className='menu-navbar-nav'>Home</NavLink>
          <NavLink to='/competences' className='menu-navbar-nav'>Compétences</NavLink>
          <NavLink to='/projets' className='menu-navbar-nav'>Projets</NavLink>
          <NavLink to='/contact' className='menu-navbar-nav'>Contact</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;
