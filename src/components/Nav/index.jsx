import { useState } from "react"
import Resume from '../../assets/docs/Nicolas Angel Resume 8-23.pdf'
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Nav() {
    // Nav Elements
    const navSections = [
        {
          name: 'About',
          id: 'about-section',
          colorClass: 'text-blue-400',
        },
        {
          name: 'Projects',
          id: 'project-section',
          colorClass: 'text-purple-400',
        },
        {
          name: 'Contact',
          id: 'contact-section',
          colorClass: 'text-yellow-400',
        },
      ];

    // Controls Hamburger Menu
    const [hamOpen, setHamOpen] = useState(false)

    // Controls Nav Bar Scrolling
    const location = useLocation();
    // Scroll to Section and adjusts for mobile screen size
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const offset = element.offsetTop - navbarHeight;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    };
    

return (
    <div className="bg-gray-700">
    {/* Nav Bar */}
      <nav className="flex flex-col md:flex-row justify-between p-4 bg-gray-700">
        {/* Nick Script Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold">
            <div>
              <span style={{ color: '#FFFF00' }}>{'{'}</span>
              <span style={{ color: '#F92672' }}> Nick </span>
              <span style={{ color: '#FFFF00' }}>{'}'}</span>
              <span style={{ color: '#FFFFFF' }}> </span>
              <span style={{ color: '#66D9EF' }}>Script</span>
              <span style={{ color: '#FFFF00' }}>!</span>
            </div>
          </h1>
        </div>
        {/* Controls Nav Elements with Hamburger Menu */}
        <div className={`md:flex flex-col md:flex-row items-center md:items-stretch mt-4 md:mt-0 ${!hamOpen ? 'hidden' : 'flex flex-col items-center'}`}>
          <ul className="flex items-center space-x-4 lg:flex">
            {navSections.map((section) => (
              <li 
                key={section.id}
                className={`mx-2 ${location.pathname === `/${section.name}` ? 'text-white' : ''}`}
              >
                {/* Nav Bar Elements Map and Scroll */}
                <Link
                  to={`/${section.name}`}
                  onClick={() => {
                    scrollToSection(section.id);
                    setHamOpen(false);
                  }}
                  className={`${section.colorClass} hover:text-white`}
                >
                  {section.name}
                </Link>
              </li>
            ))}
            {/* Resume Link */}
            <li className="mx-2 bg-gray-500 px-4 py-2 rounded-lg">
              <a href={Resume} className="text-lime-400 font-bold hover:text-white" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div className={`md:hidden ml-auto -mt-7`}>
          <button className="text-white" onClick={() => setHamOpen(!hamOpen)}>
            {hamOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
  

}