// == Import style
import './App.scss';

// == Import utils
import { Route, Routes } from 'react-router-dom';

// == Import components
import Menu from '../Menu';
import Home from '../Home';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

const App = () => (
  <>
    <Menu />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </>
);

export default App;
