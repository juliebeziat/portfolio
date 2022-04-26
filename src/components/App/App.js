// == Import style
import './App.scss';

// == Import utils
import { Route, Routes } from 'react-router-dom';

// == Import components
import Menu from '../Menu';
import Home from '../Home';

const App = () => (
  <>
    <Menu />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </>
);

export default App;
