/* eslint-disable max-len */
import './alternance.scss';
import Cross from '../../../assets/icons/cross.svg';

const ModalAlt = () => (
  <div className="modal-alt">
    <div className="modal-alt-content">
      <img src={Cross} alt="fermer fenêtre" />
      <h2><span>*</span>Détails de l'alternace</h2>
      <ul className="details">
        <li>Contrat d’apprentissage - Éligible à la prime de 8000€</li>
        <li>Rythme de l’alternance: 2 semaines en entreprises / 1 semaine en formation</li>
        <li>Durée de la formation : 16 mois dont 13 mois en alternance et 3 mois en entreprise à 100%</li>
      </ul>
      <h2><span>*</span>Modalités</h2>
      <ul className="infos">
        <li>École: O’Clock</li>
        <li>Certification préparée: Titre Professionnel de niveau 6 (équivalent Bac +3/4) “Concepteur Développeur d’Applications”</li>
        <li>Référence: RNCP31678</li>
        <li>Code NSF: 326t, Programmation, mise en place de logiciels</li>
      </ul>
    </div>
  </div>
);

export default ModalAlt;
