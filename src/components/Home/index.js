// == Import style
import './home.scss';
import Arrow from '../../assets/icons/arrow.svg';
// import ModalCV from '../Modal/CV';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

const Home = () => (
  <div className="home" id="home">
    <h1 className="home-title">Bonjour</h1>
    <p className="home-text">Je suis Julie Beziat, développeuse web junior et je recherche une <span>alternance</span> pour Juin 2022.</p>
    <div className="home-button">
      <button type="button" className="home-button-cv">
        CV
        <img src={Arrow} alt="" />
      </button>
    </div>
    {/* <ModalCV /> */}
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default Home;
