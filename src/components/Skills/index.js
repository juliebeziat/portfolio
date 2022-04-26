/* eslint-disable max-len */
import './skills.scss';
import dataSkills from '../../functions/icons';

const Skills = () => (
  <div className="about-skills">
    <div className="about">
      <h1 className="about-title">À propos de moi</h1>
      <p>Après une formation en développement web de 6 mois chez l'école O'Clock où j'ai pu expérimenter plusieurs langages, frameworks et librairies, j'ai décidé de m'orienter vers une alternance au sein de la même structure dans le but d'approfondir mes connaissances sur la programmation tout en apportant mes compétences au sein d'une entreprise.</p>
      <p>Issue d'une formation complète en Marketing digital, j'ai pu découvrir le monde du développement web il y a quelques années grâce à une de mes expériences dans laquelle je travaillais directement auprès de développeurs et développeuses web. </p>
      <p>Ayant toujours été très passionnée par l'informatique en général, et après avoir découvert le monde du développement web, je peux enfin dire que j'ai trouvé ma voie. Effectivement, ce monde nous offre la possibilité de créer et surtout d'apprendre et ce de façon illimitée, deux notions quasi indispensables à mon bien-être. Tout cela agrémenter d'un côté technique et logique, je suis aujourd'hui passionnée et très fière à l'idée de passer mes journées à coder (et à faire des commit !).</p>
    </div>
    <div className="skills">
      <h1 className="skills-title">Compétences</h1>
      <ul className="skills-list">
        {dataSkills.map((skill) => (
          <li className="skills-list-skill" key={skill.icon}>
            <img src={skill.icon} alt="" className="skills-list-skill-icon" />
            <p className="skills-list-skill-title">{skill.title}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Skills;
