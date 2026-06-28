import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { products } from '../data/products';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to connect to the server. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <header className="page-hero text-center">
        <div className="container">
          <h1 className="hero-title text-white">Contact Us</h1>
          <p className="hero-subtitle text-white-muted mx-auto">
            Have questions about our software? Ready for a demo? Our team is here to help.
          </p>
        </div>
      </header>

      <section className="section bg-light">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="title-sm">Get in Touch</h2>
            <p className="text-muted mb-8">
              Fill out the form and our sales team will get back to you within 24 hours.
            </p>
            
            <div className="info-card">
              <MapPin className="text-primary" size={24} />
              <div>
                <h3 className="font-bold">Our Office</h3>
                <p className="text-muted">Jamshedpur, Jharkhand</p>
              </div>
            </div>
            
            <div className="info-card">
              <Mail className="text-primary" size={24} />
              <div>
                <h3 className="font-bold">Email Us</h3>
                <p className="text-muted">eazziogroup@gmail.com</p>
              </div>
            </div>
            
            <div className="info-card">
              <Phone className="text-primary" size={24} />
              <div>
                <h3 className="font-bold">Call Us</h3>
                <p className="text-muted">+91 80836 81114</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container card premium-card">
            <h2 className="title-sm mb-4">Send a Message</h2>
            
            {status.message && (
              <div className={`alert alert-${status.type}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group flex-1">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group flex-1">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-control" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group flex-1">
                  <label className="form-label" htmlFor="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="form-control" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group flex-1">
                  <label className="form-label" htmlFor="product">Product of Interest</label>
                  <select 
                    id="product" 
                    name="product" 
                    className="form-control"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="">Select a product...</option>
                    {products.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4" disabled={loading}>
                {loading ? 'Sending...' : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
