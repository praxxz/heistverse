import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Characters.css'

const charactersData = [
  {
    id: 'tokyo',
    codename: 'Tokyo',
    realName: 'Silene Oliveira',
    role: 'Narrator & Wildcard',
    status: 'KIA (Heroic Sacrifice)',
    weapon: 'M16 / Browning HP',
    description: 'Hot-headed, impulsive, and completely unpredictable. Tokyo is the narrator of our story. Her passion is both her greatest strength and her most dangerous weakness. She lived her life on the edge, and died a hero protecting the crew.',
    quote: "In the end, love is a good reason for everything to fall apart.",
    stats: { intelligence: 75, combat: 90, stealth: 85, loyalty: 95 },
    color: '#ff2a2a',
    image: '/images/tokyo.png'
  },
  {
    id: 'berlin',
    codename: 'Berlin',
    realName: 'Andrés de Fonollosa',
    role: 'First Command / Field Leader',
    status: 'KIA (Royal Mint)',
    weapon: 'MPT-76 / Walther PPK',
    description: "The Professor's older brother. A sophisticated, narcissistic, yet charismatic thief. Berlin ran the operations inside the Royal Mint of Spain with an iron fist and theatrical flair. Despite his terminal illness and cold nature, he sacrificed himself to buy the team time.",
    quote: "I've spent my life being a bit of a son of a bitch, but today I think I want to die with dignity.",
    stats: { intelligence: 92, combat: 85, stealth: 80, loyalty: 90 },
    color: '#e0a96d',
    image: '/images/berlin.png'
  },
  {
    id: 'nairobi',
    codename: 'Nairobi',
    realName: 'Ágata Jiménez',
    role: 'Quality & Printing Manager',
    status: 'KIA (Bank of Spain)',
    weapon: 'Colt M1911 / CZ 75',
    description: "The heart and soul of the group. An expert counterfeiter who managed the printing of billions of Euros at the Royal Mint and the melting of gold at the Bank of Spain. Known for her energy, authority, and deep love for her 'family'. Matriarchy begins now!",
    quote: "To love, you need courage.",
    stats: { intelligence: 80, combat: 70, stealth: 75, loyalty: 100 },
    color: '#ffdd53',
    image: '/images/nairobi.png'
  },
  {
    id: 'denver',
    codename: 'Denver',
    realName: 'Daniel Ramos',
    role: 'The Brawler & Enforcer',
    status: 'Active',
    weapon: 'Galil AR / Heckler & Koch USP',
    description: 'The hot-tempered street fighter with a heart of gold and a unique, unforgettable laugh. Denver is Moscow\'s son. He is fiercely protective of his loved ones, leading him to fall in love with hostage Mónica (Stockholm) during the first heist.',
    quote: "If you don't fight, you've already lost.",
    stats: { intelligence: 65, combat: 95, stealth: 60, loyalty: 95 },
    color: '#ff7b25',
    image: '/images/denver.png'
  },
  {
    id: 'rio',
    codename: 'Rio',
    realName: 'Aníbal Cortés',
    role: 'Hacker & Tech Expert',
    status: 'Active',
    weapon: 'M4A1 / Heckler & Koch MP5',
    description: 'The youngest member of the gang and a brilliant programmer. Rio is responsible for setting up the encrypted communication channels and hacking security systems. His relationship with Tokyo is both a lifeline and a liability.',
    quote: "I can hack any system in the world, but I couldn't decrypt you.",
    stats: { intelligence: 95, combat: 60, stealth: 70, loyalty: 88 },
    color: '#2ab7ff',
    image: '/images/rio.png'
  },
  {
    id: 'lisbon',
    codename: 'Lisbon',
    realName: 'Raquel Murillo',
    role: 'Strategist & Co-planner',
    status: 'Active',
    weapon: 'Glock 17',
    description: 'Originally the lead police inspector negotiating against the Professor. After falling in love with Sergio Marquina and realizing the corruption within the system, she defected to join the resistance under the codename Lisbon.',
    quote: "I'm not doing this for the money. I'm doing this for him.",
    stats: { intelligence: 90, combat: 80, stealth: 85, loyalty: 95 },
    color: '#d48cf0',
    image: '/images/lisbon.png'
  },
  {
    id: 'stockholm',
    codename: 'Stockholm',
    realName: 'Mónica Gaztambide',
    role: 'Medic & Enforcer',
    status: 'Active',
    weapon: 'Browning Hi-Power',
    description: 'Once a secretary at the Royal Mint and mistress to Arturo Román. During the heist, she was shot by Denver (who faked her death to save her). She developed feelings for him and chose to escape with the gang, adopting a name reflecting Stockholm syndrome.',
    quote: "Sometimes, the hostage is the one who sets you free.",
    stats: { intelligence: 78, combat: 72, stealth: 80, loyalty: 90 },
    color: '#8cffaa',
    image: '/images/stockholm.png'
  },
  {
    id: 'helsinki',
    codename: 'Helsinki',
    realName: 'Yashin Dasáyev',
    role: 'Heavy Weapons & Medic',
    status: 'Active',
    weapon: 'Browning M2 / MG3 / RPG-7',
    description: 'A Serbian war veteran with a massive physique but a gentle soul. Helsinki is the ultimate loyal soldier, carrying out orders without hesitation while caring deeply for his friends, especially Nairobi and Palermo.',
    quote: "True courage is not about not feeling fear, it is about keeping going anyway.",
    stats: { intelligence: 70, combat: 98, stealth: 55, loyalty: 100 },
    color: '#7b90e6',
    image: '/images/helsinki.png'
  }
]

const Characters = () => {
  const [selectedChar, setSelectedChar] = useState(null)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  }

  return (
    <div className="characters-section">
      <div className="section-header">
        <h2 className="section-title">THE RESISTANCE</h2>
        <p className="section-subtitle">Dossiers of the world's most wanted bank robbers.</p>
        <div className="red-divider"></div>
      </div>

      <motion.div 
        className="characters-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {charactersData.map((char) => (
          <motion.div
            key={char.id}
            className="char-card"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.04, 
              borderColor: char.color,
              boxShadow: `0 0 25px ${char.color}40`,
            }}
            onClick={() => setSelectedChar(char)}
          >
            <div className="card-top">
              <span className="card-role">{char.role}</span>
              <span className="card-status" style={{ 
                color: char.status.includes('KIA') ? '#ff4d4d' : '#4dff4d',
                borderColor: char.status.includes('KIA') ? 'rgba(255,77,77,0.3)' : 'rgba(77,255,77,0.3)'
              }}>
                {char.status.includes('KIA') ? 'KIA' : 'ACTIVE'}
              </span>
            </div>

            <div className="card-body">
              <div className="char-avatar-container">
                <div className="char-avatar-bg" style={{ 
                  background: `radial-gradient(circle, ${char.color}25 0%, transparent 70%)` 
                }}></div>
                <img src={char.image} className="char-avatar-img" alt={char.codename} />
                <div className="codename-overlay">{char.codename}</div>
              </div>
              <h3 className="char-name">{char.codename}</h3>
              <p className="char-realname">File Name: {char.realName}</p>
            </div>

            <div className="card-footer">
              <span className="click-for-file">VIEW DOSSIER</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedChar && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChar(null)}
          >
            <motion.div 
              className="dossier-modal"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ borderColor: selectedChar.color }}
            >
              
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>

              <button className="close-btn" onClick={() => setSelectedChar(null)}>×</button>

              <div className="modal-content">
                <div className="modal-left">
                  <div className="dossier-title-wrap">
                    <span className="dossier-label">WANTED BY INTERPOL</span>
                    <h2 className="dossier-name" style={{ textShadow: `0 0 15px ${selectedChar.color}60` }}>
                      {selectedChar.codename.toUpperCase()}
                    </h2>
                    <p className="dossier-id">RECORD ID: #{selectedChar.id.toUpperCase()}-093285</p>
                  </div>

                  <div className="char-visual-large">
                    <div className="pulse-circle" style={{ backgroundColor: selectedChar.color }}></div>
                    <img src={selectedChar.image} className="char-dossier-img" alt={selectedChar.codename} />
                    <div className="scanline-overlay"></div>
                  </div>

                  <div className="dossier-quote-box">
                    <p className="quote-text">"{selectedChar.quote}"</p>
                  </div>
                </div>

                <div className="modal-right">
                  <h3 className="section-title-sm">IDENTIFICATION DOSSIER</h3>
                  
                  <div className="dossier-info-grid">
                    <div className="info-item">
                      <span className="info-label">TRUE IDENTIFICATION</span>
                      <span className="info-val">{selectedChar.realName}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">TACTICAL ASSIGNMENT</span>
                      <span className="info-val">{selectedChar.role}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">CURRENT CLASSIFICATION</span>
                      <span className="info-val" style={{ color: selectedChar.status.includes('KIA') ? '#ff4d4d' : '#4dff4d' }}>
                        {selectedChar.status}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">PREFERRED ARMAMENT</span>
                      <span className="info-val">{selectedChar.weapon}</span>
                    </div>
                  </div>

                  <h3 className="section-title-sm">TACTICAL PROFILE</h3>
                  <p className="char-desc">{selectedChar.description}</p>

                  <h3 className="section-title-sm">COMBAT EVALUATION</h3>
                  <div className="stats-bars">
                    {Object.entries(selectedChar.stats).map(([stat, val]) => (
                      <div className="stat-row" key={stat}>
                        <div className="stat-label-wrap">
                          <span className="stat-name">{stat.toUpperCase()}</span>
                          <span className="stat-val">{val}%</span>
                        </div>
                        <div className="bar-bg">
                          <motion.div 
                            className="bar-fill" 
                            initial={{ width: 0 }}
                            animate={{ width: `${val}%` }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            style={{ backgroundColor: selectedChar.color, boxShadow: `0 0 10px ${selectedChar.color}` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Characters
