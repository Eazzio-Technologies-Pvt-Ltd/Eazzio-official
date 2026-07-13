import React from 'react';
import { Menu, MessageCircle, QrCode, MonitorSmartphone, History, Send, Calendar, ShoppingCart, Star } from 'lucide-react';
import './WhatsBulkDashboard.css';

const WhatsBulkDashboard = () => {
  return (
    <div className="wb-dashboard">
      <div className="wb-navbar">
        <Menu size={12} color="#4b5563" />
        <div className="wb-logo-area">
          <div className="wb-logo-icon">
            <MessageCircle size={10} color="white" fill="white" />
          </div>
          <span className="wb-logo-text">Whats-Bulk</span>
        </div>
        <div className="wb-nav-placeholder"></div>
      </div>

      <div className="wb-header">
        <h2 className="wb-page-title">Direct Messenger 🚀</h2>
        <p className="wb-page-sub">Draft messages, input contact credentials, and trigger WhatsApp delivery instantly.</p>
        
        <div className="wb-action-btns">
          <div className="wb-btn-primary"><MonitorSmartphone size={8} /> Launch WhatsApp Web</div>
          <div className="wb-btn-secondary"><QrCode size={8} /> View QR Screen</div>
        </div>
      </div>

      <div className="wb-content">
        <div className="wb-card">
          <div className="wb-card-header">
            <span className="wb-card-title">Broadcast Composer</span>
            <span className="wb-badge-active">ACTIVE PROFILE</span>
          </div>

          <div className="wb-form-group">
            <label className="wb-label">RECIPIENT NAME</label>
            <div className="wb-input">E.g., Amit Sharma</div>
          </div>

          <div className="wb-form-group">
            <label className="wb-label">PHONE NUMBER</label>
            <div className="wb-input">E.g., +919876543210</div>
          </div>

          <div className="wb-form-group">
            <label className="wb-label">QUICK TEMPLATES</label>
            <div className="wb-templates">
              <span className="wb-template-tag"><Calendar size={6} color="#3b82f6"/> Appointment</span>
              <span className="wb-template-tag"><ShoppingCart size={6} color="#6b7280"/> Abandoned Cart</span>
              <span className="wb-template-tag"><Star size={6} color="#eab308"/> Review Request</span>
            </div>
          </div>

          <div className="wb-form-group">
            <label className="wb-label">MESSAGE TEXT</label>
            <div className="wb-textarea">Type your WhatsApp notification body here...</div>
          </div>
          
          <div className="wb-btn-send"><Send size={8} /> Send Message</div>
        </div>

        <div className="wb-card">
          <div className="wb-card-header">
            <span className="wb-card-title">LIVE RENDER PREVIEW</span>
          </div>
          <div className="wb-preview-box">
            <div className="wb-preview-header">
              <div className="wb-preview-dot"></div> Recipient Preview
            </div>
            <div className="wb-preview-body">
              Start writing your message in the composer to view live preview rendering.
            </div>
          </div>
        </div>

        <div className="wb-card">
          <div className="wb-card-header">
            <span className="wb-card-title"><History size={8} /> RECENT DELIVERY LOGS</span>
            <span className="wb-text-link">Clear Logs</span>
          </div>
          <div className="wb-logs-empty">
            No broadcast logs available.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsBulkDashboard;
