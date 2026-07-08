import booksIcon from '../assets/eazzio-books-icon.jpg';
import telecallerIcon from '../assets/eazzio-telecaller-icon.jpg';
import payrollIcon from '../assets/eazzio-payroll-icon.jpg';
import remindersIcon from '../assets/eazzio-reminders-icon.jpg';

export const products = [
  {
    id: 'eazzio-payroll',
    name: 'Eazzio Payroll',
    slug: 'eazzio-payroll',
    externalLink: 'https://payroll.eazzio.com',
    shortDescription: 'A Field Force Management System with payroll generation features.',
    fullDescription: 'Eazzio Payroll helps companies manage field employees, attendance, task tracking, live location workflows, salary calculation, payroll reports, and employee performance in one centralized platform.',
    icon: payrollIcon,
    features: [
      'Field Employee Management',
      'Live Location Workflows',
      'Attendance & Task Tracking',
      'Salary Calculation',
      'Payroll Reports'
    ],
    benefits: [
      'Streamlines field operations',
      'Automates complex payroll calculations',
      'Increases field employee productivity',
      'Provides real-time visibility into field activities'
    ],
    useCases: [
      'Sales teams on the field',
      'Delivery and logistics personnel',
      'Field service technicians'
    ],
    ctaText: 'Request Demo'
  },
  {
    id: 'eazzio-books',
    name: 'Eazzio Books',
    slug: 'eazzio-books',
    externalLink: 'https://books.eazzio.com',
    shortDescription: 'A complete business accounting software for invoices, expenses, and GST reports.',
    fullDescription: 'Eazzio Books is a comprehensive business accounting software designed for managing invoices, quotes, customers, vendors, expenses, payments, GST-ready reports, and total financial management.',
    icon: booksIcon,
    features: [
      'Invoices & Quotes Generation',
      'Customer & Vendor Management',
      'Expense Tracking',
      'GST-ready Accounting',
      'Financial Management'
    ],
    benefits: [
      'Simplifies tax compliance',
      'Improves cash flow visibility',
      'Reduces manual data entry errors',
      'Professional invoicing'
    ],
    useCases: [
      'Small to medium businesses',
      'Freelancers and agencies',
      'Retail and wholesale distributors'
    ],
    ctaText: 'Request Demo'
  },
  {
    id: 'eazzio-reminders',
    name: 'Eazzio Reminders',
    slug: 'eazzio-reminders',
    externalLink: 'Mobile App',
    shortDescription: 'A reminder and task management platform for businesses to manage follow-ups.',
    fullDescription: 'Eazzio Reminders is a dedicated task management platform for businesses to seamlessly manage follow-ups, strict deadlines, team alerts, scheduled reminders, and boost overall team productivity.',
    icon: remindersIcon,
    features: [
      'Follow-up Management',
      'Deadline Tracking',
      'Automated Alerts',
      'Scheduled Reminders',
      'Team Productivity Tools'
    ],
    benefits: [
      'Ensures no task falls through the cracks',
      'Improves team accountability',
      'Reduces missed deadlines',
      'Boosts overall productivity'
    ],
    useCases: [
      'Project management teams',
      'Customer success follow-ups',
      'Administrative teams'
    ],
    ctaText: 'Request Demo'
  },
  {
    id: 'eazzio-telecaller',
    name: 'Eazzio Telecaller',
    slug: 'eazzio-telecaller',
    externalLink: 'https://telecaller.eazzio.com',
    shortDescription: 'A telecaller management platform for lead tracking and sales calling workflows.',
    fullDescription: 'Eazzio Telecaller is an advanced telecaller management platform built for comprehensive lead tracking, call follow-ups, robust customer communication, tracking team performance, and managing sales/support calling workflows.',
    icon: telecallerIcon,
    features: [
      'Lead Tracking & Management',
      'Call Follow-ups',
      'Customer Communication',
      'Team Performance Analytics',
      'Sales & Support Workflows'
    ],
    benefits: [
      'Increases call conversion rates',
      'Organizes lead data effectively',
      'Monitors telecaller performance',
      'Streamlines outbound campaigns'
    ],
    useCases: [
      'Sales development teams',
      'Customer support centers',
      'Market research agencies'
    ],
    ctaText: 'Request Demo'
  },
  {
    id: 'eazzio-whats-bulk',
    name: 'Eazzio Whats Bulk',
    slug: 'eazzio-whats-bulk',
    externalLink: 'https://whatsbulk.eazzio.com',
    shortDescription: 'A bulk messaging platform to send WhatsApp messages at scale.',
    fullDescription: 'Eazzio Whats Bulk is a powerful WhatsApp messaging platform that allows businesses to send bulk promotional and transactional messages efficiently to their customer base.',
    icon: 'MessageSquare',
    features: [
      'Bulk WhatsApp Messaging',
      'Campaign Management',
      'Automated Replies',
      'Contact Management',
      'Delivery Analytics'
    ],
    benefits: [
      'High open and read rates',
      'Reach thousands of customers instantly',
      'Cost-effective marketing channel',
      'Personalized message templates'
    ],
    useCases: [
      'Marketing promotions',
      'Event reminders and invites',
      'Transactional alerts'
    ],
    ctaText: 'Request Demo'
  }
];
