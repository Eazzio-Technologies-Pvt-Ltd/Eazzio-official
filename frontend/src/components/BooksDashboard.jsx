import React from 'react';
import { Bell, Home, Search, Award, Wallet, CreditCard, TrendingUp, TrendingDown, ChevronDown, Eye, Briefcase, Building } from 'lucide-react';
import './BooksDashboard.css';

const BooksDashboard = () => {
  return (
    <div className="bk-dashboard">
      <div className="bk-header">
        <h2>Financial Dashboard</h2>
        <div className="bk-header-icons">
          <Award size={12} color="#fbbf24" />
          <Bell size={12} />
          <Home size={12} />
        </div>
      </div>

      <div className="bk-greeting">
        Good evening, <strong>Tinplate Computer Training Center</strong>
      </div>

      <div className="bk-search">
        <Search size={10} color="#94a3b8" />
        <span>Search customers, items, invoices...</span>
      </div>

      <div className="bk-grid-2x2">
        <div className="bk-card">
          <div className="bk-card-header">
            <div className="bk-icon-bg bk-icon-orange"><Wallet size={8} /></div>
            <span>Total Receivables</span>
          </div>
          <div className="bk-card-val">₹2,06,399.05</div>
          <div className="bk-badge bk-badge-yellow">Current Financial Year</div>
        </div>

        <div className="bk-card">
          <div className="bk-card-header">
            <div className="bk-icon-bg bk-icon-red"><CreditCard size={8} /></div>
            <span>Total Payables</span>
          </div>
          <div className="bk-card-val">₹0.00</div>
          <div className="bk-badge bk-badge-red">Current Financial Year</div>
        </div>

        <div className="bk-card">
          <div className="bk-card-header">
            <div className="bk-icon-bg bk-icon-green"><TrendingUp size={8} /></div>
            <span>Total Income</span>
          </div>
          <div className="bk-card-val">₹30,90,199.95</div>
          <div className="bk-badge bk-badge-green">Current Financial Year</div>
        </div>

        <div className="bk-card">
          <div className="bk-card-header">
            <div className="bk-icon-bg bk-icon-purple"><TrendingDown size={8} /></div>
            <span>Total Expenses</span>
          </div>
          <div className="bk-card-val">₹4,74,544.00</div>
          <div className="bk-badge bk-badge-red">Current Financial Year</div>
        </div>
      </div>

      <h3 className="bk-section-title">Monthly Overview</h3>
      <div className="bk-filters">
        <div className="bk-filter-dropdown">July <ChevronDown size={8} /></div>
        <div className="bk-filter-dropdown">2026 <ChevronDown size={8} /></div>
        <div className="bk-filter-btn">Apply</div>
      </div>

      <div className="bk-overview-grid">
        <div className="bk-overview-card">
          <div className="bk-overview-label">BUSINESS VALUE</div>
          <div className="bk-overview-val bk-text-green">₹3,04,999.95</div>
        </div>
        <div className="bk-overview-card">
          <div className="bk-overview-label">EXPENSES</div>
          <div className="bk-overview-val bk-text-red">₹0.00</div>
        </div>
        <div className="bk-overview-card">
          <div className="bk-overview-label">PROFIT</div>
          <div className="bk-overview-val bk-text-green">₹3,04,999.95</div>
        </div>
        <div className="bk-overview-card">
          <div className="bk-overview-label">NET CASH</div>
          <div className="bk-overview-val bk-text-green">₹3,69,999.95</div>
        </div>
      </div>

      <div className="bk-overview-grid">
        <div className="bk-proj-card">
          <div className="bk-proj-header">
            <span>Proj. Income</span>
            <div className="bk-view-link">View <Eye size={6} /></div>
          </div>
          <div className="bk-proj-val bk-text-green">₹65,000.00</div>
          <div className="bk-proj-desc">Expected for July 2026.</div>
        </div>
        <div className="bk-proj-card">
          <div className="bk-proj-header">
            <span>Proj. Expense</span>
            <div className="bk-view-link">View <Eye size={6} /></div>
          </div>
          <div className="bk-proj-val bk-text-red">₹0.00</div>
          <div className="bk-proj-desc">No projected expenses.</div>
        </div>
      </div>

      <div className="bk-overview-grid">
        <div className="bk-proj-card">
          <div className="bk-proj-header">
            <span>Petty Cash</span>
            <Briefcase size={8} color="#0f766e" />
          </div>
          <div className="bk-proj-val bk-text-green">₹1,04,999.95</div>
          <div className="bk-proj-desc">Click to view ledger →</div>
        </div>
        <div className="bk-proj-card">
          <div className="bk-proj-header">
            <span>Undeposited</span>
            <Building size={8} color="#0f766e" />
          </div>
          <div className="bk-proj-val">₹0.00</div>
          <div className="bk-proj-desc">Click to view ledger →</div>
        </div>
      </div>
      
    </div>
  );
};

export default BooksDashboard;
