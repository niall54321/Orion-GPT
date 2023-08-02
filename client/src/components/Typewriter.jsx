// import React, { useState, useEffect } from 'react';

// const TypeWriter = ({ string }) => {
//     const [displayedString, setDisplayedString] = useState("");
//     const [index, setIndex] = useState(0);
  
//     useEffect(() => {
//       setDisplayedString("");
//       setIndex(0);
//     }, [string]);
  
//     useEffect(() => {
//       if (index < string.length) {
//         setTimeout(() => {
//           setDisplayedString(string.slice(0, index + 1));
//           setIndex(index + 1);
//         }, 20);
//       }
//     }, [index, string]);
  
//     return <span>{displayedString}</span>;
//   }

//   export default TypeWriter;

import React, { useEffect, useState } from "react";

const Typewriter = ({ strings, speed = 50 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    const currentString = strings[currentIndex];

    if (currentText !== currentString) {
      const nextCharIndex = currentText.length;
      setCurrentText(currentString.substring(0, nextCharIndex + 1));
      timer = setTimeout(() => {
        setCurrentText(currentString.substring(0, nextCharIndex + 1));
      }, speed);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
      setCurrentText("");
    }

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, speed, strings]);

  return <>{currentText}</>;
};

export default Typewriter;








