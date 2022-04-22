import { NavLink } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
    return (
        <div className='menu'>
            <nav className='menu-navbar'>
                <NavLink to='/' className='menu-navbar-nav'>Home</NavLink>
                <NavLink to='/competences' className='menu-navbar-nav'>Compétences</NavLink>
                <NavLink to='/projets' className='menu-navbar-nav'>Projets</NavLink>
                <NavLink to='/contact' className='menu-navbar-nav'>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Menu;
