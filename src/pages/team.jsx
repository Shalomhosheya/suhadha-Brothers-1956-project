import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';
import owner from '../images/team/owner1.jpeg';
import technicaladvisor from '../images/team/photo4.jpeg';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Praveen Bawantha',
      role: 'Founder & CEO',
      image:owner ,
      bio: 'With over 70 years in furniture design, praveen founded the company with a vision to make quality furniture accessible to everyone.',
      email: 'sarah.j@furnitureshowroom.com',
      phone: '+1 (555) 123-4567',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      },
      expertise: ['Business Strategy', 'Product Design', 'Customer Relations']
    },
    {
      id: 2,
      name: 'Shalom Hosheya',
      role: 'Technical Advisor',
      image: technicaladvisor,
      bio: '',
      email: 'michael.c@furnitureshowroom.com',
      phone: '+1 (555) 234-5678',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      },
      expertise: ['Interior Design', 'Sustainability', 'Modern Aesthetics']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Emily ensures smooth operations and timely delivery of all our products to customers worldwide.',
      email: 'emily.r@furnitureshowroom.com',
      phone: '+1 (555) 345-6789',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      },
      expertise: ['Logistics', 'Supply Chain', 'Quality Control']
    },
    {
      id: 4,
      name: 'David Williams',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: 'David leads our sales team with a customer-first approach, ensuring every client finds their perfect furniture.',
      email: 'david.w@furnitureshowroom.com',
      phone: '+1 (555) 456-7890',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      },
      expertise: ['Sales Strategy', 'Client Relations', 'Market Analysis']
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      bio: 'Lisa crafts compelling stories around our products and connects with customers through innovative campaigns.',
      email: 'lisa.t@furnitureshowroom.com',
      phone: '+1 (555) 567-8901',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      },
      expertise: ['Digital Marketing', 'Brand Strategy', 'Content Creation']
    },
    {
      id: 6,
      name: 'James Anderson',
      role: 'Customer Success Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'James and his team ensure every customer has an exceptional experience from browsing to delivery.',
      email: 'james.a@furnitureshowroom.com',
      phone: '+1 (555) 678-9012',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      },
      expertise: ['Customer Service', 'Problem Solving', 'Team Leadership']
    }
  ];

  const departments = [
    {
      name: 'Design & Innovation',
      icon: '🎨',
      count: 12,
      description: 'Creating beautiful, functional furniture'
    },
    {
      name: 'Sales & Service',
      icon: '🤝',
      count: 25,
      description: 'Helping customers find perfect pieces'
    },
    {
      name: 'Operations',
      icon: '⚙️',
      count: 18,
      description: 'Ensuring smooth delivery & quality'
    },
    {
      name: 'Marketing',
      icon: '📱',
      count: 8,
      description: 'Connecting with our community'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 50%, #172554 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1
        }}>
          <div style={{
            position: 'absolute',
            top: '50px',
            left: '100px',
            width: '300px',
            height: '300px',
            background: '#38bdf8',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '50px',
            right: '100px',
            width: '400px',
            height: '400px',
            background: '#22d3ee',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}></div>
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px'
          }}>
            Meet Our Team
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#bfdbfe',
            lineHeight: '1.6'
          }}>
            Passionate professionals dedicated to bringing quality furniture and exceptional service to your home
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#172554',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Leadership Team
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginBottom: '80px'
          }}>
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: hoveredMember === member.id 
                    ? '0 25px 50px -12px rgba(0,0,0,0.25)' 
                    : '0 10px 15px -3px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s',
                  transform: hoveredMember === member.id ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                {/* Member Image */}
                <div style={{
                  height: '450px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#1e3a8a'
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s',
                      transform: hoveredMember === member.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  
                  {/* Overlay on hover */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(30, 58, 138, 0.9), transparent)',
                    padding: '40px 20px 20px',
                    transform: hoveredMember === member.id ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.3s'
                  }}>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                      <a
                        href={member.social.linkedin}
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#06b6d4'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                      >
                        <Linkedin size={20} color="white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#06b6d4'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                      >
                        <Twitter size={20} color="white" />
                      </a>
                      <a
                        href={member.social.instagram}
                        style={{
                          width: '40px',
                          height: '40px',
                          background: 'rgba(255,255,255,0.2)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = '#06b6d4'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                      >
                        <Instagram size={20} color="white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#172554',
                    marginBottom: '4px'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#06b6d4',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    {member.role}
                  </p>
                  
                  <p style={{
                    color: '#1e40af',
                    lineHeight: '1.6',
                    marginBottom: '16px',
                    fontSize: '14px'
                  }}>
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '16px'
                  }}>
                    {member.expertise.map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          background: '#dbeafe',
                          color: '#1e40af',
                          padding: '4px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div style={{
                    borderTop: '1px solid #e5e7eb',
                    paddingTop: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <a
                      href={`mailto:${member.email}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#1e40af',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#06b6d4'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#1e40af'}
                    >
                      <Mail size={16} />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: '#1e40af',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.color = '#06b6d4'}
                      onMouseOut={(e) => e.currentTarget.style.color = '#1e40af'}
                    >
                      <Phone size={16} />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Departments Section */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '48px 24px',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#172554',
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              Our Departments
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px'
            }}>
              {departments.map((dept, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: '32px',
                    background: '#f8fafc',
                    borderRadius: '12px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#dbeafe';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    fontSize: '48px',
                    marginBottom: '16px'
                  }}>
                    {dept.icon}
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#172554',
                    marginBottom: '8px'
                  }}>
                    {dept.name}
                  </h3>
                  <p style={{
                    color: '#06b6d4',
                    fontWeight: '600',
                    fontSize: '24px',
                    marginBottom: '8px'
                  }}>
                    {dept.count} Members
                  </p>
                  <p style={{
                    color: '#1e40af',
                    fontSize: '14px'
                  }}>
                    {dept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Join Team CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
            borderRadius: '16px',
            padding: '64px 32px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              Join Our Team
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#bfdbfe',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              We're always looking for talented individuals who share our passion for quality furniture and exceptional customer service.
            </p>
            <button
              style={{
                background: '#06b6d4',
                color: 'white',
                padding: '16px 48px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
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
              View Open Positions
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;
