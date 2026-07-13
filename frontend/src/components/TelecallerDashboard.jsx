import React from 'react';
import { Clock, PhoneCall, Coffee, Hourglass, PhoneIncoming, PhoneMissed, Play, Square, LayoutGrid, Users, User, Settings } from 'lucide-react';
import './TelecallerDashboard.css';

const TelecallerDashboard = () => {
  return (
    <div className="tc-dashboard">
      <div className="tc-header">
        <h2>Caller Dashboard</h2>
      </div>

      <div className="tc-section">
        <h3 className="tc-section-title">TELEMETRY METRICS</h3>
        <div className="tc-grid-2x2">
          {/* Work Time */}
          <div className="tc-card tc-card-work">
            <div className="tc-card-header">
              <span>Work Time</span>
              <div className="tc-icon-bg"><Clock size={12} /></div>
            </div>
            <div className="tc-card-value">
              <span className="tc-highlight">4h 30m</span> <span className="tc-muted">/ 8h</span>
            </div>
            <div className="tc-progress-bar"><div className="tc-progress-fill" style={{ width: '56%' }}></div></div>
          </div>

          {/* Talk Time */}
          <div className="tc-card tc-card-talk">
            <div className="tc-card-header">
              <span>Talk Time</span>
              <div className="tc-icon-bg"><PhoneCall size={12} /></div>
            </div>
            <div className="tc-card-value">
              <span className="tc-highlight">2h 15m</span> <span className="tc-muted">/ 4h</span>
            </div>
            <div className="tc-progress-bar"><div className="tc-progress-fill" style={{ width: '56%' }}></div></div>
          </div>

          {/* Break Time */}
          <div className="tc-card tc-card-break">
            <div className="tc-card-header">
              <span>Break Time</span>
              <div className="tc-icon-bg"><Coffee size={12} /></div>
            </div>
            <div className="tc-card-value">
              <span className="tc-highlight">0h 45m</span> <span className="tc-muted">/ 2h</span>
            </div>
            <div className="tc-progress-bar"><div className="tc-progress-fill" style={{ width: '37%' }}></div></div>
          </div>

          {/* Idle Time */}
          <div className="tc-card tc-card-idle">
            <div className="tc-card-header">
              <span>Idle Time</span>
              <div className="tc-icon-bg"><Hourglass size={12} /></div>
            </div>
            <div className="tc-card-value">
              <span className="tc-highlight">1h 0m</span> <span className="tc-muted">/ -</span>
            </div>
            <div className="tc-progress-bar"><div className="tc-progress-fill" style={{ width: '0%' }}></div></div>
          </div>
        </div>
      </div>

      <div className="tc-section">
        <h3 className="tc-section-title">CALL OUTCOMES TODAY</h3>
        <div className="tc-grid-2x2">
          <div className="tc-outcome-card tc-outcome-connected">
            <div className="tc-outcome-badge"><PhoneCall size={10} /> Connected</div>
            <div className="tc-outcome-val">45</div>
            <div className="tc-outcome-dur">Duration: 2h 10m</div>
          </div>
          <div className="tc-outcome-card tc-outcome-non">
            <div className="tc-outcome-badge"><PhoneMissed size={10} /> Non-Connected</div>
            <div className="tc-outcome-val">12</div>
            <div className="tc-outcome-dur">Duration: 0s</div>
          </div>
          <div className="tc-outcome-card tc-outcome-received">
            <div className="tc-outcome-badge"><PhoneIncoming size={10} /> Received</div>
            <div className="tc-outcome-val">28</div>
            <div className="tc-outcome-dur">Duration: 1h 5m</div>
          </div>
          <div className="tc-outcome-card tc-outcome-missed">
            <div className="tc-outcome-badge"><PhoneMissed size={10} /> Missed</div>
            <div className="tc-outcome-val">5</div>
            <div className="tc-outcome-dur">Duration: 0s</div>
          </div>
        </div>
      </div>

      <div className="tc-actions">
        <button className="tc-btn tc-btn-start"><Play size={12} fill="currentColor" /> Start</button>
        <button className="tc-btn tc-btn-break"><Coffee size={12} /> Break</button>
        <button className="tc-btn tc-btn-end"><Square size={12} fill="currentColor" /> End</button>
      </div>

    </div>
  );
};

export default TelecallerDashboard;
