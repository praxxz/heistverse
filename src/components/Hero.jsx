import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [skill, setSkill] = useState('Hacker')
  const [codename, setCodename] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [crewId, setCrewId] = useState('')

  const handleJoinSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return

    setIsScanning(true)
    setTimeout(() => {
      const cities = ['Rome', 'Geneva', 'Munich', 'Sydney', 'Cairo', 'Kyoto', 'Oslo', 'Vienna', 'Dublin']
      const randomCity = cities[Math.floor(Math.random() * cities.length)]
      const randomId = 'ID-' + Math.floor(100000 + Math.random() * 900000)
      setCodename(randomCity)
      setCrewId(randomId)
      setIsScanning(false)
    }, 2000)
  }

  const resetModal = () => {
    setIsModalOpen(false)
    setName('')
    setSkill('Hacker')
    setCodename('')
    setCrewId('')
    setIsScanning(false)
  }

  const heroRef = useRef(null)
  const bankSpotRef = useRef(null)
  const charImgRef = useRef(null)
  const profImgRef = useRef(null)
  const charWrapRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const bankSpot = bankSpotRef.current
    const charImg = charImgRef.current
    const profImg = profImgRef.current
    const charWrap = charWrapRef.current

    let mx = 0, my = 0, bx = 0, by = 0
    let heroActive = false

    const animateBank = () => {
      bx += (mx - bx) * 0.06
      by += (my - by) * 0.06
      bankSpot.style.setProperty('--x', `${bx}px`)
      bankSpot.style.setProperty('--y', `${by}px`)
      requestAnimationFrame(animateBank)
    }
    animateBank()

    let lx = 0, ly = 0, cx = 0, cy = 0
    let charActive = false

    const animateChar = () => {
      cx += (lx - cx) * 0.08
      cy += (ly - cy) * 0.08

      if (charActive) {

        const charMask = `radial-gradient(circle 240px at ${cx}px ${cy}px,
          transparent 0%,
          transparent 30%,
          rgba(0,0,0,0.6) 55%,
          rgba(0,0,0,1) 80%
        )`
        charImg.style.webkitMaskImage = charMask
        charImg.style.maskImage = charMask

        const profMask = `radial-gradient(circle 240px at ${cx}px ${cy}px,
          rgba(0,0,0,1) 0%,
          rgba(0,0,0,0.9) 35%,
          rgba(0,0,0,0.4) 60%,
          transparent 80%
        )`
        profImg.style.webkitMaskImage = profMask
        profImg.style.maskImage = profMask
        profImg.style.opacity = '1'
      }
      requestAnimationFrame(animateChar)
    }
    animateChar()

    const onHeroMove = (e) => {
      const rect = hero.getBoundingClientRect()
      mx = e.clientX - rect.left
      my = e.clientY - rect.top
      if (!heroActive) {
        heroActive = true
        bankSpot.classList.add('active')
      }
    }
    const onHeroLeave = () => {
      heroActive = false
      bankSpot.classList.remove('active')
    }

    const onCharMove = (e) => {
      const rect = charWrap.getBoundingClientRect()
      lx = e.clientX - rect.left
      ly = e.clientY - rect.top
      if (!charActive) {
        charActive = true
      }
    }
    const onCharLeave = () => {
      charActive = false
      charImg.style.webkitMaskImage = 'none'
      charImg.style.maskImage = 'none'
      profImg.style.opacity = '0'
      profImg.style.webkitMaskImage = 'none'
      profImg.style.maskImage = 'none'
    }

    hero.addEventListener('mousemove', onHeroMove)
    hero.addEventListener('mouseleave', onHeroLeave)
    charWrap.addEventListener('mousemove', onCharMove)
    charWrap.addEventListener('mouseleave', onCharLeave)

    return () => {
      hero.removeEventListener('mousemove', onHeroMove)
      hero.removeEventListener('mouseleave', onHeroLeave)
      charWrap.removeEventListener('mousemove', onCharMove)
      charWrap.removeEventListener('mouseleave', onCharLeave)
    }
  }, [])

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 12 } },
  }
  return (
    <div className="hero" ref={heroRef}>

      <div className="bank-layer" />

      <div className="bank-spotlight" ref={bankSpotRef} />

      <div className="dark-overlay" />

      <div className="scanlines" />

      <div className="ambient-text">BELLA CIAO</div>

      <div className="vignette" />

      <div className="character-wrap" ref={charWrapRef}>
        
        <img src="/images/professor.png" className="prof-img" ref={profImgRef} alt="professor" />
        
        <img src="/images/character.png" className="char-img" ref={charImgRef} alt="character" />
      </div>

      <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
        <motion.div className="left" variants={item}>
          <motion.div className="heist-tag" variants={item}>— LA CASA DE PAPEL</motion.div>
          <h1 className="mh-title">MONEY<br />HEIST</h1>
          <motion.p className="mh-desc" variants={item}>
            They came armed with a plan, red jumpsuits,
            and nothing left to lose. The Royal Mint of
            Spain would never be the same. Bella Ciao —
            this is not a robbery, it's a revolution.
          </motion.p>
          <motion.button 
            className="mh-btn" 
            variants={item}
            onClick={() => setIsModalOpen(true)}
          >
            Unirse al Plan
          </motion.button>
        </motion.div>

        <motion.div className="right" variants={item}>
          <div className="right-tag">· · ·</div>
          <h1 className="mh-title-right">A Perfect<br />Plan</h1>
          <motion.p className="mh-text" variants={item}>
            Every heist is won before it begins.
            The only currency that matters is time —
            and we have stolen enough. Bella Ciao.
          </motion.p>
          <div className="code-line">RESISTENCIA · TOKYO · BERLIN · NAIROBI</div>
        </motion.div>
      </motion.div>
      
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetModal}
          >
            <motion.div 
              className="dossier-modal join-modal"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>

              <button className="close-btn" onClick={resetModal}>×</button>

              <div className="modal-content join-content">
                {!codename ? (
                  <form onSubmit={handleJoinSubmit} className="join-form">
                    <div className="join-header">
                      <span className="join-lbl">THE PROFESSOR IS RECRUITING</span>
                      <h2 className="join-title">JOIN THE PLAN</h2>
                      <div className="red-divider"></div>
                    </div>

                    <div className="form-group">
                      <label className="form-lbl">IDENTIFICATION (NAME)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Enter your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={isScanning}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-lbl">TACTICAL SPECIALTY</label>
                      <select 
                        className="form-input" 
                        value={skill} 
                        onChange={(e) => setSkill(e.target.value)}
                        disabled={isScanning}
                      >
                        <option value="Hacker">Hacker & Tech Expert</option>
                        <option value="Enforcer">The Brawler & Enforcer</option>
                        <option value="Strategist">Strategist & Co-planner</option>
                        <option value="Medic">Medic & Infiltration</option>
                        <option value="Breacher">Heavy Weapons & Breacher</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className={`submit-join-btn ${isScanning ? 'disabled' : ''}`}
                      disabled={isScanning}
                    >
                      {isScanning ? 'GENERATING CODENAME...' : 'SUBMIT ENLISTMENT'}
                    </button>

                    {isScanning && (
                      <div className="scanning-container">
                        <div className="scanning-line"></div>
                        <span className="scanning-text">RUNNING ALGORITHMS... BIOMETRIC COMPILING</span>
                      </div>
                    )}
                  </form>
                ) : (
                  <div className="codename-success-screen">
                    <div className="success-header">
                      <span className="success-status-tag">ENLISTMENT CONFIRMED</span>
                      <h2 className="success-welcome">WELCOME TO THE CREW</h2>
                    </div>

                    <div className="assigned-dossier">
                      <div className="dossier-field">
                        <span className="field-lbl">CODENAME ASSIGNED</span>
                        <span className="field-val highlight-red-text">{codename.toUpperCase()}</span>
                      </div>
                      <div className="dossier-field">
                        <span className="field-lbl">CREW ACCESS ID</span>
                        <span className="field-val highlight-gold-text">{crewId}</span>
                      </div>
                      <div className="dossier-field">
                        <span className="field-lbl">SPECIALTY ROLE</span>
                        <span className="field-val">{skill.toUpperCase()}</span>
                      </div>
                      <div className="dossier-field">
                        <span className="field-lbl">REAL NAME REFERENCE</span>
                        <span className="field-val">{name}</span>
                      </div>
                    </div>

                    <p className="resistance-note">
                      "First rule of the heist: No names, no personal relations. From this moment on, you are {codename}. The Professor will monitor your channel. Resistencia, prepare yourself."
                    </p>

                    <button className="confirm-dossier-btn" onClick={resetModal}>
                      DISMISS DOSSIER
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hero
