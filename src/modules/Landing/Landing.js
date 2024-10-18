import React, { useEffect, useRef, useState } from 'react';
import TypingEffect from '../Tools/TypingEffect';
import './styles/Landing.scss';

const landingTitles = [
  "",
  "IMPACT",
  "SCALABLE",
  "COMMUNITY"
]
const landingCaptions= [
  "We design impactful, scalable STEAM solutions for your community",
  "Projects designed to inspire and build skills",
  "Aimed to reach all people of all ages and backgrounds",
  "Bringing together and connecting Makers"
]

const LandingPage = () => {
  const sectionsRef = useRef([]);
  const [headerAnim, setHeaderAnim] = useState(false);
  const [landingCaptionIndex, setLandingCaptionIndex] = useState(0);
  const [landingIndex, setLandingIndex] = useState(0);

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
    const timers = [];
    timers[0] = setTimeout(() => {
      setHeaderAnim(true);
    }, 4000);

    const loop = () => {
      timers[1] = setTimeout(() => {
        setLandingCaptionIndex(1);
      }, 4300);
      timers[2] = setTimeout(() => {
        setLandingIndex(1);
      }, 5000);
      timers[3] = setTimeout(() => {
        setLandingCaptionIndex(2);
      }, 11000);
      timers[4] = setTimeout(() => {
        setLandingIndex(2);
      }, 12000);
      timers[5] = setTimeout(() => {
        setLandingCaptionIndex(3);
      }, 17000);
      timers[6] = setTimeout(() => {
        setLandingIndex(3);
      }, 18000);
    }

    loop();
    const loopInterval = setInterval(() => {
      loop();
    }, 22000);

    
    
    return () => {
      for(let i = 0; i < timers.length; i++) {
        clearTimeout(timers[i]);
      }
      clearInterval(loopInterval);
    }
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
        <h1 className={headerAnim ? "animated" : ""} onClick={() => scrollToSection(0)}>SUBOTIX</h1>
      </header>
      <section className="content">
        <div className={"fade-section custom-section-1 visible bg" + landingIndex} ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="background-image bg0"></div>
          <div className="background-image bg1"></div>
          <div className="background-image bg2"></div>
          <div className="background-image bg3"></div>
          <h2>{landingTitles[landingIndex]}</h2>
          <div className="landing-captions"><TypingEffect words={landingCaptions} index={landingCaptionIndex} typeSpeed={50} delSpeed={20}/></div>
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
