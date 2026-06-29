import "./About.css"
import profile from "../../assets/images/profile2.png";
import { FaDownload } from "react-icons/fa";
function About() {
  return (
<section className="about">

  <div className="about-left">
    <img src={profile} alt="Vishal Saxena" /> 
  </div>
  
  <div className="about-right">

    <h2>About <span>Me</span></h2>

    <p>I am Vishal Saxena, a Computer Instructor with a passion for web development and programming.</p>

    <p>I enjoy building modern web applications using Java, React, JavaScript, HTML and CSS. I am always eager to learn new technologies and improve my skills.</p>

    <div className="about-details">
      
      <div>
        <span>Name : </span> 
        <p>Vishal Saxena</p>
      </div>

      <div>
        <span>Education : </span> 
        <p>BCA</p>
      </div>

      <div>
        <span>Role : </span> 
        <p>Computer Instructor</p>
      </div>

      <div>
        <span>Experience : </span> 
        <p>Government IT Project</p>
      </div>

      <div>
        <span>Skill : </span> 
        <p>HTML, CSS, JavaScript, Node.js, React, Mongodb, Talewind, PHP, MySql</p>
      </div>

      <div>
        <span>Location : </span> 
        <p>Uttar Pradesh, India</p>
      </div>
     

      <div className="about-btn">

        <button className="btn-primary"><FaDownload />Download Resume</button>
      
      </div>
    </div>

  </div>

</section>
  );
}

export default About;