import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronUp } from 'lucide-react';
import AboutSection from './pages/about';
import ListSection from './pages/listsection';
import Home from './pages/home';
import Contact from './pages/contact';
import Logo from '../src/images/logo.png';

const FurnitureShowroom = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const mainRef = useRef(null);
  const sectionRefs = {
    home: useRef(null),
    list: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Header shadow effect
      setIsScrolled(window.scrollY > 50);
      
      // Scroll to top button
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      if (mainRef.current) {
        const sections = ['home', 'list', 'about', 'contact'];
        const currentScroll = window.scrollY + 100; // Offset for header
        
        for (const section of sections) {
          const ref = sectionRefs[section];
          if (ref?.current) {
            const { offsetTop, offsetHeight } = ref.current;
            if (currentScroll >= offsetTop && currentScroll < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation handler
  const handleNavigate = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    
    if (sectionRefs[section]?.current) {
      const headerOffset = 80;
      const elementPosition = sectionRefs[section].current.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Navigation handler to pass to Home component
  const handleNavigateToList = () => {
    handleNavigate('list');
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Fade-in animation style
  const fadeInStyle = {
    animation: 'fadeIn 0.6s ease-out forwards',
    opacity: 0,
  };

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .section-transition {
        transition: all 0.3s ease-in-out;
      }
      
      .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      }
      
      .scroll-top-btn {
        animation: fadeIn 0.3s ease-out;
      }
      
      .nav-item {
        position: relative;
        overflow: hidden;
      }
      
      .nav-item::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #67e8f9;
        transition: width 0.3s ease;
      }
      
      .nav-item:hover::after {
        width: 100%;
      }
      
      .nav-item.active::after {
        width: 100%;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* HEADER with scroll effect */}
      <header 
        style={{ 
          background: '#172554', 
          color: 'white', 
          position: 'sticky', 
          top: 0, 
          zIndex: 50,
          boxShadow: isScrolled 
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
            : '0 25px 50px -12px rgba(0,0,0,0.25)',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: isScrolled ? '12px 20px' : '16px 20px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          transition: 'padding 0.3s ease-in-out'
        }}>
          <img 
            src={Logo}
            alt="Furniture Logo"
            style={{ 
              height: isScrolled ? '70px' : '100px',
              objectFit: 'contain', 
              cursor: 'pointer',
              transition: 'height 0.3s ease-in-out'
            }}
            onClick={() => handleNavigate('home')}
            className="hover-lift"
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: '32px' }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'list', label: 'List' },
                { id: 'about', label: 'About Us' },
                { id: 'contact', label: 'Contact' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavigate(section.id)}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  style={{
                    fontWeight: '600',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: activeSection === section.id ? '#67e8f9' : 'white',
                    transition: 'color 0.3s',
                    position: 'relative',
                    padding: '8px 0'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#67e8f9'}
                  onMouseOut={(e) => e.target.style.color = activeSection === section.id ? '#67e8f9' : 'white'}
                >
                  {section.label}
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
                animation: menuOpen ? 'slideInRight 0.3s ease-out' : 'none'
              }}
              className="hover-lift"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu with animation */}
        {menuOpen && isMobile && (
          <nav style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            padding: '16px 20px', 
            paddingBottom: '16px',
            animation: 'slideInLeft 0.3s ease-out'
          }}>
            {['home', 'list', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleNavigate(section)}
                style={{
                  textAlign: 'left',
                  fontWeight: '600',
                  color: activeSection === section ? '#67e8f9' : 'white',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  animation: 'fadeIn 0.5s ease-out forwards',
                  animationDelay: `${['home', 'list', 'about', 'contact'].indexOf(section) * 0.1}s`,
                  opacity: 0
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(103, 232, 249, 0.1)';
                  e.target.style.transform = 'translateX(10px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'none';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                {section === 'home'
                  ? 'Home'
                  : section === 'list'
                  ? 'List'
                  : section === 'about'
                  ? 'About Us'
                  : 'Contact'}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* MAIN CONTENT with refs for scroll detection */}
      <main ref={mainRef}>
        <div ref={sectionRefs.home} style={fadeInStyle}>
          {activeSection === 'home' && <Home onNavigate={handleNavigateToList} />}
        </div>
        <div ref={sectionRefs.list} style={fadeInStyle}>
          {activeSection === 'list' && <ListSection />}
        </div>
        <div ref={sectionRefs.about} style={fadeInStyle}>
          {activeSection === 'about' && <AboutSection />}
        </div>
        <div ref={sectionRefs.contact} style={fadeInStyle}>
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            background: '#172554',
            color: 'white',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 40,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#1e40af';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#172554';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* FOOTER with animations */}
      <footer 
        style={{ 
          background: '#172554', 
          color: 'white', 
          padding: '48px 20px',
          animation: 'fadeIn 0.8s ease-out'
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
          }}
        >
          {[
            {
              title: 'Furniture Showroom',
              content: 'Your destination for quality home furnishings',
              animation: 'slideInLeft'
            },
            {
              title: 'Quick Links',
              links: ['Home', 'Products', 'About Us'],
              sections: ['home', 'list', 'about'],
              animation: 'fadeIn'
            },
            {
              title: 'Categories',
              links: ['Living Room', 'Bedroom', 'Office'],
              animation: 'fadeIn'
            },
            {
              title: 'Contact',
              content: ['+1 (555) 123-4567', 'info@furnitureshowroom.com'],
              animation: 'slideInRight'
            }
          ].map((column, index) => (
            <div 
              key={index} 
              style={{ 
                animation: `${column.animation} 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <h4 style={{ 
                fontWeight: 'bold', 
                marginBottom: '16px',
                color: '#67e8f9',
                fontSize: '18px'
              }}>
                {column.title}
              </h4>
              
              {column.content && Array.isArray(column.content) ? (
                column.content.map((item, i) => (
                  <p 
                    key={i} 
                    style={{ 
                      color: '#bfdbfe', 
                      marginBottom: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    className="hover-lift"
                    onMouseOver={(e) => {
                      e.target.style.color = '#67e8f9';
                      e.target.style.paddingLeft = '5px';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#bfdbfe';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {item}
                  </p>
                ))
              ) : column.content ? (
                <p style={{ color: '#bfdbfe' }}>{column.content}</p>
              ) : null}
              
              {column.links && column.sections ? (
                column.links.map((link, i) => (
                  <p 
                    key={i}
                    onClick={() => handleNavigate(column.sections[i])}
                    style={{ 
                      color: '#bfdbfe', 
                      cursor: 'pointer', 
                      marginBottom: '12px',
                      transition: 'all 0.3s ease',
                      padding: '4px 0'
                    }}
                    className="hover-lift"
                    onMouseOver={(e) => {
                      e.target.style.color = '#67e8f9';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#bfdbfe';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link}
                  </p>
                ))
              ) : column.links ? (
                column.links.map((link, i) => (
                  <p 
                    key={i}
                    style={{ 
                      color: '#bfdbfe', 
                      cursor: 'pointer', 
                      marginBottom: '12px',
                      transition: 'all 0.3s ease',
                      padding: '4px 0'
                    }}
                    className="hover-lift"
                    onMouseOver={(e) => {
                      e.target.style.color = '#67e8f9';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = '#bfdbfe';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {link}
                  </p>
                ))
              ) : null}
            </div>
          ))}
        </div>
        <div
          style={{
            maxWidth: '1280px',
            margin: '32px auto 0',
            paddingTop: '32px',
            borderTop: '1px solid #1e40af',
            textAlign: 'center',
            color: '#93c5fd',
            animation: 'fadeIn 1s ease-out'
          }}
        >
          <p style={{ fontSize: '14px' }}>
            &copy; 2024 Furniture Showroom. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FurnitureShowroom;