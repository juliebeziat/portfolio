/* eslint-disable max-len */
import './projects.scss';
import Arrow from '../../assets/icons/arrow.svg';

// Screenshots
import ULDesktop from '../../assets/screenshots/ul_desktop.png';
import PortfolioDesktop from '../../assets/screenshots/portfolio_desktop.png';

const Projects = () => (
  <div className="projects">
    <h1 className="projects-title"><span>*</span>Projets</h1>
    <div className="projects-list">
      <div className="projects-list-content ultimate-list">
        <div className="projects-list-container">
          <div className="projects-list-title">
            <h2>Ultimate List</h2>
            <h3>Projet fin de formation</h3>
          </div>
          <div className="projects-list-description">
            <p>Ultimate List est une application web vous permettant de créer des to-do list / wishlist améliorées, pour sauvegarder et organiser tous vos souvenirs et recommandations de vos amis ! Pour le moment, les listes s'orientent sur les jeux vidéo 🎮, les podcasts 📻 et les films 🎥.</p>
            <p>L'application a été développée en front-end avec React JS par <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/louiselaroche/">Louise Laroche</a> et moi-même, ainsi qu'avec le framework Symfony en back-end par <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oriane-berti/">Oriane Berti</a> et <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/timothe-perigois/">Timothé Périgois</a>.</p>
          </div>
          <div className="projects-list-technos">
            <span>React JS</span>
            <span>Hooks</span>
            <span>Redux</span>
          </div>
          <div className="projects-list-buttons">
            <a href="https://youtu.be/yBA6xYkmB5s?t=1477" target="_blank" rel="noreferrer">Voir la démo sur YouTube <img src={Arrow} alt="" /></a>
            <a href="https://github.com/juliebeZiat/ultimate-list" target="_blank" rel="noreferrer">Repo GitHub <img src={Arrow} alt="" /></a>
          </div>
        </div>
        <div className="projects-list-screenshots">
          <div className="projects-list-screenshots-desktop"><img src={ULDesktop} alt="" /></div>
        </div>
      </div>
      <div className="projects-list-content portfolio">
        <div className="projects-list-container">
          <div className="projects-list-title">
            <h2>Portfolio</h2>
            <h3>Projet personnel</h3>
          </div>
          <div className="projects-list-description">
            <p>Ce portfolio personnel est mon tout premier site web que je réalise from scratch et en solo.</p>
          </div>
          <div className="projects-list-technos">
            <span>React JS</span>
          </div>
          <div className="projects-list-buttons">
            <a href="https://github.com/juliebeZiat/portfolio" target="_blank" rel="noreferrer">Repo GitHub <img src={Arrow} alt="" /></a>
          </div>
        </div>
        <div className="projects-list-screenshots">
          <div className="projects-list-screenshots-desktop"><img src={PortfolioDesktop} alt="" /></div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
