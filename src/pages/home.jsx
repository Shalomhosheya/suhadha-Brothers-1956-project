import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
// import styles from './home.module.css';
const Home = ()=>{
     const [activeSection, setActiveSection] = useState('home');
      const [activeCategory, setActiveCategory] = useState('bathroom');
      const [menuOpen, setMenuOpen] = useState(false);
    
      const categories = [
        { id: 'bathroom', label: 'Bathroom' },
        { id: 'bedroom', label: 'Bedroom' },
        { id: 'kids', label: 'Kids' },
        { id: 'accent', label: 'Accent' },
        { id: 'entry', label: 'Entry' },
        { id: 'livingroom', label: 'Living Room' },
        { id: 'dining', label: 'Dining' },
        { id: 'kitchen', label: 'Kitchen' },
        { id: 'outdoor', label: 'Outdoor' },
        { id: 'office', label: 'Office' },
        { id: 'storage', label: 'Storage' },
        { id: 'homedecoration', label: 'Home Decoration' }
      ];
    
    
    return(
    <div style={{ minHeight: '100vh' }}>
      {/* <style>{styles}</style> */}
      
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '600px',
        background: 'linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 50%, #172554 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1
        }}>
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            width: '256px',
            height: '256px',
            background: '#38bdf8',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            width: '384px',
            height: '384px',
            background: '#22d3ee',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}></div>
        </div>
        
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px'
          }}>Elevate Your Space</h1>
          <p style={{
            fontSize: '28px',
            color: '#bfdbfe',
            marginBottom: '32px'
          }}>Premium Furniture for Every Room</p>
          <button 
            onClick={() => setActiveSection('list')}
            style={{
              background: '#06b6d4',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: 'scale(1)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#0891b2';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#06b6d4';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Featured Categories */}
      <div style={{
        padding: '80px 20px',
        background: '#f8fafc'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#172554',
          marginBottom: '48px'
        }}>Shop by Room</h2>
        
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {categories.slice(0, 8).map(cat => (
            <div 
              key={cat.id}
              onClick={() => {
                setActiveSection('list');
                setActiveCategory(cat.id);
              }}
              style={{
                cursor: 'pointer',
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                height: '192px',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>{cat.label}</span>
              </div>
              <div style={{
                padding: '16px',
                background: '#1e3a8a',
                transition: 'background 0.3s'
              }}>
                <p style={{
                  color: '#67e8f9',
                  textAlign: 'center',
                  fontWeight: '600'
                }}>Explore →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div style={{
        padding: '80px 20px',
        background: '#172554'
      }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            marginBottom: '48px'
          }}>Why Choose Us</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '32px',
              background: '#1e3a8a',
              borderRadius: '12px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#06b6d4',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <ShoppingCart color="white" size={32} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '12px'
              }}>Quality Guaranteed</h3>
              <p style={{ color: '#bfdbfe' }}>Premium materials and craftsmanship in every piece</p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '32px',
              background: '#1e3a8a',
              borderRadius: '12px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#06b6d4',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <Phone color="white" size={32} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '12px'
              }}>Expert Support</h3>
              <p style={{ color: '#bfdbfe' }}>Our team is ready to help you find the perfect fit</p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: '32px',
              background: '#1e3a8a',
              borderRadius: '12px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#06b6d4',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <MapPin color="white" size={32} />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '12px'
              }}>Fast Delivery</h3>
              <p style={{ color: '#bfdbfe' }}>Quick and secure shipping to your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};
export default Home;
