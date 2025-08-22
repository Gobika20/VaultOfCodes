import './App.css' ;
import About from './components/About';
import Contact from './components/Contact';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Skills from './components/Skills';
import image from './logo/image.png'
import React, { useState } from 'react';



function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className='app'>
      
      <div className="main1">
        <div className='sub1'>
          <img src={image} alt="" />
        </div>
        <div className='sub2'>
          <h1>Gobika S</h1>
          <h2>Full Stack Developer</h2>
        </div>

      </div>
      <div className='main2'>
        <div className='nav'>
        <button onClick={() => setActiveSection('about')}>About</button>
        <button onClick={() => setActiveSection('skills')}>Skills</button>
        <button onClick={() => setActiveSection('interests')}>Interests</button>
        <button onClick={() => setActiveSection('projects')}>Projects</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
      
      </div>

    <div className='section'> 
  {activeSection === 'about' && <About />}
  {activeSection === 'skills' && <Skills />}
  {activeSection === 'interests' && <Interests/>}
  {activeSection === 'projects' && <Projects/>}
  {activeSection === 'contact' && <Contact/>}
</div>
</div>
      
</div>
  );
}

export default App;
