// == Import style
import './menu.scss';

// == Import utils
import { useEffect, useState } from 'react';

// == Import components
import MobileMenu from './MobileMenu';
// import DesktopMenu from './DesktopMenu';

const Menu = () => {
  // Declare a state variable to fetch window width
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  // Event listener that updates the width state variables when window size changes
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div>
      {/* If width < 1024, then show MobileMenu (burger), if no, show DesktopMenu */}
      {width < breakpoint && <MobileMenu />}
    </div>
  );
};

export default Menu;
