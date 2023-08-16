import JMR from '../../assets/images/JuliosMexicanRecipes.png';
import SWT from '../../assets/images/DarthVader.gif';
import BXB from '../../assets/images/LegoGuys.png';
import GitHub from '../../assets/images/GitHub-logo-white.png';
import LinkIcon from '../../assets/images/linkIcon.png';

export default function Projects() {
    return (
      <div className="bg-gray-900" id="project-section">{/* Needed for Nav Bar Scroll */}
        <div className="text-center mt-8">
          {/* Header */}
          <h1 className="text-5xl md:text-5xl font-bold text-center">
            <div>
              <span style={{ color: '#C586C0' }}> Nick's </span>
              <span style={{ color: '#FFFFFF' }}> </span>
              <span style={{ color: '#569CD6' }}>Code</span>
              <span style={{ color: '#FFFFFF' }}> </span>
              <div className="sm:hidden -mb-8">
                    <br />
              </div>
              <span style={{ color: '#FFFF00' }}>{'('}</span>
              <span style={{ color: '#C586C0' }}>{'{'}</span>
              <span style={{ color: '#FFFFFF' }}> </span>
              <span style={{ color: '#33AA5B' }}> Adventures</span>
              <span style={{ color: '#569CD6 ' }}>{'!'}</span>
              <span style={{ color: '#FFFFFF' }}> </span>
              <span style={{ color: '#C586C0' }}>{'}'}</span>
              <span style={{ color: '#FFFF00' }}>{')'}</span>
            </div>
          </h1>
          <br />
          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Star Trivia */}
            <div className="w-full overflow-hidden aspect-w-1 aspect-h-1 p-4">
              <div className="max-w-6xl mx-auto bg-gray-300 bg-opacity-60 rounded-md p-4 my-8">
                {/* Title */}
                <h1 className="text-3xl font-bold text-black mb-4">
                  Star Trivia!
                </h1>
                {/* Description */}
                <p className="flex justify-center text-black text-xl m-5">
                  Discover "Star Trivia!" - a MERN stack app showcasing my expertise in React, JavaScript, MongoDB, and Express. 
                  This immersive application offers a customizable Star Wars trivia experience with seamless CRUD functionality, 
                  SWAPI integration for universe information, and a captivating journey through the galaxy. 
                  Click below to explore the site and put your knowledge to the test!
                </p>
                {/* Technology Used */}
                <p className="flex flex-wrap justify-center text-black text-xl m-5">
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">ANT Design</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Mongoose</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">MongoDB</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Express.js</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">React.js</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Node.js</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Axios</span>
                  <span className="bg-blue-400 p-2 mb-2">Vite</span>
                </p>
                {/* Icon Links */}
                <div className="flex justify-center space-x-4 md:space-x-8">
                  <a href="https://github.com/nangel42/Star-Wars-Quiz-App" target="_blank">
                    <img src={GitHub} className="my-4 object-contain w-20 h-10 md:w-20 md:h-12" alt="Star Trivia! GitHub" />
                  </a>
                  <a href="https://star-wars-trivia-game.herokuapp.com/" target="_blank">
                    <img src={LinkIcon} className="my-4 object-contain w-10 h-10 md:w-20 md:h-12" alt="Star Trivia! Link" />
                  </a>
                </div>
                {/* Link to Deployed App With Picture*/}
                <a href="https://star-wars-trivia-game.herokuapp.com/" target="_blank">
                  <img src={SWT} className="mx-auto object-contain w-full md:w-3/4 h-auto md:h-3/4" alt="Star Trivia!" />
                </a>
              </div>
            </div>
            {/* Brick By Brick */}
            <div className="w-full overflow-hidden aspect-w-1 aspect-h-1 p-4">
              <div className="max-w-6xl mx-auto bg-gray-300 bg-opacity-60 rounded-md p-4 my-8">
                {/* Title */}
                <h1 className="text-3xl font-bold text-black underline mb-4">
                  Brick By Brick
                </h1>
                {/* Description */}
                <p className="flex justify-center text-black text-xl m-5">
                  "Brick by Brick" was a collaborative group project where we utilized Django, Python 3, JavaScript, HTML5, Materialize CSS, Heroku, 
                  and PostgreSQL for full-stack development. This dynamic platform integrated the Brick-links API, empowering users to log in, 
                  search, compare LEGO sets, and track their owned pieces. With a focus on sustainability and cost-effectiveness, 
                  it encouraged users to use their existing Lego parts for new builds while fostering a sense of community through shared build options.
                </p>
                {/* Technology Used */}
                <p className="flex flex-wrap justify-center text-black text-xl m-5">
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Django</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Python 3</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">JavaScript</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">HTML5</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Materialize CSS</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Heroku</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">PostgreSQL</span>
                </p>
                {/* Icon Links */}
                <div className="flex justify-center space-x-4 md:space-x-8">
                  <a href="https://github.com/jimcreel/BrickByBrick" target="_blank">
                    <img src={GitHub} className="my-4 object-contain w-20 h-10 md:w-20 md:h-12" alt="Brick by Brick GitHub" />
                  </a>
                  <a href="https://brickbybrick.herokuapp.com/" target="_blank">
                    <img src={LinkIcon} className="my-4 object-contain w-10 h-10 md:w-20 md:h-12" alt="Brick by Brick Link" />
                  </a>
                </div>
                {/* Link to Deployed App With Picture*/}
                <a href="https://brickbybrick.herokuapp.com/" target="_blank">
                  <img src={BXB} className="mx-auto object-contain w-full md:w-3/4 h-auto md:h-3/4" alt="Brick by Brick" />
                </a>
              </div>
            </div>
            {/* Julio's Mexican Recipes */}
            <div className="w-full overflow-hidden aspect-w-1 aspect-h-1 p-4">
              <div className="max-w-6xl mx-auto bg-gray-300 bg-opacity-60 rounded-md p-4 my-8">
                {/* Title */}
                <h1 className="text-3xl font-bold text-black underline mb-4">
                  Julio's Mexican Recipes
                </h1>
                {/* Description */}
                <p className="flex justify-center text-black text-xl m-5">
                  I built Julio's Mexican Recipes, a MEN stack app utilizing EJS, MongoDB, JavaScript, HTML5, CSS, Heroku, and Express. 
                  It offers a user-friendly platform for discovering and sharing authentic Mexican recipes, with a comprehensive 
                  recipe database and community features for connecting with food enthusiasts. Showcase your culinary skills and connect 
                  with fellow foodies on Julio's Mexican Recipes.
                </p>
                {/* Technology Used */}
                <p className="flex flex-wrap justify-center text-black text-xl m-5">
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">EJS</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">MongoDB</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">JavaScript</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">HTML5</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">CSS</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Heroku</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Express</span>
                </p>
                {/* Icon Links */}
                <div className="flex justify-center space-x-4 md:space-x-8">
                  <a href="https://github.com/nangel42/julios-mexican-recipes" target="_blank">
                    <img src={GitHub} className="my-4 object-contain w-20 h-10 md:w-20 md:h-12" alt="Julios Mexican Recipes GitHub" />
                  </a>
                  <a href="https://project-jmr-c23ef061641e.herokuapp.com/" target="_blank">
                    <img src={LinkIcon} className="my-4 object-contain w-10 h-10 md:w-20 md:h-12" alt="Julios Mexican Recipes Link" />
                  </a>
                </div>
                {/* Link to Deployed App With Picture*/}
                <a href="https://project-jmr-c23ef061641e.herokuapp.com/" target="_blank">
                  <img src={JMR} className="mx-auto object-contain w-full md:w-3/4 h-auto md:h-3/4" alt="Julio's Mexican Recipes" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  