import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });

    try {
      // Option 1: Using EmailJS (recommended for frontend-only solution)
      // Install: npm install @emailjs/browser
      // Uncomment below if using EmailJS:
      /*
      const emailjs = require('@emailjs/browser');
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'info@furnitureshowroom.com'
        },
        'YOUR_PUBLIC_KEY'
      );
      */

      // Option 2: Using your own backend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send email');

      // Success
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitted: false, loading: false, error: null });
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ 
        submitted: false, 
        loading: false, 
        error: 'Failed to send message. Please try again or contact us directly.' 
      });
    }
  };

  // Validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           isValidEmail(formData.email) &&
           formData.subject.trim() &&
           formData.message.trim();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '48px 20px' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#172554', marginBottom: '32px' }}>
          Contact Us
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          
          {/* Contact Form */}
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px' }}>
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Name Input */}
              <div>
                <label style={{ display: 'block', color: '#1e3a8a', fontWeight: '600', marginBottom: '8px' }}>
                  Name *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name" 
                  required
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #bfdbfe', 
                    borderRadius: '8px', 
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#bfdbfe'}
                />
              </div>

              {/* Email Input */}
              <div>
                <label style={{ display: 'block', color: '#1e3a8a', fontWeight: '600', marginBottom: '8px' }}>
                  Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  required
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #bfdbfe', 
                    borderRadius: '8px', 
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#bfdbfe'}
                />
                {formData.email && !isValidEmail(formData.email) && (
                  <p style={{ color: '#dc2626', fontSize: '14px', marginTop: '4px' }}>
                    Please enter a valid email address
                  </p>
                )}
              </div>

              {/* Subject Input */}
              <div>
                <label style={{ display: 'block', color: '#1e3a8a', fontWeight: '600', marginBottom: '8px' }}>
                  Subject *
                </label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?" 
                  required
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #bfdbfe', 
                    borderRadius: '8px', 
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#bfdbfe'}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label style={{ display: 'block', color: '#1e3a8a', fontWeight: '600', marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="How can we help you?" 
                  required
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    border: '2px solid #bfdbfe', 
                    borderRadius: '8px', 
                    fontSize: '16px', 
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#bfdbfe'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={!isFormValid() || formStatus.loading}
                style={{ 
                  width: '100%', 
                  background: isFormValid() && !formStatus.loading ? '#1e3a8a' : '#94a3b8', 
                  color: 'white', 
                  padding: '14px', 
                  borderRadius: '8px', 
                  fontWeight: '600', 
                  border: 'none', 
                  cursor: isFormValid() && !formStatus.loading ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => {
                  if (isFormValid() && !formStatus.loading) {
                    e.target.style.background = '#1e40af';
                  }
                }}
                onMouseOut={(e) => {
                  if (isFormValid() && !formStatus.loading) {
                    e.target.style.background = '#1e3a8a';
                  }
                }}
              >
                {formStatus.loading ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '3px solid rgba(255,255,255,0.3)',
                      borderTop: '3px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success Message */}
              {formStatus.submitted && (
                <div style={{
                  background: '#d1fae5',
                  border: '2px solid #10b981',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle color="#10b981" size={24} />
                  <div>
                    <p style={{ color: '#065f46', fontWeight: '600', marginBottom: '4px' }}>
                      Message sent successfully!
                    </p>
                    <p style={{ color: '#047857', fontSize: '14px' }}>
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <div style={{
                  background: '#fee2e2',
                  border: '2px solid #ef4444',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <AlertCircle color="#ef4444" size={24} />
                  <p style={{ color: '#991b1b', fontSize: '14px' }}>
                    {formStatus.error}
                  </p>
                </div>
              )}
            </form>

            {/* Add spinning animation */}
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: '#1e3a8a', color: 'white', borderRadius: '12px', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <Phone color="#67e8f9" size={24} />
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Phone</h4>
                  <p style={{ color: '#bfdbfe', marginBottom: '4px' }}>+1 (555) 123-4567</p>
                  <p style={{ color: '#93c5fd', fontSize: '14px' }}>Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <Mail color="#67e8f9" size={24} />
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Email</h4>
                  <a href="mailto:info@furnitureshowroom.com" style={{ color: '#bfdbfe', textDecoration: 'none', display: 'block', marginBottom: '4px' }}>
                    info@furnitureshowroom.com
                  </a>
                  <a href="mailto:support@furnitureshowroom.com" style={{ color: '#bfdbfe', textDecoration: 'none', display: 'block' }}>
                    support@furnitureshowroom.com
                  </a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <MapPin color="#67e8f9" size={24} />
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Address</h4>
                  <p style={{ color: '#bfdbfe' }}>123 Furniture Avenue</p>
                  <p style={{ color: '#bfdbfe' }}>Design District, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '32px' }}>
              <h4 style={{ fontWeight: 'bold', fontSize: '20px', color: '#1e3a8a', marginBottom: '16px' }}>
                Follow Us
              </h4>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#1e3a8a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#1e40af'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#1e3a8a'}
                >
                  <Facebook color="white" size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#1e3a8a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#1e40af'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#1e3a8a'}
                >
                  <Instagram color="white" size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: '#1e3a8a',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#1e40af'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#1e3a8a'}
                >
                  <Twitter color="white" size={20} />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '32px' }}>
              <h4 style={{ fontWeight: 'bold', fontSize: '20px', color: '#1e3a8a', marginBottom: '16px' }}>
                Business Hours
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#1e40af' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monday - Friday</span>
                  <span style={{ fontWeight: '600' }}>9:00 AM - 6:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Saturday</span>
                  <span style={{ fontWeight: '600' }}>10:00 AM - 4:00 PM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sunday</span>
                  <span style={{ fontWeight: '600' }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;