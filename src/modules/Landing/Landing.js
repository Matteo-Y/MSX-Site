import React, { useEffect, useRef, useState } from 'react';
import TypingEffect from '../Tools/TypingEffect';
import './styles/Landing.scss';

const LandingPage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      sectionsRef.current.forEach((section, index) => {
        const sectionStart = window.innerHeight * index;
        const sectionEnd = sectionStart + window.innerHeight;

        if (scrollTop >= sectionStart - window.innerHeight / 2 && scrollTop < sectionEnd - window.innerHeight / 2) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      window.scrollTo({
        top: window.innerHeight * index
      });
    }
  };

  return (
    <div className="landing-page">
      <header className="sticky-header">
        <h1 onClick={() => scrollToSection(0)}>SUBOTIX</h1>
      </header>
      <section className="content">
        <div className="fade-section custom-section-1 visible" ref={(el) => (sectionsRef.current[0] = el)}>
          
        </div>
        <div className="fade-section custom-section-2" ref={(el) => (sectionsRef.current[1] = el)}>
          <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', boxShadow: 'inset 0 -80px 90px black', zIndex: '2'}}/>
          <video className="background-video" src={require("./res/videos/Sawy-commercial-edit-1.mp4")} type="video/mp4" autoPlay loop muted />
          <h2>SCALABLE SOLUTIONS</h2>
          <div className="text-box">
            <p>Implementing and spreading STEAM experiences designed to inspire.</p>
            <button onClick={() => scrollToSection(4)}> Learn more </button>
          </div>
        </div>
        <div className="fade-section custom-section-3" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2 style={{fontSize: "5rem"}}>S3</h2>
          <h3 className="fixed-caption bottom-left">Sawy the camel</h3>
        </div>
        <div className="fade-section custom-section-4" ref={(el) => (sectionsRef.current[3] = el)}>
          <h2>NEXT LEVEL PROJECTS</h2>
          <button className="solid-button" onClick={() => {}}> See more </button>
          <h3 className="fixed-caption bottom-right">3D printed longhorn bull<br/> with the colors of the American flag</h3>
        </div>
        <div className="fade-section custom-section-5" ref={(el) => (sectionsRef.current[4] = el)}>
          <h2>SAWY-SAWY</h2>
          <div className="text-box">
            <p>Providing a high impact, scalable solution to STEAM education.</p>
            <button onClick={() => {}}> Kits </button>
            <button onClick={() => {}}> Programs </button>
          </div>
        </div>
        <div className="fade-section custom-section-6" ref={(el) => (sectionsRef.current[5] = el)}>
          <h2>MSX</h2>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
