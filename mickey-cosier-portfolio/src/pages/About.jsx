import React from 'react';

const About = () => {
  // We separate the skills data to make it easy to update later
  const skills = [
    "Java", 
    "HTML / CSS", 
    "SQL (Postgres & SQL Server)", 
    "JavaScript (jQuery & React)", 
    "Hosting & Deployment", 
    "XML", 
    "API Development", 
    "Source Control (Git)"
  ];

  return (
    <div className="about-page" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h1>About Me</h1>
      
      
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-main)' }}>
        I am a developer with a strong foundation in backend architecture and database management. 
        My core expertise lies in <strong>Java</strong> and <strong>SQL</strong>, where I focus on building 
        robust, data-driven applications.
      </p>
      
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-main)' }}>
        Recently, I have been expanding my frontend capabilities, transitioning into modern frameworks like 
        <strong>React</strong>. I believe in owning the code from database to deployment, dealing with everything 
        from <strong>APIs</strong> to <strong>Hosting & Deployment</strong>.
      </p>

   
      <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>My Tech Stack</h3>
      <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;