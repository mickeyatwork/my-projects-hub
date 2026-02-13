import { projects } from '../ProjectData';
import ProjectCard from './ProjectCard';

const Home = () => {
  return (
    <div>
      <h1>Mickey's Project Hub</h1>
      <div className="project-grid">
        {projects.map((project) => (
           <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;