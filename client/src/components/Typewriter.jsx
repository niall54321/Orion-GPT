import React, { useState, useEffect } from 'react';

const TypeWriter = ({ string }) => {
    const [displayedString, setDisplayedString] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      setDisplayedString("");
      setIndex(0);
    }, [string]);
  
    useEffect(() => {
      if (index < string.length) {
        setTimeout(() => {
          setDisplayedString(string.slice(0, index + 1));
          setIndex(index + 1);
        }, 20);
      }
    }, [index, string]);
  
    return <span>{displayedString}</span>;
  }

  export default TypeWriter;