/* eslint-disable max-len */
import './skills.scss';
import dataSkills from '../../utils/icons';

const Skills = () => (
  <div className="competences">
    <div className="skills">
      <h1 className="skills-title"><span>*</span>Compétences</h1>
      <h2 className="subtitle"><span>•</span> Les langages, outils et frameworks que j’utilise</h2>
      <ul className="skills-list">
        {dataSkills.map((skill) => (
          <li className="skills-list-skill" key={skill.icon}>
            <img src={skill.icon} alt="" className="skills-list-skill-icon" />
            <p className="skills-list-skill-title">{skill.title}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="secondary-skills">
      <h2 className="subtitle"><span>&hearts;</span> Autres compétences</h2>
      <div className="secondary-skills-lists">
        <h3 className="secondary-skills-lists-subtitle">Webdesign / Design</h3>
        <ul>
          <li>Photoshop, Illustrator</li>
          <li>Figma</li>
          <li>WordPress</li>
          <li>Wix</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
