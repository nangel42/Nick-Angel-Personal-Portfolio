import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Nav'
import Welcome from '../Welcome'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'


export default function App() {

  return (
    <Router>
      <>

        <section>
          <Nav />
        </section>

        <div className="bg-gray-900">
          <Welcome />
          <br /><br /><br />
          <About />
          <br /><br /><br />
          <Projects />
          <br /><br /><br />
          <Contact />
        </div>

      </>
    </Router>
  )
}


