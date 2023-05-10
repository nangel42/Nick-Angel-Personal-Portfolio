import GitHub from '../../assets/GitHub-logo-white.png';
import LinkedIn from "../../assets/linkedin.png";

export default function Contact() {

    return (
      <div className="bg-gray-900">
  
      <h1 className="text-3xl font-bold underline text-white">
        Contact Me!
      </h1>
      
      <h2 className="text-3xl font-bold text-white">
        I am always looking for new opportunities to learn and grow as a developer. 
        If you have any questions or would like to get in touch, please feel free to reach out to me at:
      </h2>

      <a href="https://github.com/nangel42" target="_blank">
        <img src={GitHub}/>
      </a>

      <a href="https://www.linkedin.com/in/nicolasangel/" target="_blank">
        <img src={LinkedIn}/>
      </a>
  
      </div>
    )
  }
  