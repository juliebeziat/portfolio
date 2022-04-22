// == Import style
import './App.css';

// == Import components
import Home from '../Home';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
