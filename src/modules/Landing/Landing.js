import React, { useEffect, useRef, useState } from 'react';
import TypingEffect from '../Tools/TypingEffect';
import './styles/Landing.scss';

const landingTitles = [
  "",
  "PROVIDING",
  "IMPACTING",
  "SCALING",
  "EXPERIENCES",
  "EVERYONE"
]
const titleSectionMap = [0, 3, 1, 2]
const landingCaptions= [
  "Providing impactful, STEM experiences for everyone",
  "By designing and sharing, meaningful experiences",
  "And insighting change in people's lives",
  "With skills, tools, and knowledge made to be shared",
  "Created to teach practical skills, as well as inspire",
  "Bringing people together and creating a thriving community"
]
const landingImageIndexes = [10,11,12,20,21,22,30,31,32,40,41,42,50,51,52,60,61,62]

const LandingPage = () => {
  const sectionsRef = useRef([]);
  const [headerAnim, setHeaderAnim] = useState(false);
  const [landingCaptionIndex, setLandingCaptionIndex] = useState(0);
  const [landingImageIndex, setLandingImageIndex] = useState(10);
  const [landingTitleIndex, setLandingTitleIndex] = useState(0);

  //Section Fade-in handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      sectionsRef.current.forEach((section, index) => {
        const sectionStart = window.innerHeight * index;
        const sectionEnd = sectionStart + window.innerHeight;

        if (scrollTop >= sectionStart - window.innerHeight / 2 && scrollTop < sectionEnd - window.innerHeight / 2) {
          setHeaderAnim(true);
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Landing-loop
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const timers = useRef([]);
  const intervalRef = useRef(null); // Ref to store the loop interval
  const phases = [
    { captionIndex: 1, titleIndex: 1, imageBaseIndex: 20, startDelay: 7700 },
    { captionIndex: 2, titleIndex: 2, imageBaseIndex: 30, startDelay: 15700 },
    { captionIndex: 3, titleIndex: 3, imageBaseIndex: 40, startDelay: 23700 },
    { captionIndex: 4, titleIndex: 4, imageBaseIndex: 50, startDelay: 31700 },
    { captionIndex: 5, titleIndex: 5, imageBaseIndex: 60, startDelay: 39700 },
  ];
  const loopIntervalDelay = phases[phases.length - 1].startDelay + 300;

  const applyPhase = (phase, manual = false) => {
    const { captionIndex, titleIndex, imageBaseIndex, startDelay } = phase;
    const imageDelayOffset = 3000;
  
    // Immediate application if manual is true, else apply delay
    const baseDelay = manual ? 0 : startDelay;
  
    timers.current.push(
      setTimeout(() => setLandingCaptionIndex(captionIndex), baseDelay),
      setTimeout(() => setLandingTitleIndex(titleIndex), baseDelay + 300),
      setTimeout(() => setLandingImageIndex(imageBaseIndex), baseDelay + 600),
      setTimeout(() => setLandingImageIndex(imageBaseIndex + 1), baseDelay + imageDelayOffset),
      setTimeout(() => setLandingImageIndex(imageBaseIndex + 2), baseDelay + imageDelayOffset * 2)
    );
  };
  

  const startLoop = () => {
    for (let i = currentPhaseIndex; i < phases.length; i++) {
      applyPhase(phases[i]);
    }
    setCurrentPhaseIndex(0); // Reset after completing the loop
  };
  

  const startIntervalLoop = () => {
    intervalRef.current = setInterval(startLoop, loopIntervalDelay);
  };

  useEffect(() => {
    setTimeout(() => setHeaderAnim(true), 7600);
    setTimeout(() => setLandingImageIndex(11), 4000);
    setTimeout(() => setLandingImageIndex(12), 6000);

    startLoop();
    startIntervalLoop(); // Start the repeating loop

    return () => {
      timers.current.forEach(clearTimeout);
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleManualPhaseChange = (index) => {
    // Clear active timers and interval
    timers.current.forEach(clearTimeout);
    clearInterval(intervalRef.current);
  
    // Update current phase index and apply selected phase
    setCurrentPhaseIndex(index);
    applyPhase(phases[index], true);
  
    // Restart loop starting from the next phase
    intervalRef.current = setInterval(() => startLoop(), loopIntervalDelay);
  };
  

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
        <div className={"fade-section custom-section-1 visible bg" + landingImageIndex} ref={(el) => (sectionsRef.current[0] = el)}>
        <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', boxShadow: 'inset 0 -80px 90px black', zIndex: '2'}}/>
          {landingImageIndexes.map((index) => (
            <div key={index} className={"background-image bg" + index} />
          ))}
          <button key={landingTitleIndex} className="underline-anim pop-up-anim">{landingTitles[landingTitleIndex]}</button>
          <div className="landing-captions"><TypingEffect words={landingCaptions} index={landingCaptionIndex} typeSpeed={30} delSpeed={20}/></div>
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
          <h2>MAKING NEXT LEVEL PROJECTS</h2>
          <a className="solid-button" href="#/projects"> See more </a>
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
