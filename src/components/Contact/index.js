import DesktopMenu from '../Menu/DesktopMenu';
import './contact.scss';
import GitHub from '../../assets/icons/github.svg';
import LinkedIn from '../../assets/icons/linkedin.svg';
import Mail from '../../assets/icons/mail.svg';
import Gif from '../../assets/gif/junimo.webp';

const Contact = () => {
  return (
    <div className="contact">
      <DesktopMenu />
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
          <a href="https://github.com/juliebeZiat" className="contact-social-icon"><img src={GitHub} alt="" /></a>
          <a href="https://www.linkedin.com/in/julie-beziat/" className="contact-social-icon"><img src={LinkedIn} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
