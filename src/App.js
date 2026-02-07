import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../src/images/logo.png'
import AboutSection from './pages/about';
import ListSection from './pages/listsection';
import Home from './pages/home';
import Contact from './pages/contact';
import LocateMe from './pages/locateme';
import Team from './pages/team';

const FurnitureShowroom = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrollY, setScrollY] = useState(0);
  const mainRef = useRef(null);

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Navigation handler for Home component
  const handleNavigateToList = () => {
    setActiveSection('list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['home', 'list', 'about', 'team', 'locate', 'contact'];

  const getNavLabel = (section) => {
    const labels = {
      home: 'Home',
      list: 'List',
      about: 'About Us',
      team: 'Team',
      locate: 'Locations',
      contact: 'Contact'
    };
    return labels[section];
  };

  // Header opacity based on scroll
  const headerOpacity = Math.min(0.95, 0.85 + scrollY / 1000);
  const headerShadow = scrollY > 50 ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 10px 30px -10px rgba(0,0,0,0.1)';

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #f8fafc, #e0f2fe)',
      position: 'relative'
    }}>
      {/* HEADER */}
      <header style={{ 
        background: `rgba(23, 37, 84, ${headerOpacity})`,
        backdropFilter: 'blur(10px)',
        color: 'white', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        boxShadow: headerShadow,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '16px 20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <img 
            src={logo}
            alt="Furniture Logo"
            style={{ 
              height: '100px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            onClick={() => {
              setActiveSection('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: '32px' }}>
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    fontWeight: '600',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: activeSection === section ? '#67e8f9' : 'white',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    padding: '8px 0',
                    transform: activeSection === section ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#67e8f9';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = activeSection === section ? '#67e8f9' : 'white';
                    e.target.style.transform = activeSection === section ? 'translateY(-2px)' : 'translateY(0)';
                  }}
                >
                  {getNavLabel(section)}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: activeSection === section ? '100%' : '0%',
                    height: '2px',
                    background: '#67e8f9',
                    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }} />
                </button>
              ))}
            </nav>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer', 
                color: 'white',
                transition: 'transform 0.3s ease',
                transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <nav style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            padding: '16px 20px',
            paddingBottom: '16px',
            background: 'rgba(23, 37, 84, 0.98)',
            animation: 'slideDown 0.3s ease-out'
          }}>
            {navItems.map((section, index) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  padding: '8px 0',
                  opacity: 0,
                  animation: `fadeInUp 0.3s ease-out ${index * 0.05}s forwards`,
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#67e8f9'}
                onMouseOut={(e) => e.target.style.color = 'white'}
              >
                {getNavLabel(section)}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* MAIN CONTENT with fade transitions */}
      <main ref={mainRef} style={{
        opacity: 0,
        animation: 'fadeIn 0.6s ease-out 0.1s forwards'
      }}>
        <div style={{
          paddingBottom: '60px',
          transition: 'transform 0.1s ease-out'
        }}>
          {activeSection === 'home' && <Home onNavigate={handleNavigateToList} />}
          {activeSection === 'list' && <ListSection />}
          {activeSection === 'about' && <AboutSection />}
          {activeSection === 'team' && <Team />}
          {activeSection === 'locate' && <LocateMe />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ 
            background: 'linear-gradient(to bottom, #172554, #0f172a)',
            color: 'white', 
            padding: '24px 20px',
            position: 'relative',
            overflow: 'hidden'
          }}>

        {/* Decorative background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #67e8f9, transparent)',
          opacity: 0.5
        }} />
        
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
          }}
        >
          <div style={{
            opacity: 0,
            animation: 'fadeInUp 0.6s ease-out 0.1s forwards'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: '#67e8f9', 
              marginBottom: '16px',
              textShadow: '0 0 20px rgba(103, 232, 249, 0.3)'
            }}>
              Furniture Showroom
            </h3>
            <p style={{ color: '#bfdbfe' }}>Your destination for quality home furnishings</p>
          </div>
          
          <div style={{
            opacity: 0,
            animation: 'fadeInUp 0.6s ease-out 0.2s forwards'
          }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navItems.map((section) => (
                <p
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{ 
                    color: '#bfdbfe', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(0)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#67e8f9';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#bfdbfe';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {getNavLabel(section)}
                </p>
              ))}
            </div>
          </div>
          
          <div style={{
            opacity: 0,
            animation: 'fadeInUp 0.6s ease-out 0.3s forwards'
          }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Categories</h4>
            <p style={{ 
              color: '#bfdbfe', 
              cursor: 'pointer', 
              marginBottom: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#67e8f9';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#bfdbfe';
              e.target.style.transform = 'translateX(0)';
            }}>Living Room</p>
            <p style={{ 
              color: '#bfdbfe', 
              cursor: 'pointer', 
              marginBottom: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#67e8f9';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#bfdbfe';
              e.target.style.transform = 'translateX(0)';
            }}>Bedroom</p>
            <p style={{ 
              color: '#bfdbfe', 
              cursor: 'pointer', 
              marginBottom: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#67e8f9';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#bfdbfe';
              e.target.style.transform = 'translateX(0)';
            }}>Office</p>
          </div>
          
          <div style={{
            opacity: 0,
            animation: 'fadeInUp 0.6s ease-out 0.4s forwards'
          }}>
            <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Contact</h4>
            <p style={{ color: '#bfdbfe', marginBottom: '8px' }}>+1 (555) 123-4567</p>
            <p style={{ color: '#bfdbfe' }}>info@furnitureshowroom.com</p>
          </div>
        </div>
        
        <div
          style={{
            maxWidth: '1280px',
            margin: '32px auto 0',
            paddingTop: '32px',
            borderTop: '1px solid rgba(30, 64, 175, 0.3)',
            textAlign: 'center',
            color: '#93c5fd',
            opacity: 0,
            animation: 'fadeIn 0.6s ease-out 0.5s forwards'
          }}
        >
          <p>&copy; 2024 Furniture Showroom. All rights reserved.</p>
        </div>
      </footer>

      {/* Global Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth scroll for all browsers */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #172554, #67e8f9);
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #67e8f9, #172554);
        }
      `}</style>
    </div>
  );
};

export default FurnitureShowroom;