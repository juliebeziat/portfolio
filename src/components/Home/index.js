// == Import utils, components
import { useState } from 'react';
import ModalAlt from '../Modal/Alternance';

// == Import style
import './home.scss';
import Portrait from '../../assets/icons/portrait-julie.png';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="app-container">
      <div className="home" id="home">
        <h1 className="home-title"><span>&#123;</span> Bonjour <span>&#125;</span></h1>
        <p className="home-text">
          Je suis Julie Beziat, développeuse web junior et je recherche une
          <span className="home-text-arrow">=&gt;</span>
          <span className="home-text-underline">*</span>
          <button type="button" onClick={(toggleModal)}>alternance</button>
          pour Juin 2022 <span className="home-text-dot">••</span>
        </p>
        <div className="home-profile">
          <img src={Portrait} alt="portrait" />
          <div className="home-profile-content">
            <p className="home-profile-content-title">Julie Beziat</p>
            <div className="home-profile-content-links">
              <a target="_blank" rel="noreferrer" href="https://github.com/juliebeZiat" className="home-profile-content-links-1">github</a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julie-beziat/" className="home-profile-content-links-2">linkedin</a>
            </div>
          </div>
        </div>
      </div>
      {openModal && <ModalAlt openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Home;
