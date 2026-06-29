import "./About.css"
import profile from "../../assets/images/profile2.png";
function About() {
  return (
<section className="about">

  <div className="about-left">
    <img src={profile} alt="Vishal Saxena" /> 
  </div>
  
  <div className="about-right">

    <h2>About Me</h2>

    <p>I am Vishal Saxena, a Computer Instructor with a passion for web development and programming.</p>

    <p>I enjoy building modern web applications using Java, React, JavaScript, HTML and CSS. I am always eager to learn new technologies and improve my skills.</p>

  </div>

</section>
  );
}

export default About;