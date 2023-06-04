import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Calendor from './Calendor'
import Contact from './Contact'

const Home = () => {
  return (
    <div id='home'>
        {/* <Navbar data-testid="nav-menu"/> */}
        <About/>
        <Skills/>
        <Projects/>
        <Calendor username='sourabh7909' viewBox='0 0 544 130'/>
        <Contact/>
    </div>
  )
}

export default Home