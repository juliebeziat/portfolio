// == Import style
import './App.scss';

// == Import utils
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// == Import components
import Menu from '../Menu';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';
import Home from '../Home';
import Error from '../Error';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div id={darkTheme ? 'light-mode' : 'dark-mode'}>
      <Menu />
      <button className="change-mode" type="button" onClick={() => setDarkTheme(!darkTheme)}>CHANGE MODE</button>
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
