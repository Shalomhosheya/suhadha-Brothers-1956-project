import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Mail } from 'lucide-react';
import shop from '../images/imageshop.jpeg';

const LocateMe = () => {
  const [selectedStore, setSelectedStore] = useState(0);

  const stores = [
    {
      id: 1,
      name: 'SUHADA BROTHERS (PVT) LTD',
      address: '67 B231, Angoda, Sri Lanka',
      phone: '+94 77 123 4567',
      email: 'info@suhadabrothers.lk',
      hours: {
        weekday: '9:00 AM - 6:00 PM',
        saturday: '9:00 AM - 5:00 PM',
        sunday: 'Closed'
      },
      image:shop
    }
  ];

  const handleGetDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      '_blank'
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '48px 20px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#172554',
              marginBottom: '16px'
            }}
          >
            Visit Our Showroom
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#1e40af'
            }}
          >
            Experience our premium furniture collection in person
          </p>
        </div>

        {/* Store Card */}
        {stores.map((store, index) => (
          <div
            key={store.id}
            style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              marginBottom: '48px'
            }}
          >
            {/* Image */}
            <div style={{ height: '250px', overflow: 'hidden' }}>
              <img
                src={store.image}
                alt={store.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: '24px' }}>
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#172554',
                  marginBottom: '20px'
                }}
              >
                {store.name}
              </h3>

              {/* Address */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <MapPin size={20} color="#1e40af" />
                <p style={{ color: '#1e40af' }}>{store.address}</p>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                <Phone size={20} color="#1e40af" />
                <a href={`tel:${store.phone}`} style={{ color: '#1e40af' }}>
                  {store.phone}
                </a>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <Mail size={20} color="#1e40af" />
                <a href={`mailto:${store.email}`} style={{ color: '#1e40af' }}>
                  {store.email}
                </a>
              </div>

              {/* Hours */}
              <div
                style={{
                  background: '#dbeafe',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <Clock size={18} color="#1e40af" />
                  <strong style={{ color: '#1e40af' }}>Store Hours</strong>
                </div>
                <p style={{ fontSize: '14px', color: '#1e40af' }}>
                  <strong>Mon - Fri:</strong> {store.hours.weekday}
                </p>
                <p style={{ fontSize: '14px', color: '#1e40af' }}>
                  <strong>Saturday:</strong> {store.hours.saturday}
                </p>
                <p style={{ fontSize: '14px', color: '#1e40af' }}>
                  <strong>Sunday:</strong> {store.hours.sunday}
                </p>
              </div>

              {/* Directions Button */}
              <button
                onClick={() => handleGetDirections(store.address)}
                style={{
                  width: '100%',
                  background: '#1e3a8a',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <Navigation size={18} style={{ marginRight: '8px' }} />
                Get Directions
              </button>
            </div>
          </div>
        ))}

        {/* Embedded Map */}
        <div
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
          }}
        >
          <iframe
            title="Store Location"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              stores[selectedStore].address
            )}&output=embed`}
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default LocateMe;
