import React, { useEffect, useState } from 'react';

const TypingEffect = ({ words, index }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0); // Track the current character index

  useEffect(() => {
    const currentWord = words[index];

    const type = () => {
      if (charIndex < currentWord.length) {
        // Typing forward
        setDisplayedText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }
    };

    const timer = setTimeout(type, 100); // Typing speed

    return () => clearTimeout(timer); // Clean up the timer on every change
  }, [charIndex, words, index]);

  useEffect(() => {
    // Reset typing state when the index changes to a new word
    setDisplayedText(''); // Clear the displayed text immediately when changing words
    setCharIndex(0); // Reset the character index
  }, [index]);

  return <p>{displayedText}</p>;
};

export default TypingEffect;
