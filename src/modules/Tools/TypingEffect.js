import React, { useEffect, useState } from 'react';

const TypingEffect = ({ words, index, typeSpeed = 100, delSpeed = 50, flicker=true}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0); // Track the current character index

  useEffect(() => {
    const currentWord = words[index] || ''; // Default to empty string if no word is available

    const deleteWord = () => {
      if (charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false); // Done deleting, move to typing
      }
    };

    const typeWord = () => {
      if (charIndex < currentWord.length) {
        setDisplayedText((prev) => prev + currentWord.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }
    };

    let timer;
    if (isDeleting) {
      timer = setTimeout(deleteWord, delSpeed); // Deleting speed
    } else if (charIndex < currentWord.length) {
      timer = setTimeout(typeWord, typeSpeed); // Typing speed
    }

    return () => clearTimeout(timer); // Clean up the timer on every change
  }, [charIndex, words, index, isDeleting]);

  // Reset deletion when index changes
  useEffect(() => {
    setIsDeleting(true); // Start by deleting the current text
  }, [index]);

  return <p style={{margin: "0"}} className="shadowed-text">{displayedText}{flicker ? (<span> l</span>) : ""}</p>;
};

export default TypingEffect;
