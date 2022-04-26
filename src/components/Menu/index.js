// == Import utils
import { useEffect, useState } from 'react';

// == Import components
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Menu = () => {
  // Objective : Mobile Menu when screen width is under 1024px
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <div>
      {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
};

export default Menu;
