import { Link } from 'react-router-dom';
import { Target, Lightbulb, CheckCircle, Zap, Shield, Sparkles, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="page-hero">
        <div className="container text-center">
          <h1 className="hero-title text-white">About Eazzio Technologies</h1>
          <p className="hero-subtitle text-white-muted mx-auto">
            Building software that simplifies complex business operations and empowers modern teams to achieve more.
          </p>
        </div>
      </header>

      <section className="section bg-white">
        <div className="container about-grid">
          <div className="about-content">
            <h2 className="title">Company Overview</h2>
            <div className="title-underline"></div>
            <p className="about-text">
              Eazzio Technologies Pvt. Ltd. is a forward-thinking software development company dedicated to creating smart, scalable, and intuitive business solutions. We understand the challenges faced by modern enterprises and have engineered a suite of products designed to streamline workflows, enhance productivity, and drive growth.
            </p>
            <p className="about-text">
              From payroll and field force management to accounting and telecalling, our diverse portfolio of software solutions caters to a wide array of business needs, ensuring that you have the right tools to succeed in today's competitive landscape.
            </p>
          </div>
          <div className="about-image-placeholder">
            <img src="/team_illustration.png" alt="Eazzio Team" className="about-team-image" />
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="grid md-grid-cols-2 gap-8">
            <div className="card premium-card mission-card">
              <div className="icon-wrapper">
                <Target size={36} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality, user-centric software solutions that solve real-world business problems. We strive to empower organizations with technology that is accessible, efficient, and transformative.
              </p>
            </div>
            <div className="card premium-card vision-card">
              <div className="icon-wrapper">
                <Lightbulb size={36} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the globally recognized leader in business software solutions, known for our innovation, reliability, and unwavering commitment to customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="title">Why Partner With Us?</h2>
            <div className="title-underline mx-auto"></div>
          </div>
          <div className="grid grid-cols-3 sm-grid-cols-1 gap-8">
            <div className="card premium-card">
              <h3 className="font-bold mb-4">Deep Industry Expertise</h3>
              <p className="text-muted">
                Our team consists of seasoned professionals who understand the nuances of modern business operations. We don't just write code; we architect solutions tailored to solve specific industry bottlenecks.
              </p>
            </div>
            <div className="card premium-card">
              <h3 className="font-bold mb-4">Scalable Architectures</h3>
              <p className="text-muted">
                As your business grows, our software grows with you. We build on modern, cloud-ready architectures that ensure maximum uptime, rapid performance, and seamless feature rollouts.
              </p>
            </div>
            <div className="card premium-card">
              <h3 className="font-bold mb-4">Unmatched Support</h3>
              <p className="text-muted">
                We believe in forging long-term partnerships. From seamless onboarding to ongoing technical assistance, our dedicated support team ensures your operations never skip a beat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="title mb-4">Our Core Values</h2>
          <p className="subtitle mx-auto mb-8">The principles that guide our development and operations.</p>
          
          <div className="grid grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-8 text-left">
            <div className="value-card">
              <div className="value-icon"><Sparkles size={28} /></div>
              <h4>Innovation</h4>
              <p>We continuously explore new technologies to build smarter solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Shield size={28} /></div>
              <h4>Reliability</h4>
              <p>Our software is built to be robust, secure, and always available.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><Zap size={28} /></div>
              <h4>Simplicity</h4>
              <p>We believe complex processes should have simple, intuitive interfaces.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><TrendingUp size={28} /></div>
              <h4>Business Growth</h4>
              <p>Your success is our priority. We build tools that help you scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary text-white">
        <div className="container text-center">
          <h2 className="title text-white mb-8">What We Build</h2>
          <div className="grid grid-cols-4 md-grid-cols-2 sm-grid-cols-1 text-left gap-8">
            <div className="build-item">
              <div className="build-icon-wrapper"><CheckCircle size={24} /></div>
              <h3 className="font-bold mb-2">Eazzio Payroll</h3>
              <p className="text-white-muted text-sm">Field Force & Payroll Management</p>
            </div>
            <div className="build-item">
              <div className="build-icon-wrapper"><CheckCircle size={24} /></div>
              <h3 className="font-bold mb-2">Eazzio Books</h3>
              <p className="text-white-muted text-sm">Smart Accounting Software</p>
            </div>
            <div className="build-item">
              <div className="build-icon-wrapper"><CheckCircle size={24} /></div>
              <h3 className="font-bold mb-2">Eazzio Reminders</h3>
              <p className="text-white-muted text-sm">Task & Reminder Management</p>
            </div>
            <div className="build-item">
              <div className="build-icon-wrapper"><CheckCircle size={24} /></div>
              <h3 className="font-bold mb-2">Eazzio Telecaller</h3>
              <p className="text-white-muted text-sm">Telecaller Management Hub</p>
            </div>
          </div>
          <div className="flex justify-center" style={{ marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-primary btn-large">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
