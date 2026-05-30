import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Professor.css'

const rulesData = [
  { id: 1, title: 'No Real Names', desc: 'No one is to know anyone else\'s true identity. We will use cities as codenames. This prevents betrayals in case of capture.' },
  { id: 2, title: 'No Bloodshed', desc: 'We do not steal from people. We print our own money, we melt national gold. We are the resistance, not killers. The moment blood is spilled, we lose the public.' },
  { id: 3, title: 'No Personal Relations', desc: 'Emotional attachments compromise judgment. No romantic affairs or family involvement. Keep it strictly professional.' },
  { id: 4, title: 'Buy Time at All Costs', desc: 'Time is our primary currency. The longer we delay police action, the more cash we print, the more gold we melt, and the more sympathy we win.' }
]

const cameraFeeds = [
  { id: 'cam1', name: 'CAM 01 - THE HANGAR', status: 'ONLINE', ping: '12ms', details: 'Signal secure. Master computer links online. Analog relay active.' },
  { id: 'cam2', name: 'CAM 02 - ROYAL MINT VAULT', status: 'STANDBY', ping: '120ms', details: 'Decoy telemetry feed active. Security cameras patched.' },
  { id: 'cam3', name: 'CAM 03 - BANK OF SPAIN', status: 'ENCRYPTED', ping: '45ms', details: 'Gold smelter temperature: 1064°C. Pumping line telemetry locked.' },
  { id: 'cam4', name: 'CAM 04 - POLICE COMMS TENT', status: 'WIRETAPPED', ping: '8ms', details: 'Intercepting radio channel 4. Signal decrypted. Recording logs.' }
]

const simulationLogs = [
  { time: '00:01', text: 'SYSTEM INIT: Establishing secure proxy layers...' },
  { time: '00:03', text: 'PROXY SECURED: Route hijacked via Moscow, Stockholm, Reykjavik.' },
  { time: '00:05', text: 'PLAN CHARLIE: Hijacking police communications bands...' },
  { time: '00:08', text: 'COMMS LINK: Decryption key injected. Direct wiretap active.' },
  { time: '00:12', text: 'TEAM DEPLOYMENT: En route in military logistics trucks.' },
  { time: '00:15', text: 'PERIMETER BREACH: Main doors secured. Security console bypassed.' },
  { time: '00:18', text: 'HOSTAGES: 67 personnel gathered in main lobby. Red jumpsuits distributed.' },
  { time: '00:22', text: 'COUNTERMEASURES: Mock snipers positioned on roof ledges.' },
  { time: '00:28', text: 'OPERATIONS: Printing presses running at 1200 bills/minute.' },
  { time: '00:35', text: 'NEGOTIATION: Murillo is online. Initiating delay protocol 04.' },
  { time: '00:45', text: 'EXCAVATION: Tunnel team has cleared 15 meters of sub-sewer block.' },
  { time: '00:52', text: 'TACTICAL ALERT: Police attempt breach. Flashbangs deployed. Assault repelled.' },
  { time: '00:58', text: 'ESCAPE PATH: Escape shaft successfully breached into Hangar.' },
  { time: '01:05', text: 'EVACUATION: Moving printed cash (€984M). Decoy charges detonated.' },
  { time: '01:10', text: 'MISSION COMPLETE: Hangar doors locked. Team dispersed. BELLA CIAO.' }
]

