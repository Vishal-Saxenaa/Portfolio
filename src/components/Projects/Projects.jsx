import "./Projects.css"

function Projects(){
  return(
    <section className="project" id="projects">
      <div className="project-container">
        <h2 className="project-title">
          Featured Projects
        </h2>

        <p className="project-subtitle">
          A collection of modern MERN Stack and AI-based applications that showcase my skills in full-stack development, problem-solving, and building real-world solutions.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
             
              <div className="project-image">
                Project Image
              </div>
             
              <h3>{project.title}</h3>
             
              <p>{project.description}</p>
              <div className="tech-stack">
              {project.tech.map((tech, index)=>(
                <span className="tech-badge" key={index}>
                  {tech}
                </span>
              ))}
              </div>

              
            </div>
          
          ))}
        </div>
      
        </div>

    </section>
  );
}

const projects =[
  {
   id: 1,
    title: "URL Shortener",
    description:
      "A modern URL Shortener with authentication, QR code generation, and click analytics.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "Multi Utility Widget Hub",
    description:
      "A collection of useful widgets like Calculator, BMI, EMI, Weather, QR Code, and more.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "AI Project",
    description:
      "An AI-powered MERN application using modern AI APIs to solve real-world problems.",
    tech: ["React", "Node.js", "AI API"],
    github: "#",
    live: "#",
  },

  {
    id: 4,
    title: "Library / Coaching Management",
    description:
      "A complete management system with authentication, dashboard, attendance, and reports.",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
] ;

export default Projects;