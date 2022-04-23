import './home.scss';
import Arrow from '../../assets/arrow.svg';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Bonjour</h1>
      <p className="home-text">Je suis Julie Beziat, développeuse web junior et je recherche une <span>alternance</span> pour Juin 2022.</p>
      <div className="home-button">
        <button type="button" className="home-button-cv">
          CV
          <img src={Arrow} alt="" />
        </button>
        <button type="button" className="home-button-contact">
          Contact
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Home;
