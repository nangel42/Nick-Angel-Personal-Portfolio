import { useEffect, useState } from 'react';

export default function Welcome() {
  // controls the welcome message
  const [boot, uponBoot] = useState(false);

  useEffect(() => {
    uponBoot(true);
  }, []);

  return (
    <div className="bg-gray-900 flex items-center justify-center h-screen ">
      {/* Welcome message */}
      <div className="text-2xl text-center font-bold text-white">
        <p className={`transition-opacity duration-1000 ease-in-out delay-100 ${boot ? "opacity-100" : "opacity-0"}`}>
          Welcome to
        </p>
        {/* Nick Script Logo */}
        <div className={`text-5xl m-4 transition-opacity duration-2000 ease-in-out delay-500 ${boot ? "opacity-100" : "opacity-0"}`}>
          <span style={{ color: '#FFFF00' }}>{'{'}</span>
          <span style={{ color: '#F92672' }}> Nick </span>
          <span style={{ color: '#FFFF00' }}>{'}'}</span>
          <span style={{ color: '#FFFFFF' }}> </span>
          <span style={{ color: '#66D9EF' }}>Script</span>
          <span style={{ color: '#FFFF00' }}>!</span>
        </div>
        <p className={`text-2xl m-4 transition-opacity duration-1000 ease-in-out delay-100 ${boot ? "opacity-100" : "opacity-0"}`}>
          Nick's Personal Website
        </p>
        {/* Message Info */}
        <div className={`text-xl m-8 mb-5 transition-opacity duration-1000 ease-in-out delay-700 ${boot ? "opacity-100" : "opacity-0"}`}>
            I am a full-stack web developer with a passion for creating web applications that are both functional and beautiful.
        </div>
        <div className={`text-xl m-8 transition-opacity duration-2000 ease-in-out delay-1000 ${boot ? "opacity-100" : "opacity-0"}`}>
            I am seeking new opportunities to utilize my skills and expertise to create exceptional web applications !
        </div>
      </div>

    </div>
  )
}

