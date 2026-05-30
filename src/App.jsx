
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Characters from './components/Characters'
import Heists from './components/Heists'
import Professor from './components/Professor'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  return (
    <div className="app-container">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <AnimatePresence mode="wait">
        {currentSection === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Hero />
          </motion.div>
        )}
        {currentSection === 'characters' && (
          <motion.div
            key="characters"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Characters />
          </motion.div>
        )}
        {currentSection === 'heists' && (
          <motion.div
            key="heists"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Heists />
          </motion.div>
        )}
        {currentSection === 'professor' && (
          <motion.div
            key="professor"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            <Professor />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

