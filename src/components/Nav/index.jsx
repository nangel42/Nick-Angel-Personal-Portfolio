import { useState } from "react"
import Resume from '../../assets/docs/Nicolas Angel Resume 3-23.pdf'
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {

    const [hamOpen, setHamOpen] = useState(false)

    const location = useLocation();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    

    return (
        <div className="bg-gray-700">
            <nav className="flex justify-between items-center p-4 bg-gray-700">
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

                <ul className="flex items-center justify-center space-x-4">
                    <li className={`mx-2 ${location.pathname === '/About' ? 'text-blue-400 hover:text-white' : ''}`}>
                        <Link
                        to="/About"
                        onClick={() => scrollToSection('about-section')}
                        className="text-blue-400 hover:text-white"
                        >
                        About
                        </Link>
                    </li>

                    <li className={`mx-2 ${location.pathname === '/Projects' ? 'text-purple-400 hover:text-white' : ''}`}>
                        <Link
                        to="/Projects"
                        onClick={() => scrollToSection('project-section')}
                        className="text-purple-400 hover:text-white"
                        >
                        Projects
                        </Link>
                    </li>

                    <li className={`mx-2 ${location.pathname === '/Contact' ? 'text-yellow-400 hover:text-white' : ''}`}>
                        <Link
                        to="/Contact"
                        onClick={() => scrollToSection('contact-section')}
                        className="text-yellow-400 hover:text-white"
                        >
                        Contact
                        </Link>
                    </li>

                    <li className="mx-2 bg-gray-500 px-4 py-2 rounded-lg">
                        <a href={Resume} className="text-lime-400 font-bold hover:text-white" target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}