import React from 'react';
import { Bell, Coffee, Clock, Activity, LogIn, LogOut, Calendar, ChevronsRight, Check } from 'lucide-react';
import './PayrollDashboard.css';

const PayrollDashboard = () => {
  return (
    <div className="pr-dashboard">
      <div className="pr-header">
        <h2>Eazzio Payroll</h2>
        <div className="pr-bell">
          <Bell size={16} />
          <span className="pr-badge">8</span>
        </div>
      </div>

      <div className="pr-greeting">
        <div>
          <h1 className="pr-greeting-title">Good Evening, Pritisha</h1>
          <p className="pr-greeting-date">Monday, July 13</p>
        </div>
        <div className="pr-avatar">
          <img src="https://i.pravatar.cc/150?u=pritisha" alt="User" />
        </div>
      </div>

      <div className="pr-swipe-btn">
        <div className="pr-swipe-circle"><ChevronsRight size={14} color="#059669" /></div>
        <span className="pr-swipe-text">{'> > >'} Swipe to Punch In (Session 1)</span>
      </div>

      <div className="pr-stats-row">
        <div className="pr-stat-card">
          <span className="pr-stat-title">Punch In Time</span>
          <span className="pr-stat-val pr-stat-green">--:--:--</span>
          <span className="pr-stat-sub">Not Active</span>
        </div>
        <div className="pr-stat-card">
          <span className="pr-stat-title">Punch Out Time</span>
          <span className="pr-stat-val pr-stat-red">--:--:--</span>
          <span className="pr-stat-sub">Pending</span>
        </div>
        <div className="pr-stat-card">
          <span className="pr-stat-title">Hours Worked</span>
          <span className="pr-stat-val pr-stat-teal">0.0 hrs</span>
          <span className="pr-stat-sub">Target: 7h</span>
        </div>
      </div>

      <div className="pr-hero-card pr-hero-expanded">
        <div className="pr-hero-top">
          <span className="pr-hero-working">WORKING HOURS</span>
          <div className="pr-hero-date-badge"><Calendar size={10} /> 13 07 2026</div>
        </div>
        <div className="pr-hero-timer">00:00:00</div>
        <div className="pr-hero-worked-today"><Check size={10} /> Hours worked today</div>
        
        <div className="pr-hero-divider"></div>

        <div className="pr-hero-row-wrapper">
          <div className="pr-hero-row">
            <div className="pr-hero-row-left">
              <div className="pr-hero-icon"><Coffee size={12} /></div>
              <span className="pr-hero-label">Total Break Time</span>
            </div>
            <span className="pr-hero-value">00h-00m / 45m</span>
          </div>
          <div className="pr-hero-row">
            <div className="pr-hero-row-left">
              <div className="pr-hero-icon"><Clock size={12} /></div>
              <span className="pr-hero-label">Shift Timing</span>
            </div>
            <span className="pr-hero-value">10:00 am - 5:00 pm</span>
          </div>
        </div>
      </div>

      <div className="pr-section">
        <div className="pr-section-header">
          <div className="pr-section-icon"><Activity size={12} color="#475569" /></div>
          <h3>Your activity</h3>
        </div>
        
        <div className="pr-card">
          <div className="pr-timeline">
            <div className="pr-timeline-item">
              <div className="pr-timeline-icon pr-icon-in"><LogIn size={10} /></div>
              <div className="pr-timeline-content">
                <span className="pr-timeline-title">Punch In</span>
                <span className="pr-timeline-time">10:43 am</span>
              </div>
            </div>
            
            <div className="pr-timeline-item">
              <div className="pr-timeline-icon pr-icon-out"><LogOut size={10} /></div>
              <div className="pr-timeline-content">
                <span className="pr-timeline-title">Punch Out</span>
                <span className="pr-timeline-time">10:46 am</span>
              </div>
            </div>
            
            <div className="pr-break-badge">
              <Coffee size={8} /> 2 Min Break
            </div>
            
            <div className="pr-timeline-item">
              <div className="pr-timeline-icon pr-icon-in"><LogIn size={10} /></div>
              <div className="pr-timeline-content">
                <span className="pr-timeline-title">Punch In</span>
                <span className="pr-timeline-time">10:48 am</span>
              </div>
            </div>
            
            <div className="pr-timeline-line"></div>
          </div>
        </div>
      </div>

      <div className="pr-section">
        <div className="pr-section-header">
          <h3>Travel & Odometer Summary</h3>
        </div>
        <div className="pr-card pr-odometer-card">
          <h4 className="pr-odometer-title">Today's Entry</h4>
          <p className="pr-odometer-desc">No odometer readings recorded for today.</p>
          <div className="pr-odometer-btn"></div>
        </div>
      </div>
    </div>
  );
};
export default PayrollDashboard;