const Professor = () => {
  const [activeCam, setActiveCam] = useState('cam1')
  const [isSimulating, setIsSimulating] = useState(false)
  const [logs, setLogs] = useState([])
  const [activeRule, setActiveRule] = useState(1)
  const terminalEndRef = useRef(null)

  const selectedCam = cameraFeeds.find(c => c.id === activeCam)

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [logs])

  const runSimulation = () => {
    if (isSimulating) return
    setIsSimulating(true)
    setLogs([])
    
    let currentLogIndex = 0
    const interval = setInterval(() => {
      if (currentLogIndex < simulationLogs.length) {
        setLogs(prev => [...prev, simulationLogs[currentLogIndex]])
        currentLogIndex++
      } else {
        clearInterval(interval)
        setIsSimulating(false)
      }
    }, 900)
  }

  return (
    <div className="professor-section">
      <div className="section-header">
        <h2 className="section-title">THE MASTERMIND</h2>
        <p className="section-subtitle">Sergio Marquina: Code Name "The Professor"</p>
        <div className="red-divider"></div>
      </div>

      <div className="prof-layout">
        
        <div className="prof-identity">
          <div className="prof-dossier-card">
            <div className="prof-photo-wrap">
              <div className="scan-bar"></div>
              
              <img src="/images/professor.png" className="prof-dossier-photo" alt="The Professor" />
              <div className="photo-corner photo-tl"></div>
              <div className="photo-corner photo-tr"></div>
              <div className="photo-corner photo-bl"></div>
              <div className="photo-corner photo-br"></div>
            </div>
            <div className="prof-meta">
              <span className="meta-tag">DIRECTOR OF OPERATIONS</span>
              <h3 className="meta-name">SERGIO MARQUINA</h3>
              <p className="meta-detail"><span>CODENAME:</span> THE PROFESSOR</p>
              <p className="meta-detail"><span>KNOWN ALIAS:</span> SALVA MARTIN</p>
              <p className="meta-detail"><span>HQ:</span> MADRID SECR-HANGAR 03</p>
            </div>
          </div>

          <div className="rules-section">
            <h4 className="rules-title">THE CORE RULES</h4>
            <div className="rules-tabs">
              {rulesData.map(rule => (
                <button
                  key={rule.id}
                  className={`rule-tab-btn ${activeRule === rule.id ? 'active' : ''}`}
                  onClick={() => setActiveRule(rule.id)}
                >
                  RULE {rule.id}
                </button>
              ))}
            </div>
            <div className="rule-content-box">
              <h4 className="rule-content-title">
                {rulesData[activeRule - 1].title}
              </h4>
              <p className="rule-content-desc">
                {rulesData[activeRule - 1].desc}
              </p>
            </div>
          </div>
        </div>

        <div className="hangar-control-room">
          <h4 className="control-title">HANGAR TACTICAL COMMAND CENTER</h4>
          
          <div className="control-grid">
            
            <div className="cctv-monitor">
              <div className="monitor-title-bar">
                <span>CCTV MONITOR CHANNELS</span>
                <span className="live-badge">● LIVE FEED</span>
              </div>
              
              <div className="cctv-grid">
                {cameraFeeds.map(cam => (
                  <button
                    key={cam.id}
                    className={`cctv-cam-btn ${activeCam === cam.id ? 'active' : ''}`}
                    onClick={() => setActiveCam(cam.id)}
                  >
                    <div className="cam-static-effect"></div>
                    <span className="cam-btn-name">{cam.name}</span>
                    <span className="cam-btn-status" data-status={cam.status}>
                      {cam.status}
                    </span>
                  </button>
                ))}
              </div>

              <div className="cctv-info-panel">
                <div className="info-panel-row">
                  <span>CHANNEL ID:</span>
                  <span className="glow-cyan">{selectedCam.id.toUpperCase()}</span>
                </div>
                <div className="info-panel-row">
                  <span>SIGNAL PING:</span>
                  <span>{selectedCam.ping}</span>
                </div>
                <div className="info-panel-desc">
                  {selectedCam.details}
                </div>
              </div>
            </div>

            <div className="terminal-monitor">
              <div className="monitor-title-bar">
                <span>TACTICAL PLAN SIMULATOR v1.02</span>
                <span className="term-system-status">SECURE CONNECT</span>
              </div>

              <div className="terminal-screen">
                <div className="terminal-scanlines"></div>
                <div className="terminal-logs-container">
                  {logs.length === 0 ? (
                    <div className="terminal-placeholder">
                      <p>PLAN SIMULATOR READY</p>
                      <p className="small-mute">Awaiting trigger code. Click button below to run.</p>
                    </div>
                  ) : (
                    logs.map((log, index) => (
                      <div className="terminal-log-line" key={index}>
                        <span className="log-time">[{log.time}]</span>
                        <span className="log-text">{log.text}</span>
                      </div>
                    ))
                  )}
                  <div ref={terminalEndRef} />
                </div>
              </div>

              <button 
                className={`simulate-btn ${isSimulating ? 'disabled' : ''}`}
                onClick={runSimulation}
                disabled={isSimulating}
              >
                {isSimulating ? 'SIMULATION RUNNING...' : 'INITIATE PLAN VALENCIA'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Professor
