import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import "./Skills.css"
import { RiRainbowFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills(){

  const skills = [

    {
    name: "HTML5",
    icon: <FaHtml5/>,
    color: "#E34f26",
    },

    {
    name: "CSS3",
    icon:<FaCss3Alt/>,
    color: "#1572B6",
        },
        
    {
    name: "Java Script",
    icon:<FaJs/>,
     color: "#F7DF1E",
        },

    {
    name: "React.js",
    icon:<FaReact/>,
    color: "#61DAFB",
        },

    {
    name: "Bootstrap",
    icon:<FaBootstrap/>,
    color: "#7952B3",
        },
    
    {
    name: "Tailwind CSS",
    icon:<RiRainbowFill/>,
    color: "#06B6D4",
        },


    {
    name: "Node.js",
    icon:<FaNodeJs/>,
    color: "#5FA04E",
        },          
        
    {
    name: "Exress.js",
    icon:<SiExpress/>,
    color: "#FFFFFF",
        },

    {
    name: "MongoDB",
    icon:<SiMongodb/>,
    color: "#47A248",
        },


    {
    name: "MySQL",
    icon:<SiMysql/>,
     color: "#4479A1",
        },


    {
    name: "Git",
    icon:<FaGitAlt/>,
    color: "#F05032",
        },


  {
    name: "GitHub",
    icon:<FaGithub/>,
    color: "#FFFFFF",
        },

       
  { 
    name: "VS Code",
    icon: <VscVscode/>,
    color: "#007ACC",
      },
  ];

  return(
    <section className="skills" id="skills">
      <div className="skills-container">
        
        <h2 className="section-title">My SKills</h2>
        
       <p className="section-subtitle">
        Technologies and tools I use to build modern, responsive, and scalable web applications.
      </p>
       

        <div className="skills-grid">
          {skills.map((skill,index) =>(
          
          <div className="skill-card" key={index}>
            
            <div className="skill-icon"
            style={{color: skill.color}}>
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
            </div>
          
          ))} 
          </div>
      </div>
    </section>
  );
  
}

export default Skills;