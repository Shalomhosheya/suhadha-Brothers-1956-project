import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import shop2 from '../images/shop2.jpg';

const AboutSection = () => (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      padding: '48px 20px'
    }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#172554',
          marginBottom: '32px'
        }}>About Us</h2>
        
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          padding: '32px',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#1e3a8a',
                marginBottom: '16px'
              }}>Our Story</h3>
              <p style={{
                color: '#1e40af',
                marginBottom: '16px',
                lineHeight: '1.7'
              }}>
                For over 70 years, we've been dedicated to bringing exceptional furniture to homes across the country. 
                Our passion for quality craftsmanship and timeless design has made us a trusted name in home furnishing.
              </p>
              <p style={{
                color: '#1e40af',
                lineHeight: '1.7'
              }}>
                Every piece in our collection is carefully selected to ensure it meets our high standards for 
                durability, style, and comfort. We believe your home deserves nothing but the best.
              </p>
            </div>
            <div style={{
              height: '484px',
              background: `url(${shop2}) no-repeat center center`,
              borderRadius: '12px'
            }}></div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          <div style={{
            background: '#1e3a8a',
            color: 'white',
            padding: '32px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>70+</h4>
            <p style={{ color: '#67e8f9' }}>Years of Excellence</p>
          </div>
          <div style={{
            background: '#1e3a8a',
            color: 'white',
            padding: '32px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>10K+</h4>
            <p style={{ color: '#67e8f9' }}>Happy Customers</p>
          </div>
          <div style={{
            background: '#1e3a8a',
            color: 'white',
            padding: '32px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>500+</h4>
            <p style={{ color: '#67e8f9' }}>Unique Pieces</p>
          </div>
        </div>
      </div>
    </div>
  );
  export default AboutSection;