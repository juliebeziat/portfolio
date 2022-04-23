import MobileMenu from './MobileMenu';
import './menu.scss';
import { useEffect, useState } from 'react';
import DesktopMenu from './DesktopMenu';

const Menu = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div>
      {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
};

export default Menu;
