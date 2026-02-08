import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Mail, Phone, MapPin, Search, X, TrendingUp } from 'lucide-react';
import logo  from '../images/logo.png';
import main  from '../images/main_image.jpg'; // make this image shown when scrolling down as a

const Home = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const categories = [
    { id: 'bathroom', label: 'Bathroom', keywords: ['bath', 'shower', 'sink', 'vanity', 'mirror'] },
    { id: 'bedroom', label: 'Bedroom', keywords: ['bed', 'mattress', 'nightstand', 'dresser', 'wardrobe'] },
    { id: 'kids', label: 'Kids', keywords: ['children', 'kid', 'bunk bed', 'toy storage', 'desk'] },
    { id: 'accent', label: 'Accent', keywords: ['chair', 'ottoman', 'bench', 'stool'] },
    { id: 'entry', label: 'Entry', keywords: ['hallway', 'console', 'coat rack', 'shoe storage'] },
    { id: 'livingroom', label: 'Living Room', keywords: ['sofa', 'couch', 'coffee table', 'tv stand', 'sectional'] },
    { id: 'dining', label: 'Dining', keywords: ['table', 'chair', 'buffet', 'china cabinet'] },
    { id: 'kitchen', label: 'Kitchen', keywords: ['island', 'cart', 'pantry', 'bar stool'] },
    { id: 'outdoor', label: 'Outdoor', keywords: ['patio', 'garden', 'deck', 'outdoor furniture'] },
    { id: 'office', label: 'Office', keywords: ['desk', 'chair', 'bookshelf', 'filing cabinet'] },
    { id: 'storage', label: 'Storage', keywords: ['cabinet', 'shelf', 'organizer', 'closet'] },
    { id: 'homedecoration', label: 'Home Decoration', keywords: ['decor', 'art', 'mirror', 'vase', 'rug'] }
  ];

  const popularSearches = [
    'Sofa', 'Bed', 'Dining Table', 'Office Chair', 'Coffee Table', 'Dresser'
  ];

  // Filter categories based on search
  const filteredCategories = categories.filter(cat => 
    cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate();
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    onNavigate();
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section with Search */}
      <div style={{
        position: 'relative',
        height: '700px',
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
            filter: 'blur(80px)',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            width: '384px',
            height: '384px',
            background: '#22d3ee',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>
        </div>
        
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 20px',
          maxWidth: '900px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>Elevate Your Space</h1>
          <p style={{
            fontSize: '24px',
            color: '#bfdbfe',
            marginBottom: '48px'
          }}>Premium Furniture for Every Room</p>

          {/* Search Bar */}
          <div ref={searchRef} style={{ position: 'relative', marginBottom: '32px' }}>
            <form onSubmit={handleSearchSubmit}>
              <div style={{
                position: 'relative',
                maxWidth: '700px',
                margin: '0 auto',
                transform: searchFocused ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'white',
                  borderRadius: '50px',
                  padding: '8px 8px 8px 24px',
                  boxShadow: searchFocused 
                    ? '0 20px 60px rgba(0,0,0,0.3), 0 0 0 3px rgba(103, 232, 249, 0.4)' 
                    : '0 10px 40px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}>
                  <Search 
                    size={24} 
                    color="#64748b" 
                    style={{ 
                      marginRight: '12px',
                      transition: 'color 0.3s'
                    }} 
                  />
                  <input
                    type="text"
                    placeholder="Search for furniture, rooms, or styles..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => {
                      setSearchFocused(true);
                      if (searchQuery.length > 0) setShowSuggestions(true);
                    }}
                    onBlur={() => setSearchFocused(false)}
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      fontSize: '18px',
                      color: '#1e293b',
                      background: 'transparent',
                      padding: '12px 0'
                    }}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        setShowSuggestions(false);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#f1f5f9'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'none'}
                    >
                      <X size={20} color="#64748b" />
                    </button>
                  )}
                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '14px 32px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginLeft: '8px',
                      transition: 'all 0.3s',
                      boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 6px 16px rgba(6, 182, 212, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 4px 12px rgba(6, 182, 212, 0.3)';
                    }}
                  >
                    Search
                  </button>
                </div>

                {/* Search Suggestions Dropdown */}
                {showSuggestions && (
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 12px)',
                    left: 0,
                    right: 0,
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    animation: 'slideDown 0.3s ease-out',
                    zIndex: 100
                  }}>
                    {searchQuery.length === 0 ? (
                      // Popular Searches
                      <div style={{ padding: '20px' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '16px',
                          color: '#64748b',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          <TrendingUp size={16} />
                          <span>Popular Searches</span>
                        </div>
                        {popularSearches.map((search, index) => (
                          <div
                            key={index}
                            onMouseDown={() => handleSuggestionClick(search)}
                            style={{
                              padding: '12px 16px',
                              cursor: 'pointer',
                              borderRadius: '8px',
                              transition: 'background 0.2s',
                              fontSize: '16px',
                              color: '#1e293b'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#f1f5f9'}
                            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                          >
                            {search}
                          </div>
                        ))}
                      </div>
                    ) : filteredCategories.length > 0 ? (
                      // Filtered Results
                      <div style={{ padding: '12px' }}>
                        <div style={{
                          padding: '8px 16px',
                          color: '#64748b',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          Suggestions
                        </div>
                        {filteredCategories.map((cat) => (
                          <div
                            key={cat.id}
                            onMouseDown={() => handleSuggestionClick(cat.label)}
                            style={{
                              padding: '12px 16px',
                              cursor: 'pointer',
                              borderRadius: '8px',
                              transition: 'all 0.2s',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.background = '#f1f5f9';
                              e.currentTarget.style.transform = 'translateX(4px)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            <Search size={16} color="#94a3b8" />
                            <div>
                              <div style={{ fontSize: '16px', color: '#1e293b', fontWeight: '500' }}>
                                {cat.label}
                              </div>
                              <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                                {cat.keywords.slice(0, 3).join(', ')}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // No Results
                      <div style={{
                        padding: '40px 20px',
                        textAlign: 'center',
                        color: '#94a3b8'
                      }}>
                        <p style={{ fontSize: '16px', marginBottom: '8px' }}>No results found</p>
                        <p style={{ fontSize: '14px' }}>Try searching for a different category</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>

          <button 
            onClick={onNavigate}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transform: 'scale(1)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.25)';
              e.target.style.transform = 'scale(1.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'scale(1)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            Browse All Categories
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
              onClick={onNavigate}
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

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
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

        /* Custom scrollbar for suggestions */
        div::-webkit-scrollbar {
          width: 8px;
        }

        div::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 8px;
        }

        div::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 8px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default Home;