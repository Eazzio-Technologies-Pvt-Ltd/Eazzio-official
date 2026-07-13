import React from 'react';
import { ClipboardList, CalendarDays, CalendarClock, CalendarRange, Calendar, CheckCircle2, ListChecks, ClipboardCheck, Plus } from 'lucide-react';
import './RemindersDashboard.css';

const RemindersDashboard = () => {
  return (
    <div className="rem-dashboard">
      <div className="rem-header">
        <div className="rem-logo">
          <span className="rem-logo-eazzio">e</span>
          <span className="rem-logo-triangle">▲</span>
          <span className="rem-logo-eazzio">zzio</span>
          <span className="rem-logo-reminder">REMINDER</span>
        </div>
      </div>

      <div className="rem-content">
        {/* Top Cards */}
        <div className="rem-grid-2">
          <div className="rem-card rem-card-pink">
            <div className="rem-icon-bg rem-icon-pink"><ClipboardList size={10} /></div>
            <div className="rem-card-text">
              <span className="rem-val">0</span>
              <span className="rem-label">Pending<br/>Action</span>
            </div>
          </div>
          <div className="rem-card rem-card-purple">
            <div className="rem-icon-bg rem-icon-purple"><CalendarDays size={10} /></div>
            <div className="rem-card-text">
              <span className="rem-val">0</span>
              <span className="rem-label">Scheduled<br/>Tasks</span>
            </div>
          </div>
        </div>

        {/* Upcoming Section */}
        <h3 className="rem-section-title">Upcoming Scheduled Tasks</h3>
        <div className="rem-grid-3">
          <div className="rem-card-small rem-card-orange">
            <div className="rem-icon-sm rem-icon-orange"><CalendarClock size={8} /></div>
            <span className="rem-val-lg">0</span>
            <span className="rem-label-sm">Tomorrow</span>
          </div>
          <div className="rem-card-small rem-card-teal">
            <div className="rem-icon-sm rem-icon-teal"><CalendarRange size={8} /></div>
            <span className="rem-val-lg">0</span>
            <span className="rem-label-sm">This Week</span>
          </div>
          <div className="rem-card-small rem-card-purple-light">
            <div className="rem-icon-sm rem-icon-purple-light"><Calendar size={8} /></div>
            <span className="rem-val-lg">0</span>
            <span className="rem-label-sm">This Month</span>
          </div>
        </div>

        {/* Completed Section */}
        <h3 className="rem-section-title">Completed Tasks Summary</h3>
        <div className="rem-grid-3">
          <div className="rem-card-small rem-card-green">
            <div className="rem-icon-sm rem-icon-green"><CheckCircle2 size={8} /></div>
            <span className="rem-val-lg">0</span>
            <span className="rem-label-sm">Completed T...</span>
          </div>
          <div className="rem-card-small rem-card-teal-alt">
            <div className="rem-icon-sm rem-icon-teal-alt"><ListChecks size={8} /></div>
            <span className="rem-val-lg">0</span>
            <span className="rem-label-sm">This Week</span>
          </div>
          <div className="rem-card-small rem-card-blue">
            <div className="rem-icon-sm rem-icon-blue"><ClipboardCheck size={8} /></div>
            <span className="rem-val-lg">0</span>
            <span className="rem-label-sm">This Month</span>
          </div>
        </div>
      </div>
      
      <div className="rem-bottom-spacer"></div>

      {/* FAB */}
      <div className="rem-fab">
        <Plus size={16} color="white" />
      </div>
    </div>
  );
};

export default RemindersDashboard;
