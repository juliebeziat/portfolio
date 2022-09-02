/* eslint-disable max-len */
// == Import utils and component
import { useState } from 'react';
import ModalCV from '../Modal/CV';
import experiences from '../../utils/experiences';

// == Import style
import './contact.scss';
import GitHub from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import Mail from '../../assets/icons/mail.svg';
import Phone from '../../assets/icons/phone.svg';
import Arrow from '../../assets/icons/arrow.svg';

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1><span>*</span>Contact</h1>
      </div>
      <div className="contact-container">
        <div className="about">
          <h2 className="about-title">Mon Parcours</h2>
          <div className="about-timeline">
            {experiences.map((experience) => (
              <ul>
                <li>
                  <div className="about-timeline-content">
                    <span>{experience.date}</span>
                    <h3>{experience.title}</h3>
                    <p>{experience.place}</p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="infos">
          <h2 className="infos-title">Let's work together <span>♥‿♥</span></h2>
          <div className="infos-links">
            <a href="mailto:juliebeziat.m@gmail.com">M'envoyer un mail <img src={Arrow} alt="" /></a>
            <button type="button" onClick={toggleModal}>CV <img src={Arrow} alt="" /></button>
          </div>
          <div className="infos-content">
            <p><img src={Mail} alt="icone mail" /> mail: <a href="mailto:juliebeziat.m@gmail.com">juliebeziat.m@gmail.com</a></p>
            <p><img src={GitHub} alt="icone mail" /> github: <a href="https://github.com/juliebeZiat">@julie-beziat</a></p>
            <p><img src={LinkedIn} alt="icone mail" /> linkedin: <a href="https://www.linkedin.com/in/julie-beziat/">julie-beziat</a></p>
            <p><img src={Phone} alt="icone mail" /> téléphone: 06.66.64.42.50</p>
          </div>
        </div>
      </div>
      {openModal && <ModalCV openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Contact;
