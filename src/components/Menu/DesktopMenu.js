// == Import style
import './menu.scss';

// == Import utils
import { NavLink } from 'react-router-dom';

const DesktopMenu = () => {

  // Function to change name and link of buttons on different pages of the app
  const buttonsName = () => {
    switch (window.location.pathname) {
      case '/': 
        return [
          {
            name: 'Contact',
            link: '/contact'
          },
          {
            name: 'Compétences',
            link: '/competences'
          }
        ];
      case '/competences': 
        return [
          {
            name: 'Accueil',
            link: '/'
          },
          {
            name: 'Projets',
            link: '/projets'
          },
        ];
      case '/projets': 
        return [
          {
            name: 'Compétences',
            link: '/competences'
          },
          {
            name: 'Contact',
            link: '/contact'
          },
        ];
      case '/contact': 
        return [
          {
            name: 'Projets',
            link: '/projets'
          },
          {
            name: 'Accueil',
            link: '/'
          },
        ];
      default: return '/';
    };
  };

  return (
    <div>
      <div className='menu-buttons'>
        <nav className='menu-buttons-navbar'>
          <NavLink to={buttonsName()[0].link} className='menu-buttons-navbar-nav'>{buttonsName()[0].name}</NavLink>
          <NavLink to={buttonsName()[1].link} className='menu-buttons-navbar-nav'>{buttonsName()[1].name}</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;
