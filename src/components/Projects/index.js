/* eslint-disable max-len */
import './projects.scss';
import Arrow from '../../assets/icons/arrow.svg';
import projects from '../../utils/project';

const Projects = () => (
  <div className="projects">
    <h1 className="projects-title"><span>*</span>Projets</h1>
    <div className="projects-list">
      {projects.map((project) => (
        <div className="projects-list-content ultimate-list" key={project.id}>
          <div className="projects-list-container">
            <div className="projects-list-title">
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
            </div>
            <div className="projects-list-description">
              <p>{project.content}</p>
              <p dangerouslySetInnerHTML={{ __html: project.additionnalContent }} />
            </div>
            <div className="projects-list-technos">
              {project.technos.map((techno) => (
                <span>{techno}</span>
              ))}
            </div>
            <div className="projects-list-buttons">
              {project.links.map((link) => (
                <a href={link.link} target="_blank" rel="noreferrer">{link.title} <img src={Arrow} alt="" /></a>
              ))}
            </div>
          </div>
          <div className="projects-list-screenshots">
            <div className="projects-list-screenshots-desktop"><img src={project.screenshots} alt="" /></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
