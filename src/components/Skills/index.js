import './skills.scss';
import dataSkills from '../../functions/icons';
import DesktopMenu from '../Menu/DesktopMenu';

const Skills = () => {
  return (
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
      <DesktopMenu />
    </div>
  );
};

export default Skills;
