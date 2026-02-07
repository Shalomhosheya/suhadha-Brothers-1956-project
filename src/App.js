import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import AboutSection from './pages/about';
import ListSection from './pages/listsection';
import Home from './pages/home';
import contact from './pages/contact';

const FurnitureShowroom = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Contact Section Component
  <contact/>
  
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* HEADER */}
      <header style={{ background: '#172554', color: 'white', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#67e8f9' }}>Furniture Showroom</h1>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: '32px' }}>
              {['home','list','about','contact'].map(section => (
                <button key={section} onClick={() => setActiveSection(section)}
                  style={{
                    fontWeight: '600',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: activeSection===section?'#67e8f9':'white'
                  }}>
                  {section === 'home' ? 'Home' : section === 'list' ? 'List' : section==='about'?'About Us':'Contact'}
                </button>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px', paddingBottom: '16px' }}>
            {['home','list','about','contact'].map(section => (
              <button key={section} onClick={() => { setActiveSection(section); setMenuOpen(false); }}
                style={{ textAlign: 'left', fontWeight:'600', color:'white', background:'none', border:'none', cursor:'pointer', fontSize:'16px', padding:'8px 0' }}>
                {section==='home'?'Home':section==='list'?'List':section==='about'?'About Us':'Contact'}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* MAIN */}
      <main>
        {activeSection === 'home' && <Home />}
        {activeSection === 'list' && <ListSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && <contact />}
      </main>

      {/* FOOTER */}
      <footer style={{ background:'#172554', color:'white', padding:'48px 20px' }}>
        <div style={{ maxWidth:'1280px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))', gap:'32px' }}>
          <div>
            <h3 style={{ fontSize:'20px', fontWeight:'bold', color:'#67e8f9', marginBottom:'16px' }}>Furniture Showroom</h3>
            <p style={{ color:'#bfdbfe' }}>Your destination for quality home furnishings</p>
          </div>
          <div>
            <h4 style={{ fontWeight:'bold', marginBottom:'16px' }}>Quick Links</h4>
            <p style={{ color:'#bfdbfe' }}>Privacy Policy</p>
            <p style={{ color:'#bfdbfe' }}>Terms of Service</p>
            <p style={{ color:'#bfdbfe' }}>Shipping Info</p>
          </div>
          <div>
            <h4 style={{ fontWeight:'bold', marginBottom:'16px' }}>Categories</h4>
            <p style={{ color:'#bfdbfe' }}>Living Room</p>
            <p style={{ color:'#bfdbfe' }}>Bedroom</p>
            <p style={{ color:'#bfdbfe' }}>Office</p>
          </div>
          <div>
            <h4 style={{ fontWeight:'bold', marginBottom:'16px' }}>Contact</h4>
            <p style={{ color:'#bfdbfe' }}>+1 (555) 123-4567</p>
            <p style={{ color:'#bfdbfe' }}>info@furnitureshowroom.com</p>
          </div>
        </div>
        <div style={{ maxWidth:'1280px', margin:'32px auto 0', paddingTop:'32px', borderTop:'1px solid #1e40af', textAlign:'center', color:'#93c5fd' }}>
          <p>&copy; 2024 Furniture Showroom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FurnitureShowroom;
