import { useState } from 'react'
import Nav from '../Nav'
import Welcome from '../Welcome'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'



export default function App() {

  return (
    <>

      <section>
        <Nav />
      </section>

      <div className="bg-gray-900">
        <Welcome />

        <About />
        <br /><br /><br />
        <Projects />
        <br /><br /><br />
        <Contact />
      </div>


    </>
  )
}


