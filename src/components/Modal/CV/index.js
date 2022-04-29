import './cv.scss';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Cross from '../../../assets/icons/cross.svg';
import useOnClickOutside from '../../../functions/useOnClickOutside';

const ModalCV = ({ openModal, setOpenModal }) => {
  // Function used to close modal wherever we click
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenModal(false));

  return (
    <div>
      {openModal && (
        <div className="modal-cv">
          <div className="modal-cv-content" ref={ref}>
            <img className="modal-cv-content-icon" onClick={() => setOpenModal(false)} src={Cross} alt="" />
            <h1>Voulez-vous télécharger mon CV ?</h1>
            <div className="modal-cv-buttons">
              {/* Download file to check when built */}
              <button type="button"><a target="_blank" href="../../../assets/cv-julie-beziat.pdf" download rel="noopener noreferrer">Oui 😉</a></button>
              <button type="button" onClick={() => setOpenModal(false)}>Non, pas encore 🙃</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ModalCV.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ModalCV;
