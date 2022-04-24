import './cv.scss';
import Cross from '../../../assets/icons/cross.svg';

const ModalCV = () => {
  return (
    <div className="modal-cv">
      <div className="modal-cv-content">
        <img className="modal-cv-content-icon" src={Cross} alt="" />
        <h1>Voulez-vous télécharger mon CV ?</h1>
        <div className="modal-cv-buttons">
          {/* Download file to check when built */}
          <button type="button"><a target="_blank" href="../../../assets/icons/arrow.svg" download rel="noopener noreferrer">Oui 😉</a></button>
          <button type="button">Non, pas encore 🙃</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCV;