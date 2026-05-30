import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Heists.css'

const heistsData = [
  {
    id: 'mint',
    title: 'Royal Mint of Spain',
    subtitle: 'Fábrica Nacional de Moneda y Timbre',
    codename: 'PLAN VALENCIA',
    target: '€2.4 Billion (Unfinished Cash)',
    secured: '€984 Million',
    duration: '11 Days',
    hostages: '67 Hostages',
    complexity: 'Level Alpha',
    description: "The goal wasn't to steal money, but to print it. By locking themselves inside the Royal Mint of Spain with 67 hostages, the gang printed their own untraceable, brand-new bills, defying the central banking system. A robbery that was actually a direct challenge to the economy.",
    phases: [
      {
        number: 1,
        title: 'Tactical Infiltration',
        status: 'SUCCESS',
        desc: 'Intercepted a truck of paper currency, entered the Mint disguised as security forces, secured the doors, and took 67 hostages including Alison Parker (the Ambassador\'s daughter).'
      },
      {
        number: 2,
        title: 'Barricade & Print Setup',
        status: 'SUCCESS',
        desc: 'Sealed off all entrances with heavy steel plates. Wired the building with C4 explosives. Activated the printing presses to run 24/7 under Nairobi\'s strict quality control.'
      },
      {
        number: 3,
        title: 'System Hostage Leverage',
        status: 'COMPROMISED',
        desc: 'Divided hostages into workers (digging escape tunnel/printing money) and mock hostages (placed on the roof in red jumpsuits to confuse police snipers).'
      },
      {
        number: 4,
        title: 'Tunnel Connection',
        status: 'SUCCESS',
        desc: 'Moscow dug a tunnel from the vault floor down to the city sewer system, linking it to the Professor\'s hangar. A decoy tunnel was also dug to mislead police.'
      },
      {
        number: 5,
        title: 'The Great Escape',
        status: 'SUCCESS',
        desc: 'With police storming the building, Berlin held the line with a machine gun. The remaining crew escaped through the vault tunnel carrying €984M in printed bills.'
      }
    ],
    blueprint: {
      location: 'Calle de Jorge Juan, Madrid',
      vaultType: 'Standard Vault (Mechanical Lock)',
      keyObstacle: 'Police Perimeter & Sniper Sightlines',
      escapeRoute: 'Underground Sewer Network'
    }
  },
  {
    id: 'bank',
    title: 'Bank of Spain',
    subtitle: 'Banco de España',
    codename: 'PLAN PARIS',
    target: '90 Tons of Pure Gold Bullion',
    secured: '90 Tons (90,000 kg)',
    duration: '6 Days',
    hostages: '80 Hostages',
    complexity: 'Level Omega',
    description: "A heist designed by Berlin and Palermo, executed by the Professor to rescue Rio and execute the ultimate challenge. The gold is stored in a chamber 48 meters underground, which floods automatically if breached. The plan: melt the gold and siphon it away.",
    phases: [
      {
        number: 1,
        title: 'Military Entry & Air Drop',
        status: 'SUCCESS',
        desc: 'Dropped €140 Million in bills over Madrid to create public chaos. Entered the Bank disguised as a military response team to assume control before the security lockdown.'
      },
      {
        number: 2,
        title: 'Subaquatic Vault Breach',
        status: 'SUCCESS',
        desc: 'As the vault chamber flooded, Bogota dived to weld a decompression chamber onto the vault door, allowing entry without losing the gold or drowning.'
      },
      {
        number: 3,
        title: 'Gold Liquefaction',
        status: 'SUCCESS',
        desc: 'Set up an industrial smelting plant inside the bank. Melted the 90 tons of gold bars into micro-balls, converting them into a liquid slurry for easy transport.'
      },
      {
        number: 4,
        title: 'State Secret Leverage',
        status: 'SUCCESS',
        desc: 'Exhumed defense documents from the vault. Threatened to leak government secrets to force the military command to halt their assault and negotiate.'
      },
      {
        number: 5,
        title: 'The Sewer Siphon',
        status: 'SUCCESS',
        desc: 'Pumped the gold slurry out through a pressure pipe connected to Madrid\'s storm drains. Melted gold was cast back into gold bars in a secret location, replacing the bank\'s gold with brass decoy bars.'
      }
    ],
    blueprint: {
      location: 'Plaza de Cibeles, Madrid',
      vaultType: 'Flooding Hydraulic Chamber',
      keyObstacle: '48m Deep Auto-Flooding Chamber',
      escapeRoute: 'Sewage Rainwater Siphon'
    }
  }
]

