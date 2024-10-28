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
  const [step, setStep] = useState(0);
  const [headerAnim, setHeaderAnim] = useState(false);
  const [landingCaptionIndex, setLandingCaptionIndex] = useState(0);
  const [landingImageIndex, setLandingImageIndex] = useState(10);
  const [landingTitleIndex, setLandingTitleIndex] = useState(0);

  useEffect(() => {
    const stepIntervalMs = 500;
    const incrementStep = (currentStep) => currentStep < 1000000 ? currentStep + 1 : 0;
    const interval = setInterval(() => {setStep((step) => incrementStep(step))}, stepIntervalMs)
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const introLength = 12;
    if(step == 4)  setLandingImageIndex(11);
    if(step == 8)  setLandingImageIndex(12);
    if(step == 11) setLandingCaptionIndex(1);
    if(step > 10) setHeaderAnim(true);

    const totalStepCount = 60;
    const currentStep = (step - introLength) % totalStepCount;
    if(step > introLength) {
      if(currentStep == 0) setLandingCaptionIndex(1);
      if(currentStep == 1) setLandingTitleIndex(1);
      if(currentStep == 1) setLandingImageIndex(20);
      if(currentStep == 4) setLandingImageIndex(21);
      if(currentStep == 8) setLandingImageIndex(22);
      //
      if(currentStep == 10) setLandingCaptionIndex(2);
      if(currentStep == 12) setLandingTitleIndex(2);
      if(currentStep == 12) setLandingImageIndex(30);
      if(currentStep == 16) setLandingImageIndex(31);
      if(currentStep == 20) setLandingImageIndex(32);
      //
      if(currentStep == 22) setLandingCaptionIndex(3);
      if(currentStep == 24) setLandingTitleIndex(3);
      if(currentStep == 24) setLandingImageIndex(40);
      if(currentStep == 28) setLandingImageIndex(41);
      if(currentStep == 32) setLandingImageIndex(42);
      //
      if(currentStep == 34) setLandingCaptionIndex(4);
      if(currentStep == 36) setLandingTitleIndex(4);
      if(currentStep == 36) setLandingImageIndex(50);
      if(currentStep == 40) setLandingImageIndex(51);
      if(currentStep == 44) setLandingImageIndex(52);
      //
      if(currentStep == 46) setLandingCaptionIndex(5);
      if(currentStep == 48) setLandingTitleIndex(5);
      if(currentStep == 48) setLandingImageIndex(60);
      if(currentStep == 52) setLandingImageIndex(61);
      if(currentStep == 56) setLandingImageIndex(62);
    }
    
  }, [step]);

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
        <div className="fade-section custom-section-4" ref={(el) => (sectionsRef.current[1] = el)}>
          <h2>MAKING NEXT LEVEL PROJECTS</h2>
          <a className="solid-button" href="#/projects"> See more </a>
          <h3 className="fixed-caption bottom-right">3D printed longhorn bull<br/> with the colors of the American flag</h3>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
