import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import headshot01 from '../../assets/NickAHeadshot.png'
import headshot02 from '../../assets/NickAHeadshot02.png'
import headshot03 from '../../assets/NickAHeadshot03.png'
import headshot04 from '../../assets/NickAHeadshot04.png'
import GitHub from '../../assets/GitHub-logo-white.png'
import LinkedIn from '../../assets/linkedin.png'


export default function About() {

  const nickImgs = [
    {
      id: 1,
      src: headshot01
    },
    {
      id: 2,
      src: headshot02
    },
    {
      id: 3,
      src: headshot03
    },
    {
      id: 4,
      src: headshot04
    }
  ];

  // console.log(nickImgs)

  const [currentImgIndex, setCurrentImgIndex] = useState(1);

  // console.log(currentImgIndex)

  const prevImg = () => {
    const isFirstImg = currentImgIndex === 0;
    const index = isFirstImg ? nickImgs.length - 1 : currentImgIndex - 1;
    setCurrentImgIndex(index);
  };

  const nextImg = () => {
    const isLastImg = currentImgIndex === nickImgs.length - 1;
    const index = isLastImg ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(index);
  };



    return (
      <div className="grid grid-cols-2 bg-gray-900">
        <div className="flex flex-col justify-center p-8 ml-8">
          <h1 className="text-3xl font-bold text-blue-400 text-center mb-4">
            <span style={{ color: '#D4D4D4' }}>{'<'}</span>
            <span style={{ color: '#5CCFE6' }}> About </span>
            <span style={{ color: '#D4D4D4' }}>{'>'}</span>
            <span style={{ color: '#D4D4D4' }}> </span>
            <span style={{ color: '#D4D4D4' }}>{'<'}</span>
            <span style={{ color: '#D4D4D4' }}>{'/'}</span>
            <span style={{ color: '#FFA500' }}> Me </span>
            <span style={{ color: '#D4D4D4' }}>{'>'}</span>
          </h1>

          <p className="text-xl text-white mb-8">
            My name is Nicolas Angel and I am a Full Stack Software Engineer currently residing in sunny Arizona. 
            In fall of 2019, I graduated from the University of Arizona with a bachelor's degree in Neuroscience and Cognitive Science. 
            After graduation, I pursued a career in the medical field and worked as a behavioral health technician at Banner Health. 
            However, COVID-19 hit and I felt the need to explore other career options.
          </p>

          <p className="text-xl text-white mb-8">
            Growing up, I always had a fascination with technology and its advancements. 
            From flip phones to smartphones and from Gameboy's to Xbox 360, I loved seeing the evolution of technology and its capabilities. 
            This inspired me to pursue a career in the tech industry and become a software engineer. 
            I am a graduate of General Assembly's Software Engineering Immersive Bootcamp and have experience with 
            technologies such as JavaScript, Reactjs, MongoDB, Python, and Django.
          </p>

          <p className="text-xl text-white mb-8">
            As a Full Stack Software Engineer, I am currently seeking roles in Full Stack and Frontend Software Development. 
            My passion for technology and software engineering drives me to constantly learn and work on new and exciting projects. 
            I am excited to contribute my skills and expertise to innovative and impactful software development initiatives.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-[500px] h-[700px] w-full m-auto py-16 px-4 relative group">
          <div 
            style={{backgroundImage: `url(${nickImgs[currentImgIndex].src})`}} 
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500" 
          >
          </div>

          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-white'>
            <BsChevronCompactLeft onClick={prevImg} size={30}/>
          </div>
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-white'>
            <BsChevronCompactRight onClick={nextImg} size={30}/>
          </div>
          
          <div className="flex justify-center ">
            <a href="https://github.com/nangel42" target="_blank"><img src={GitHub} alt="Nicolas Angel GitHub" className="rounded-full m-2" width="100" height="100"></img></a>
            <a href="https://www.linkedin.com/in/nicolasangel/" target="_blank"><img src={LinkedIn} alt="Nicolas Angel LinkedIn" className="rounded-full m-2" width="60" height="60"></img></a>
          </div>
        </div>



      </div>
    )
  }
  