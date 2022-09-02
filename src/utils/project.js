/* eslint-disable max-len */
import ULDesktop from '../assets/screenshots/ul_desktop.png';
import PortfolioDesktop from '../assets/screenshots/portfolio_desktop.png';

const projects = [
  {
    id: 1,
    title: 'Ultimate List',
    subtitle: 'Projet fin de formation',
    content: 'Ultimate List est une application web vous permettant de créer des to-do list / wishlist améliorées, pour sauvegarder et organiser tous vos souvenirs et recommandations de vos amis ! Pour le moment, les listes s\'orientent sur les jeux vidéo 🎮, les podcasts 📻 et les films 🎥.',
    additionnalContent: 'L\'application a été développée en front-end avec React JS par <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/louiselaroche/">Louise Laroche</a> et moi-même, ainsi qu\'avec le framework Symfony en back-end par <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/oriane-berti/">Oriane Berti</a> et <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/timothe-perigois/">Timothé Périgois</a>',
    technos: [
      'React JS',
      'Hooks',
      'Redux',
    ],
    links: [
      {
        title: 'Voir la démo sur YouTube',
        link: 'https://youtu.be/yBA6xYkmB5s?t=1477',
      },
      {
        title: 'Repo GitHub',
        link: 'https://github.com/juliebeZiat/ultimate-list',
      },
    ],
    screenshots: [
      ULDesktop,
    ],
  },
  {
    id: 2,
    title: 'Portfolio',
    subtitle: 'Projet personnel',
    content: 'Ce portfolio personnel est mon tout premier site web que je réalise from scratch et en solo.',
    additionnalContent: '',
    technos: [
      'React JS',
    ],
    links: [
      {
        title: 'Repo GitHub',
        link: 'https://github.com/juliebeZiat/portfolio',
      },
    ],
    screenshots: [
      PortfolioDesktop,
    ],
  },
  // {
  //   id: 3,
  //   title: 'Movie App',
  //   subtitle: 'Projet fictif',
  //   content: 'Movie App est une application mobile réalisée lors de ma montée en compétence à mon arrivée dans l\'entreprise AZOT.',
  //   additionnalContent: '',
  //   technos: [
  //     'React Native',
  //     'TypeScript',
  //     'Redux Toolkit',
  //     'React Hook Form',
  //     'React Query',
  //   ],
  //   links: [],
  //   screenshots: [
  //     PortfolioDesktop,
  //   ],
  // },
];

export default projects;
