import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { Star, Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw, X } from 'lucide-react';

const ListSection = () => {
  const furnitureData = {
    bathroom: [
      { id: 1, name: 'Modern Vanity Set', price: 89900, image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop', description: 'Contemporary bathroom vanity with storage', rating: 4.5, reviews: 128, inStock: true, specs: { material: 'Solid Oak Wood', dimensions: '48" W x 22" D x 34" H', color: 'Natural Oak', weight: '85 lbs' } },
      { id: 2, name: 'Luxury Mirror Cabinet', price: 44900, image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop', description: 'Wall-mounted mirror with hidden storage', rating: 4.8, reviews: 94, inStock: true, specs: { material: 'Stainless Steel Frame', dimensions: '36" W x 5" D x 30" H', color: 'Chrome Finish', weight: '45 lbs' } }
    ],
    bedroom: [
      { id: 3, name: 'King Platform Bed', price: 129900, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop', description: 'Modern platform bed with headboard', rating: 4.7, reviews: 203, inStock: true, specs: { material: 'Upholstered Fabric', dimensions: '80" W x 86" D x 48" H', color: 'Charcoal Gray', weight: '150 lbs' } },
      { id: 4, name: 'Nightstand Pair', price: 399000, image: 'https://images.unsplash.com/photo-1558211583-803e29408f0a?w=400&h=300&fit=crop', description: 'Matching bedside tables with drawers', rating: 4.6, reviews: 156, inStock: true, specs: { material: 'Walnut Wood', dimensions: '24" W x 18" D x 26" H', color: 'Dark Walnut', weight: '35 lbs each' } }
    ],
    kids: [
      { id: 5, name: 'Bunk Bed Set', price: 79900, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', description: 'Space-saving bunk bed for kids', rating: 4.4, reviews: 87, inStock: true, specs: { material: 'Pine Wood', dimensions: '78" W x 42" D x 65" H', color: 'White', weight: '120 lbs' } },
      { id: 6, name: 'Study Desk', price: 299000, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop', description: 'Colorful desk with storage', rating: 4.5, reviews: 112, inStock: true, specs: { material: 'MDF with Laminate', dimensions: '48" W x 24" D x 30" H', color: 'Multi-Color', weight: '55 lbs' } }
    ],
    accent: [
      { id: 7, name: 'Accent Chair', price: 549000, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop', description: 'Velvet upholstered accent chair', rating: 4.9, reviews: 178, inStock: true, specs: { material: 'Velvet Fabric', dimensions: '30" W x 32" D x 35" H', color: 'Emerald Green', weight: '42 lbs' } },
      { id: 8, name: 'Ottoman Set', price: 279000, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', description: 'Modern storage ottoman', rating: 4.3, reviews: 91, inStock: false, specs: { material: 'Linen Blend', dimensions: '24" W x 24" D x 18" H', color: 'Beige', weight: '28 lbs' } }
    ],
    entry: [
      { id: 9, name: 'Console Table', price: 449000, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop', description: 'Slim entryway console', rating: 4.6, reviews: 134, inStock: true, specs: { material: 'Metal & Glass', dimensions: '48" W x 12" D x 32" H', color: 'Gold & Clear', weight: '38 lbs' } },
      { id: 10, name: 'Coat Rack', price: 149000, image: 'https://images.unsplash.com/photo-1571898223382-5a8e08e08ce9?w=400&h=300&fit=crop', description: 'Modern coat stand with shelf', rating: 4.2, reviews: 76, inStock: true, specs: { material: 'Bamboo Wood', dimensions: '18" W x 18" D x 72" H', color: 'Natural', weight: '22 lbs' } }
    ],
    livingroom: [
      { id: 11, name: 'Sectional Sofa', price: 219900, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', description: 'L-shaped sectional with chaise', rating: 4.8, reviews: 245, inStock: true, specs: { material: 'Premium Leather', dimensions: '120" W x 85" D x 36" H', color: 'Cognac Brown', weight: '280 lbs' } },
      { id: 12, name: 'Coffee Table', price: 59900, image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=300&fit=crop', description: 'Modern glass coffee table', rating: 4.5, reviews: 167, inStock: true, specs: { material: 'Tempered Glass & Oak', dimensions: '48" W x 28" D x 18" H', color: 'Clear & Natural', weight: '65 lbs' } }
    ],
    dining: [
      { id: 13, name: 'Dining Set', price: 159900, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop', description: '6-seater dining table set', rating: 4.7, reviews: 189, inStock: true, specs: { material: 'Solid Mahogany', dimensions: '72" W x 40" D x 30" H', color: 'Espresso', weight: '185 lbs' } },
      { id: 14, name: 'Bar Cabinet', price: 89900, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop', description: 'Contemporary bar storage', rating: 4.4, reviews: 98, inStock: true, specs: { material: 'Walnut Veneer', dimensions: '36" W x 18" D x 42" H', color: 'Dark Walnut', weight: '92 lbs' } }
    ],
    kitchen: [
      { id: 15, name: 'Kitchen Island', price: 129900, image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=400&h=300&fit=crop', description: 'Mobile kitchen island with storage', rating: 4.6, reviews: 143, inStock: true, specs: { material: 'Butcher Block Top', dimensions: '48" W x 24" D x 36" H', color: 'White & Natural', weight: '110 lbs' } },
      { id: 16, name: 'Bar Stools', price: 34900, image: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=400&h=300&fit=crop', description: 'Set of 2 adjustable bar stools', rating: 4.3, reviews: 121, inStock: true, specs: { material: 'Metal & Faux Leather', dimensions: '16" W x 16" D x 42" H', color: 'Black', weight: '18 lbs each' } }
    ],
    outdoor: [
      { id: 17, name: 'Patio Set', price: 18990, image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400&h=300&fit=crop', description: 'Weather-resistant outdoor set', rating: 4.7, reviews: 156, inStock: true, specs: { material: 'Aluminum & Wicker', dimensions: 'Varies', color: 'Gray', weight: '165 lbs' } },
      { id: 18, name: 'Lounge Chair', price: 549000, image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop', description: 'Reclining outdoor lounge chair', rating: 4.5, reviews: 134, inStock: true, specs: { material: 'Teak Wood', dimensions: '28" W x 72" D x 14" H', color: 'Natural Teak', weight: '48 lbs' } }
    ],
    office: [
      { id: 19, name: 'Executive Desk', price: 119900, image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=300&fit=crop', description: 'Large office desk with drawers', rating: 4.8, reviews: 198, inStock: true, specs: { material: 'Cherry Wood', dimensions: '66" W x 30" D x 30" H', color: 'Rich Cherry', weight: '145 lbs' } },
      { id: 20, name: 'Ergonomic Chair', price: 699000, image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=300&fit=crop', description: 'Adjustable office chair', rating: 4.9, reviews: 267, inStock: true, specs: { material: 'Mesh & Aluminum', dimensions: '26" W x 26" D x 48" H', color: 'Black', weight: '52 lbs' } }
    ],
    storage: [
      { id: 21, name: 'Bookshelf', price: 49900, image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=300&fit=crop', description: '5-tier modern bookshelf', rating: 4.4, reviews: 145, inStock: true, specs: { material: 'Oak Wood', dimensions: '36" W x 14" D x 72" H', color: 'Natural Oak', weight: '68 lbs' } },
      { id: 22, name: 'Storage Cabinet', price: 64999, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop', description: 'Multi-purpose storage cabinet', rating: 4.6, reviews: 132, inStock: true, specs: { material: 'MDF with Veneer', dimensions: '36" W x 18" D x 42" H', color: 'White', weight: '75 lbs' } }
    ],
    homedecoration: [
      { id: 23, name: 'Wall Art Set', price: 19999, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=300&fit=crop', description: 'Abstract canvas art set of 3', rating: 4.7, reviews: 234, inStock: true, specs: { material: 'Canvas', dimensions: '24" x 36" each', color: 'Multi-Color', weight: '8 lbs total' } },
      { id: 24, name: 'Decorative Vases', price: 89999, image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=300&fit=crop', description: 'Ceramic vase collection', rating: 4.2, reviews: 87, inStock: true, specs: { material: 'Ceramic', dimensions: 'Varies (8"-14")', color: 'Assorted', weight: '12 lbs' } }
    ]
  };

  const [activeCategory, setActiveCategory] = useState('bathroom');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    document.body.style.overflow = 'hidden';
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    setQuantity(1);
    document.body.style.overflow = 'auto';
  };

  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            size={16}
            fill={star <= rating ? '#fbbf24' : 'none'}
            stroke={star <= rating ? '#fbbf24' : '#d1d5db'}
          />
        ))}
      </div>
    );
  };

  // Product Detail Modal Component
  const ProductModal = () => {
    if (!selectedProduct) return null;

    return ReactDOM.createPortal(
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          padding: '20px',
          overflowY: 'auto'
        }}
        onClick={closeProductDetail}
      >
        <div
          style={{
            background: 'white',
            borderRadius: '24px',
            maxWidth: '1000px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            margin: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeProductDetail}
            style={{
              position: 'sticky',
              top: '20px',
              float: 'right',
              marginRight: '20px',
              marginTop: '20px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              zIndex: 10
            }}
          >
            <X size={24} color="#1e3a8a" />
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', gap: '40px', padding: '40px', paddingTop: '20px' }}>
            {/* Left Column - Image */}
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  marginBottom: '20px'
                }}
              />
              
              {/* Features */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '20px' }}>
                <div style={{ textAlign: 'center', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
                  <Truck size={24} color="#1e3a8a" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#1e3a8a' }}>Free Shipping</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
                  <Shield size={24} color="#1e3a8a" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#1e3a8a' }}>2 Year Warranty</div>
                </div>
                <div style={{ textAlign: 'center', padding: '16px', background: '#f8fafc', borderRadius: '12px' }}>
                  <RotateCcw size={24} color="#1e3a8a" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#1e3a8a' }}>30 Day Returns</div>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '12px' }}>
                {selectedProduct.name}
              </h2>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                {renderStars(selectedProduct.rating)}
                <span style={{ fontSize: '16px', color: '#64748b' }}>
                  {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                </span>
              </div>

              <div style={{ fontSize: '42px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>
                Rs {selectedProduct.price}
              </div>

              <div style={{
                padding: '12px 20px',
                background: selectedProduct.inStock ? '#dcfce7' : '#fee2e2',
                color: selectedProduct.inStock ? '#166534' : '#991b1b',
                borderRadius: '8px',
                display: 'inline-block',
                marginBottom: '24px',
                fontWeight: '600'
              }}>
                {selectedProduct.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </div>

              <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
                {selectedProduct.description}
              </p>

              {/* Specifications */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>
                  Specifications
                </h3>
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px' }}>
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e2e8f0' }}>
                      <span style={{ fontWeight: '600', color: '#64748b', textTransform: 'capitalize' }}>{key}:</span>
                      <span style={{ color: '#1e3a8a' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontWeight: '600', color: '#1e3a8a', marginBottom: '12px' }}>
                  Quantity:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #1e3a8a',
                      borderRadius: '8px',
                      background: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Minus size={20} color="#1e3a8a" />
                  </button>
                  <span style={{ fontSize: '20px', fontWeight: '600', minWidth: '40px', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #1e3a8a',
                      borderRadius: '8px',
                      background: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Plus size={20} color="#1e3a8a" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              <button
                  disabled={!selectedProduct.inStock}
                  style={{
                    flex: 1,
                    padding: '16px',
                    background: selectedProduct.inStock ? '#25D366' : '#94a3b8', // Official Green
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: selectedProduct.inStock ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {/* Green WhatsApp SVG Icon */}
                  <svg 
                    viewBox="0 0 448 512" 
                    height="24px" 
                    width="24px" 
                    fill="white" // This makes the inner phone icon white
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.6 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                  </svg>
                  WhatsApp
                </button>


                <button
                  style={{
                    padding: '16px',
                    background: 'white',
                    border: '2px solid #1e3a8a',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Heart size={20} color="#1e3a8a" />
                </button>
                <button
                  style={{
                    padding: '16px',
                    background: 'white',
                    border: '2px solid #1e3a8a',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Share2 size={20} color="#1e3a8a" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: '#1e3a8a', marginBottom: '48px' }}>
          Our Collection
        </h1>

        {/* Category Navigation */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '48px' }}>
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

        {/* Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
          {furnitureData[activeCategory]?.map(item => (
            <div
              key={item.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                transform: 'translateY(0)'
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
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '8px' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#64748b', marginBottom: '12px', fontSize: '14px' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  {renderStars(item.rating)}
                  <span style={{ fontSize: '14px', color: '#64748b' }}>
                    ({item.reviews})
                  </span>
                </div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '16px' }}>
                  Rs {item.price}
                </div>
                <button
                  onClick={() => openProductDetail(item)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: '#1e3a8a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#1e40af'}
                  onMouseOut={(e) => e.target.style.background = '#1e3a8a'}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal rendered using Portal */}
        <ProductModal />
      </div>
    </div>
  );
};

export default ListSection;