// == Import utils
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// == Import style
import './App.scss';
import DarkMode from '../../assets/icons/darkmode.svg';
import LightMode from '../../assets/icons/lightmode.svg';

// == Import components
import Menu from '../Menu';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Home from '../Home';
import Error from '../Error';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  document.body.style.backgroundColor = darkTheme ? 'white' : '#121212';

  return (
    <div id={darkTheme ? 'light-mode' : 'dark-mode'}>
      <Menu />
      <button className="change-mode" type="button" onClick={() => setDarkTheme(!darkTheme)}>
        {!darkTheme && (
          <>
            <div className="change-mode-circle-dark" />
            <img className="change-mode-icon-dark" src={LightMode} alt="" />
          </>
        )}
        {darkTheme && (
          <>
            <img className="change-mode-icon-light" src={DarkMode} alt="" />
            <div className="change-mode-circle-light" />
          </>
        )}
      </button>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
