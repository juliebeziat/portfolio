/* eslint-disable max-len */
import './contact.scss';
import GitHub from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import Mail from '../../assets/icons/mail.svg';
import Phone from '../../assets/icons/phone.svg';
import Arrow from '../../assets/icons/arrow.svg';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="contact-title">
      <h1><span>*</span>Contact</h1>
    </div>
    <div className="contact-container">
      <div className="about">
        <h2 className="about-title">À propos de moi</h2>
        <p>Après une formation en développement web de 6 mois chez l'école O'Clock où j'ai pu expérimenter plusieurs langages, frameworks et librairies, j'ai décidé de m'orienter vers une alternance au sein de la même structure dans le but d'approfondir mes connaissances sur la programmation tout en apportant mes compétences au sein d'une entreprise.</p>
        <p>Issue d'une formation complète en Marketing digital, j'ai pu découvrir le monde du développement web il y a quelques années grâce à une de mes expériences dans laquelle je travaillais directement auprès de développeurs et développeuses web. </p>
        <p>Ayant toujours été très passionnée par l'informatique en général, et après avoir découvert le monde du développement web, je peux enfin dire que j'ai trouvé ma voie. Effectivement, ce monde nous offre la possibilité de créer et surtout d'apprendre et ce de façon illimitée, deux notions quasi indispensables à mon bien-être. Tout cela agrémenter d'un côté technique et logique, je suis aujourd'hui passionnée et très fière à l'idée de passer mes journées à coder (et à faire des commit !).</p>
      </div>

      <div className="infos">
        <h2 className="infos-title">Let's work together <span>♥‿♥</span></h2>
        <div className="infos-links">
          <a href="mailto:juliebeziat.m@gmail.com">M'envoyer un mail <img src={Arrow} alt="" /></a>
          <a href="/">CV <img src={Arrow} alt="" /></a>
        </div>
        <div className="infos-content">
          <p><img src={Mail} alt="icone mail" /> mail: <a href="mailto:juliebeziat.m@gmail.com">juliebeziat.m@gmail.com</a></p>
          <p><img src={GitHub} alt="icone mail" /> github: <a href="https://github.com/juliebeZiat">@julie-beziat</a></p>
          <p><img src={LinkedIn} alt="icone mail" /> linkedin: <a href="https://www.linkedin.com/in/julie-beziat/">julie-beziat</a></p>
          <p><img src={Phone} alt="icone mail" /> téléphone: 06.66.64.42.50</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
