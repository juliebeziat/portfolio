import { Link } from 'react-router-dom';
import './error.scss';
import ErrorGif from '../../assets/gif/error404.gif';

const Error = () => (
  <div className="error">
    <h1>Oops ! Cette page n'est pas disponible</h1>
    <div><img src={ErrorGif} alt="" /></div>
    <Link to="/">Retourner à l'accueil</Link>
  </div>
);

export default Error;
