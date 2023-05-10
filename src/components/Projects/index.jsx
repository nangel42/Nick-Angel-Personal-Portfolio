import JMR from '../../assets/images/JuliosMexicanRecipes.png';
import SWT from '../../assets/images/DarthVader.gif';
import BXB from '../../assets/images/LegoGuys.png';
import GitHub from '../../assets/images/GitHub-logo-white.png';
import LinkIcon from '../../assets/images/linkIcon.png';

export default function Projects() {
    return (
      <div className="bg-gray-900">
        {/* Needed for Nav Bar Scroll */}
        <br id="project-section"/>
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
                  Looking for a customizable Star Wars trivia experience? Check out "Star Trivia!" - a MERN stack app with user-selected 
                  and pre-selected questions for all ages. Powered by MongoDB and SWAPI, it offers study resources and immersive access to Star Wars data, 
                  making it ideal for fans and casual users alike. Try it now and put your knowledge to the test in a galaxy far, far away!
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
                  Brick by Brick offers an engaging and user-friendly experience for browsing Lego sets, 
                  focusing on sustainability by utilizing users' existing Lego parts for new builds. It promotes cost-effectiveness, 
                  reducing the need to purchase sets at high reseller prices, and emphasizes convenience with a user-friendly interface. 
                  The platform also fosters a sense of community by allowing users to explore and share their build options with others.
                </p>
                {/* Technology Used */}
                <p className="flex flex-wrap justify-center text-black text-xl m-5">
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Django</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Python 3</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Javascript</span>
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

                Julio's Mexican Recipes is a MEN stack application that offers a user-friendly platform for discovering and 
                sharing authentic Mexican recipes. With its comprehensive recipe database, personalized profiles, 
                and community features, users can easily explore, save, and connect with fellow food enthusiasts. 
                Whether you're looking to spice up your cooking routine or connect with a vibrant culinary community, Julio's Mexican Recipes has you covered.
                </p>
                {/* Technology Used */}
                <p className="flex flex-wrap justify-center text-black text-xl m-5">
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">EJS</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">MongoDB</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Javascript</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">HTML5</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">CSS</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Heroku</span>
                  <span className="bg-blue-400 p-2 mb-2 mr-2 md:mr-4">Express</span>
                </p>
                {/* Icon Links */}
                <div className="flex justify-center space-x-4 md:space-x-8">
                  <a href="https://github.com/nangel42/Julios-Mexican-Recipes" target="_blank">
                    <img src={GitHub} className="my-4 object-contain w-20 h-10 md:w-20 md:h-12" alt="Julios Mexican Recipes GitHub" />
                  </a>
                  <a href="https://julios-mexican-recipes.herokuapp.com/" target="_blank">
                    <img src={LinkIcon} className="my-4 object-contain w-10 h-10 md:w-20 md:h-12" alt="Julios Mexican Recipes Link" />
                  </a>
                </div>
                {/* Link to Deployed App With Picture*/}
                <a href="https://julios-mexican-recipes.herokuapp.com/" target="_blank">
                  <img src={JMR} className="mx-auto object-contain w-full md:w-3/4 h-auto md:h-3/4" alt="Julio's Mexican Recipes" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  