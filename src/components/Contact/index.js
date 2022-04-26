/* eslint-disable max-len */
import './contact.scss';
import GitHub from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import Mail from '../../assets/icons/mail.svg';
import Gif from '../../assets/gif/junimo.webp';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="contact-header">
      <h1>Me contacter</h1>
    </div>
    <div className="contact-gif"><img src={Gif} alt="" /></div>
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-content-icon"><img src={Mail} alt="" /></div>
        <a href="mailto:juliebeziat.m@gmail.com" className="contact-content-mail">juliebeziat.m@gmail.com</a>
        <p className="contact-content-phone">06.66.64.42.50</p>
      </div>
      <div className="contact-social">
        <a aria-label="github" target="_blank" rel="noreferrer" href="https://github.com/juliebeZiat" className="contact-social-icon"><img src={GitHub} alt="" /></a>
        <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/julie-beziat/" className="contact-social-icon"><img src={LinkedIn} alt="" /></a>
      </div>
    </div>
    <div className="about">
      <h1 className="about-title">À propos de moi</h1>
      <p>Après une formation en développement web de 6 mois chez l'école O'Clock où j'ai pu expérimenter plusieurs langages, frameworks et librairies, j'ai décidé de m'orienter vers une alternance au sein de la même structure dans le but d'approfondir mes connaissances sur la programmation tout en apportant mes compétences au sein d'une entreprise.</p>
      <p>Issue d'une formation complète en Marketing digital, j'ai pu découvrir le monde du développement web il y a quelques années grâce à une de mes expériences dans laquelle je travaillais directement auprès de développeurs et développeuses web. </p>
      <p>Ayant toujours été très passionnée par l'informatique en général, et après avoir découvert le monde du développement web, je peux enfin dire que j'ai trouvé ma voie. Effectivement, ce monde nous offre la possibilité de créer et surtout d'apprendre et ce de façon illimitée, deux notions quasi indispensables à mon bien-être. Tout cela agrémenter d'un côté technique et logique, je suis aujourd'hui passionnée et très fière à l'idée de passer mes journées à coder (et à faire des commit !).</p>
    </div>
  </div>
);

export default Contact;
