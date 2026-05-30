import React from 'react'
import './Navbar.css'

const Navbar = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setCurrentSection('home')} style={{ cursor: 'pointer' }}>
        LA CASA DE PAPEL
      </div>
      <ul className="nav-links">
        <li 
          className={currentSection === 'home' ? 'active' : ''} 
          onClick={() => setCurrentSection('home')}
        >
          Home
        </li>
        <li 
          className={currentSection === 'characters' ? 'active' : ''} 
          onClick={() => setCurrentSection('characters')}
        >
          Characters
        </li>
        <li 
          className={currentSection === 'heists' ? 'active' : ''} 
          onClick={() => setCurrentSection('heists')}
        >
          Heists
        </li>
        <li 
          className={currentSection === 'professor' ? 'active' : ''} 
          onClick={() => setCurrentSection('professor')}
        >
          The Professor
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