const Heists = () => {
  const [activeHeist, setActiveHeist] = useState('mint')
  const [selectedPhase, setSelectedPhase] = useState(0)

  const currentHeist = heistsData.find(h => h.id === activeHeist)

  return (
    <div className="heists-section">
      <div className="section-header">
        <h2 className="section-title">THE HEISTS</h2>
        <p className="section-subtitle">Tactical blueprint analysis and planning stages.</p>
        <div className="red-divider"></div>
      </div>

      <div className="heist-tabs">
        <button 
          className={`tab-btn ${activeHeist === 'mint' ? 'active' : ''}`}
          onClick={() => {
            setActiveHeist('mint')
            setSelectedPhase(0)
          }}
        >
          {heistsData[0].title}
        </button>
        <button 
          className={`tab-btn ${activeHeist === 'bank' ? 'active' : ''}`}
          onClick={() => {
            setActiveHeist('bank')
            setSelectedPhase(0)
          }}
        >
          {heistsData[1].title}
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeHeist}
          className="heist-container"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
        >
          <div className="heist-grid">
            
            <div className="heist-details">
              <div className="blueprint-header">
                <span className="codename-tag">{currentHeist.codename}</span>
                <h3 className="heist-title">{currentHeist.title}</h3>
                <p className="heist-sub">{currentHeist.subtitle}</p>
              </div>

              <p className="heist-desc">{currentHeist.description}</p>

              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-lbl">PRIMARY TARGET</span>
                  <span className="stat-value highlight-red">{currentHeist.target}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-lbl">SECURED REVENUE</span>
                  <span className="stat-value highlight-gold">{currentHeist.secured}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-lbl">OPERATION DURATION</span>
                  <span className="stat-value">{currentHeist.duration}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-lbl">HOSTAGE COUNT</span>
                  <span className="stat-value">{currentHeist.hostages}</span>
                </div>
              </div>

              <div className="heist-blueprint-info">
                <h4 className="info-header">TACTICAL BLUEPRINT DETAILS</h4>
                <div className="info-row">
                  <span>LOCATION:</span>
                  <span>{currentHeist.blueprint.location}</span>
                </div>
                <div className="info-row">
                  <span>VAULT TYPE:</span>
                  <span>{currentHeist.blueprint.vaultType}</span>
                </div>
                <div className="info-row">
                  <span>PRIMARY OBSTACLE:</span>
                  <span>{currentHeist.blueprint.keyObstacle}</span>
                </div>
                <div className="info-row">
                  <span>EXTRACTION ROUTE:</span>
                  <span>{currentHeist.blueprint.escapeRoute}</span>
                </div>
              </div>
            </div>

            <div className="heist-timeline-panel">
              <h4 className="panel-title">PLAN EXECUTION TIMELINE</h4>
              <div className="timeline-phases">
                {currentHeist.phases.map((phase, idx) => (
                  <button
                    key={phase.number}
                    className={`phase-timeline-item ${selectedPhase === idx ? 'selected' : ''}`}
                    onClick={() => setSelectedPhase(idx)}
                  >
                    <div className="phase-num-circle">
                      {phase.number}
                    </div>
                    <div className="phase-text-summary">
                      <span className="phase-label">PHASE {phase.number}</span>
                      <span className="phase-name">{phase.title}</span>
                    </div>
                    <div className="phase-status" data-status={phase.status}>
                      {phase.status}
                    </div>
                  </button>
                ))}
              </div>

              <div className="phase-details-box">
                <div className="box-corner top-l"></div>
                <div className="box-corner top-r"></div>
                <div className="box-corner bottom-l"></div>
                <div className="box-corner bottom-r"></div>

                <div className="phase-details-header">
                  <span className="phase-details-num">PHASE {currentHeist.phases[selectedPhase].number} DETAILS</span>
                  <span className="phase-details-status" data-status={currentHeist.phases[selectedPhase].status}>
                    STATUS: {currentHeist.phases[selectedPhase].status}
                  </span>
                </div>
                <h3 className="phase-details-title">{currentHeist.phases[selectedPhase].title}</h3>
                <p className="phase-details-desc">{currentHeist.phases[selectedPhase].desc}</p>
              </div>
            </div>
          </div>

          <div className="heist-footer-deco">
            <div className="radar-grid">
              <div className="radar-circle circle-1"></div>
              <div className="radar-circle circle-2"></div>
              <div className="radar-circle circle-3"></div>
              <div className="radar-sweep"></div>
            </div>
            <div className="blueprint-meta-code">
              <span>SYSTEM: SECURE PERIMETER ACCESS</span>
              <span>GRID COORDS: 40.4167° N, 3.7037° W</span>
              <span>FREQUENCY: 440.09 MHz</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Heists
