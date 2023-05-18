import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import headshot01 from '../../assets/images/NickAHeadshot.png'
import headshot02 from '../../assets/images/NickAHeadshot02.png'
import headshot03 from '../../assets/images/NickAHeadshot03.png'
import headshot04 from '../../assets/images/NickAHeadshot04.png'
import GitHub from '../../assets/images/GitHub-logo-white.png'
import LinkedIn from '../../assets/images/linkedin.png'

export default function About() {
  // About Me Images
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
  // Javascript that works the image carousel
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

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
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-900" id="about-section">{/* Needed for Nav Bar Scroll */}

        {/* Column one area */}
        <div className="flex flex-col justify-center p-8 mb-20 sm:ml-8">
          {/* Header */}
          <h1 className="text-5xl md:text-5xl font-bold text-blue-400 text-center mb-4">
            <span style={{ color: '#D4D4D4' }}>{'<'}</span>
            <span style={{ color: '#5CCFE6' }}> About </span>
            <span style={{ color: '#D4D4D4' }}>{'>'}</span>
            <span style={{ color: '#D4D4D4' }}> </span>
            <div className="sm:hidden -mb-8">
              <br />
            </div>
            <span style={{ color: '#D4D4D4' }}>{'<'}</span>
            <span style={{ color: '#D4D4D4' }}>{'/'}</span>
            <span style={{ color: '#FFA500' }}> Me </span>
            <span style={{ color: '#D4D4D4' }}>{'>'}</span>
          </h1>
          {/* About Me */}
          <div className= "max-w-6xl mx-auto bg-gray-300 bg-opacity-60 rounded-md p-4 my-8">
            <p className="text-xl text-black mb-8">
            My name is Nicolas Angel, a Full Stack Software Engineer from Arizona, with a background in Neuroscience and Cognitive Science. 
            After working in the medical field, I decided to explore a career in the tech industry due to my lifelong fascination with technology's evolution.
            </p>

            <p className="text-xl text-black mb-8">
            With experience in JavaScript, Reactjs, MongoDB, Python, and Django, I graduated from General Assembly's Software Engineering Immersive Bootcamp 
            and now seek roles in Full Stack and Frontend Software Development to contribute to innovative projects and make an impact.
            </p>
          </div>
        </div>
        {/* About Me Carousel */}
        <div className="flex flex-col justify-center items-center max-w-[500px] h-[700px] w-full m-auto py-16 px-4 relative group">
          <div 
            style={{backgroundImage: `url(${nickImgs[currentImgIndex].src})`}} 
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500" 
          >
          </div>
          {/* Buttons for Carousel */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-white'>
            <BsChevronCompactLeft onClick={prevImg} size={30}/>
          </div>
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-white'>
            <BsChevronCompactRight onClick={nextImg} size={30}/>
          </div>
          {/* Dots for Carousel */}
          <div className="flex top-4 justify-center py-2">
            {nickImgs.map((img, index) => (
              <RxDotFilled
                key={img.id}
                onClick={() => setCurrentImgIndex(index)}
                size={20}
                className={`cursor-pointer ${index === currentImgIndex ? 'text-blue-400' : 'text-white'} hover:text-blue-400`}
              />
            ))}
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center ">
            <a href="https://github.com/nangel42" target="_blank"><img src={GitHub} alt="Nicolas Angel GitHub" className="rounded-full m-2" width="100" height="100"></img></a>
            <a href="https://www.linkedin.com/in/nicolasangel/" target="_blank"><img src={LinkedIn} alt="Nicolas Angel LinkedIn" className="rounded-full m-2" width="60" height="60"></img></a>
          </div>
        </div>
      </div>
    )
  }
  
  // AMAZING Refrence:
  // https://www.youtube.com/watch?v=tXlZCW26bto&t=750s