import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, delSpeed, typeSpeed }) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentText = texts[textIndex];

    const typingEffect = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
        setTypingSpeed(typeSpeed ? typeSpeed : 150); // Typing speed
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(delSpeed ? delSpeed : 100); // Deleting speed
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Delay before starting to delete
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, texts, textIndex, typingSpeed]);

  return <h2>{displayText}</h2>;
};

export default TypingEffect;
