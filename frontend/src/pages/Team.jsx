import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Briefcase, Mail } from 'lucide-react';
import Reveal from '../motion/Reveal';
import './Team.css';

// Generic placeholder image
const PLACEHOLDER_AVATAR = "https://ui-avatars.com/api/?name=Developer&background=0D9488&color=fff&size=200";

// Developer Data
const dummyTeam = [
  {
    id: 1,
    name: "PRITISHA KUMARI",
    role: "Software Engineer",
    avatar: "/team/pritisha_kumari.jpg"
  },
  {
    id: 2,
    name: "SHAGUFTA PERWEEN",
    role: "Software Engineer",
    avatar: "/team/shagufta_perween.jpg"
  },
  {
    id: 3,
    name: "UTSARG KUMAR TIWARY",
    role: "Software Engineer",
    avatar: "/team/utsarg_kumar_tiwary.jpg"
  },
  {
    id: 4,
    name: "PRAVEEN KUMAR MISHRA",
    role: "Software Engineer",
    avatar: "/team/praveen_kumar_mishra.png"
  },
  {
    id: 5,
    name: "SUMIT PRASAD",
    role: "Software Engineer",
    avatar: "/team/sumit_prasad.png"
  },
  {
    id: 6,
    name: "ADITRAJ SHARMA",
    role: "Software Engineer",
    avatar: "/team/aditraj_sharma.png"
  },
  {
    id: 7,
    name: "NANDANI KUMARI",
    role: "Software Engineer",
    avatar: "/team/nandani_kumari.png"
  },
  {
    id: 8,
    name: "ANKUSH KUMAR SHARMA",
    role: "Software Engineer",
    avatar: "/team/ankush_kumar_sharma.png"
  },
  {
    id: 9,
    name: "NANDANI THAKUR",
    role: "Software Engineer",
    avatar: "/team/nandani_thakur.jpg"
  },
  {
    id: 10,
    name: "AFIFA OBAID",
    role: "Software Engineer",
    avatar: "/team/afifa_obaid.png"
  }
];

const Team = () => {
  return (
    <div className="team-page">
      <Helmet>
        <title>Meet Our Developers | Eazzio Technologies</title>
        <meta name="description" content="Meet the brilliant minds building Eazzio." />
      </Helmet>

      {/* Hero Section */}
      <section className="team-hero premium-hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-bg-glow hero-bg-glow-2"></div>
        <div className="hero-dot-pattern"></div>
        
        <div className="container relative z-10 text-center">
          <Reveal direction="up" delay={0.1} duration={0.8} viewport={{ once: true }}>
            <div className="hero-eyebrow mx-auto mb-4">
              <span className="eyebrow-dot"></span>
              The People Behind Eazzio
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.2} duration={0.8} viewport={{ once: true }}>
            <h1 className="hero-title premium-title text-white">Meet Our Developers</h1>
          </Reveal>
          
          <Reveal direction="up" delay={0.3} duration={0.8} viewport={{ once: true }}>
            <p className="hero-subtitle premium-subtitle text-white-muted mx-auto mb-12" style={{ maxWidth: '600px' }}>
              Our dedicated engineering team works tirelessly to build robust, scalable, and intuitive business solutions for the modern world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="section team-grid-section pt-0">
        <div className="container relative z-10">
          <div className="team-grid">
            {dummyTeam.map((member, index) => (
              <Reveal key={member.id} direction="up" distance={30} duration={0.8} delay={index * 0.08} viewport={{ once: true, margin: "-5%" }}>
                <div className="team-card premium-icon-wrapper">
                  <div className="team-avatar-wrapper">
                    <img src={member.avatar} alt={member.name} className="team-avatar" />
                  </div>
                  
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
