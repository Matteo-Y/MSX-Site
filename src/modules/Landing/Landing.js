import React, { useEffect, useRef, useState } from 'react';
import './styles/Landing.scss';

const keyWords = ["IMPACTFUL", "EXCITING", "STEAM", "SCALABLE", "SUSTAINABLE"];

const LandingPage = () => {
  const s1BackgroundCount = 3;
  const sectionsRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [s1BG, setS1BG] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % keyWords.length);
        setFade(true);
      }, 400); 
    }, 2000); 

    return () => clearInterval(interval);
  }, [keyWords.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setS1BG((prevS1BG) => {
        const newS1BG = prevS1BG + 1;
        return newS1BG === (s1BackgroundCount + 1) ? 1 : newS1BG;
      });
    }, 6000); 

    return () => clearInterval(interval);
  }, [s1BackgroundCount]);

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
        <div className={`fade-section custom-section-1 ${"section-1-bg" + s1BG} visible`} ref={(el) => (sectionsRef.current[0] = el)}>
          <h2 className={fade ? "fade-in" : "fade-out"}>{keyWords[currentIndex]}</h2>
          <div className="arrow-indicator">▼</div>
        </div>
        <div className="fade-section custom-section-2" ref={(el) => (sectionsRef.current[1] = el)}>
          <video className="background-video" src={require("./res/videos/Sawy-commercial-edit-1.mp4")} type="video/mp4" autoPlay loop muted />
          <h2>SCALABLE SOLUTIONS</h2>
          <div className="text-box">
            <p>Implementing and spreading STEAM experiences designed to inspire.</p>
            <button onClick={() => scrollToSection(4)}> Learn more </button>
          </div>
        </div>
        <div className="fade-section custom-section-3" ref={(el) => (sectionsRef.current[2] = el)}>
          <video className="background-video" src={require("./res/videos/Crowd.mp4")} type="video/mp4" autoPlay loop muted />
          <h2>INSPIRING COMMUNITIES</h2>
        </div>
        <div className="fade-section custom-section-4" ref={(el) => (sectionsRef.current[3] = el)}>
          <h2>NEXT LEVEL PROJECTS</h2>
        </div>
        <div className="fade-section custom-section-5" ref={(el) => (sectionsRef.current[4] = el)}>
          <h2>SAWY-SAWY</h2>
          <div className="text-box">
            <p>The Sawy-Sawy is a high impact, scalable solution to STEAM education.</p>
            <button> Learn more </button>
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
