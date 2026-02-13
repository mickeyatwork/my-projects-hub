// A reusable card component
const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      {/* <img src={project.image} alt={project.title} style={{width: '100%', borderRadius: '8px'}} /> */}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <button>Launch Project</button>
      </a>
    </div>
  );
};

export default ProjectCard;