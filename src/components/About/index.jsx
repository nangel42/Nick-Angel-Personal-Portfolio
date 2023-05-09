import headshot from '../../assets/NickAHeadshot.png'

export default function About() {

    return (
      <div className="bg-gray-900">
  
        <h1 className="text-3xl font-bold underline text-white m-4">
          About Me
        </h1>

        <p className="text-xl text-center font-bold text-white m-4">
          My name is Nicolas Angel and I am a Full Stack Software Engineer currently residing in sunny Arizona. 
          In fall of 2019, I graduated from the University of Arizona with a bachelor's degree in Neuroscience and Cognitive Science. 
          After graduation, I pursued a career in the medical field and worked as a behavioral health technician at Banner Health. 
          However, COVID-19 hit and I felt the need to explore other career options.
        </p>

        <p className="text-xl text-center font-bold text-white m-4">
          Growing up, I always had a fascination with technology and its advancements. 
          From flip phones to smartphones and from Gameboy's to Xbox 360, I loved seeing the evolution of technology and its capabilities. 
          This inspired me to pursue a career in the tech industry and become a software engineer. 
          I am a graduate of General Assembly's Software Engineering Immersive Bootcamp and have experience with 
          technologies such as JavaScript, Reactjs, MongoDB, Python, and Django.
        </p>

        <p className="text-xl text-center font-bold text-white m-4">
          As a Full Stack Software Engineer, I am currently seeking roles in Full Stack and Frontend Software Development. 
          My passion for technology and software engineering drives me to constantly learn and work on new and exciting projects. 
          I am excited to contribute my skills and expertise to innovative and impactful software development initiatives.
        </p>

        <img src={headshot} alt="Nicolas Angel" className="rounded-full mx-auto m-4" width="300" height="300"></img>
  
      </div>
    )
  }
  