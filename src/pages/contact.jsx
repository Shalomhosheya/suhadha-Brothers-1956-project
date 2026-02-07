import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';


const contact = () => {
    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '48px 20px' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#172554', marginBottom: '32px' }}>Contact Us</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {/* Contact Form */}
          <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', padding: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '24px' }}>Send us a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px 16px', border: '2px solid #bfdbfe', borderRadius: '8px', fontSize: '16px' }} />
              <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '12px 16px', border: '2px solid #bfdbfe', borderRadius: '8px', fontSize: '16px' }} />
              <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '12px 16px', border: '2px solid #bfdbfe', borderRadius: '8px', fontSize: '16px', fontFamily: 'inherit' }}></textarea>
              <button type="button" style={{ width: '100%', background: '#1e3a8a', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: '#1e3a8a', color: 'white', borderRadius: '12px', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <Phone color="#67e8f9" size={24} />
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Phone</h4>
                  <p style={{ color: '#bfdbfe' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <Mail color="#67e8f9" size={24} />
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '8px' }}>Email</h4>
                  <p style={{ color: '#bfdbfe' }}>info@furnitureshowroom.com</p>
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
          </div>
        </div>
      </div>
    </div>
    );
};
export default contact;