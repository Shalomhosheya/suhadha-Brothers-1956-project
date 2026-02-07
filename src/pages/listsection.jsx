import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
const ListSection = () => {
  const furnitureData = {
    bathroom: [
      { id: 1, name: 'Modern Vanity Set', price: 899, image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop', description: 'Contemporary bathroom vanity with storage' },
      { id: 2, name: 'Luxury Mirror Cabinet', price: 449, image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop', description: 'Wall-mounted mirror with hidden storage' }
    ],
    bedroom: [
      { id: 3, name: 'King Platform Bed', price: 1299, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop', description: 'Modern platform bed with headboard' },
      { id: 4, name: 'Nightstand Pair', price: 399, image: 'https://images.unsplash.com/photo-1558211583-803e29408f0a?w=400&h=300&fit=crop', description: 'Matching bedside tables with drawers' }
    ],
    kids: [
      { id: 5, name: 'Bunk Bed Set', price: 799, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', description: 'Space-saving bunk bed for kids' },
      { id: 6, name: 'Study Desk', price: 299, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop', description: 'Colorful desk with storage' }
    ],
    accent: [
      { id: 7, name: 'Accent Chair', price: 549, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop', description: 'Velvet upholstered accent chair' },
      { id: 8, name: 'Ottoman Set', price: 279, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', description: 'Modern storage ottoman' }
    ],
    entry: [
      { id: 9, name: 'Console Table', price: 449, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop', description: 'Slim entryway console' },
      { id: 10, name: 'Coat Rack', price: 149, image: 'https://images.unsplash.com/photo-1571898223382-5a8e08e08ce9?w=400&h=300&fit=crop', description: 'Modern coat stand with shelf' }
    ],
    livingroom: [
      { id: 11, name: 'Sectional Sofa', price: 2199, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', description: 'L-shaped sectional with chaise' },
      { id: 12, name: 'Coffee Table', price: 599, image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=300&fit=crop', description: 'Modern glass coffee table' }
    ],
    dining: [
      { id: 13, name: 'Dining Set', price: 1599, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop', description: '6-seater dining table set' },
      { id: 14, name: 'Bar Cabinet', price: 899, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop', description: 'Contemporary bar storage' }
    ],
    kitchen: [
      { id: 15, name: 'Kitchen Island', price: 1299, image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=300&fit=crop', description: 'Mobile kitchen island with storage' },
      { id: 16, name: 'Bar Stools', price: 349, image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=400&h=300&fit=crop', description: 'Set of 2 adjustable bar stools' }
    ],
    outdoor: [
      { id: 17, name: 'Patio Set', price: 1899, image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400&h=300&fit=crop', description: 'Weather-resistant outdoor set' },
      { id: 18, name: 'Lounge Chair', price: 549, image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop', description: 'Reclining outdoor lounge chair' }
    ],
    office: [
      { id: 19, name: 'Executive Desk', price: 1199, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=300&fit=crop', description: 'Large office desk with drawers' },
      { id: 20, name: 'Ergonomic Chair', price: 699, image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop', description: 'Adjustable office chair' }
    ],
    storage: [
      { id: 21, name: 'Bookshelf', price: 499, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=300&fit=crop', description: '5-tier modern bookshelf' },
      { id: 22, name: 'Storage Cabinet', price: 649, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop', description: 'Multi-purpose storage cabinet' }
    ],
    homedecoration: [
      { id: 23, name: 'Wall Art Set', price: 199, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=300&fit=crop', description: 'Abstract canvas art set of 3' },
      { id: 24, name: 'Decorative Vases', price: 89, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit=crop', description: 'Ceramic vase collection' }
    ]
  };
  
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

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      padding: '48px 20px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#172554',
          marginBottom: '32px'
        }}>Our Collection</h2>
        
        {/* Category Navigation */}
        <div style={{
          marginBottom: '48px',
          background: 'white',
          borderRadius: '12px',
          padding: '16px',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: activeCategory === cat.id ? '#1e3a8a' : '#dbeafe',
                  color: activeCategory === cat.id ? 'white' : '#1e3a8a',
                  boxShadow: activeCategory === cat.id ? '0 10px 15px -3px rgba(0,0,0,0.1)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (activeCategory !== cat.id) {
                    e.target.style.background = '#bfdbfe';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCategory !== cat.id) {
                    e.target.style.background = '#dbeafe';
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {furnitureData[activeCategory]?.map(item => (
            <div 
              key={item.id} 
              style={{
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
                height: '256px',
                overflow: 'hidden',
                background: '#dbeafe'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#172554',
                  marginBottom: '8px'
                }}>{item.name}</h3>
                <p style={{
                  color: '#1e3a8a',
                  marginBottom: '16px'
                }}>{item.description}</p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#0891b2'
                  }}>${item.price}</span>
                  <button style={{
                    background: '#1e3a8a',
                    color: 'white',
                    padding: '8px 24px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#1e40af'}
                  onMouseOut={(e) => e.target.style.background = '#1e3a8a'}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ListSection;