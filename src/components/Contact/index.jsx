import GitHub from '../../assets/images/GitHub-logo-white.png';
import LinkedIn from "../../assets/images/linkedin.png";

export default function Contact() {
    return (
      <div className="bg-gray-900">
        {/* Needed for Nav Bar Scroll */}
        <br id="contact-section"/>
        <div className="flex flex-col items-center">
          {/* Main Header */}
          <div className="flex flex-wrap sm:flex-nowrap">
            <h1 className="text-5xl md:text-5xl font-bold text-center mb-8">
              <div>
                <span style={{ color: '#C586C0' }}> Let's </span>
                <span style={{ color: '#FFFFFF' }}> </span>
                <span style={{ color: '#FFB862' }}>Work</span>
                <span style={{ color: '#FFFFFF' }}> </span>
                <div className="sm:hidden -mb-8">
                  <br />
                </div>
                <span style={{ color: '#FFFF00' }}>{'('}</span>
                <span style={{ color: '#FFFFFF' }}> </span>
                <span style={{ color: '#569CD6' }}> Together</span>
                <span style={{ color: '#569CD6 ' }}>{'!'}</span>
                <span style={{ color: '#FFFFFF' }}> </span>
                <span style={{ color: '#FFFF00' }}>{')'}</span>
                <span style={{ color: '#D4D4D4' }}>{':'}</span>
              </div>
            </h1>
          </div>
          {/* Second Header */}
          <h2 className="text-3xl font-bold text-white mt-4">
            Drop me a line!
          </h2>
          <div className= "max-w-6xl mx-4 bg-gray-300 bg-opacity-60 rounded-md p-4 my-8 text-center">
            {/* Paragraph */}
            <div className="max-w-xl mx-auto px-4">
              <p className="text-xl md:text-2xl text-center text-black mt-4">
                I am always looking for new opportunities to learn and grow as a developer! 
              </p>
              <p className="text-xl md:text-2xl text-center text-black mt-4">
                If you have any questions or would like to get in touch, please feel free to reach out to me at:
              </p>
            </div>
            {/* Email Button */}
            <a href="mailto:az_nick_angel@ymail.com" className="inline-block px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600">
              Email
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center mt-8 mb-10">
            <a href="https://github.com/nangel42" target="_blank">
              <img src={GitHub} className="mx-2 object-contain w-25 h-16 md:w-25 md:h-20" alt="GitHub"/>
            </a>

            <a href="https://www.linkedin.com/in/nicolasangel/" target="_blank">
              <img src={LinkedIn} className="mx-2 object-contain w-16 h-16 md:w-20 md:h-20" alt="LinkedIn"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
  