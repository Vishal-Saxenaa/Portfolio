import "./Hero.css";
import profile from "../../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return( 
    <section className="hero">

      <div className = "hero-left">
        
        <h1>Hi, I'm Vishal Saxena 👋 </h1>

        <h2>Computer Instructor | Java Full Stack Developer</h2>

        <p>Passionate Computer Instructor with knowledge of JAVA, React, HTML, CSS and JavaScript. I enjoy buildiing modern web applications and continuously learninng new technologies.</p>

        <div className="hero-buttons">
          <button className="btn-primary">Hire Me</button>
          <button className="btn-secondary">Download Resume</button>
          
        </div>
       <div className="social-icons">
        <a href="https://github.com/Vishal-Saxenaa" 
        target="_blank" 
        rel="noreferrer"
        >
        <FaGithub/>
        </a>

        <a href="https://www.linkedin.com/in/vishal-saxena-310017207/" target="_blank" rel="noreferrer">
          <FaLinkedin/>
        </a>

        <a href="mailto:saxenaji789@gmail.com">
        <FaEnvelope/>
        </a>


       </div>
      
      </div>

      <div className="hero-right"> 
        <img src= {profile} alt = "Vishal Saxena" />
      </div>
    
    </section>
  );
}

export default Hero;