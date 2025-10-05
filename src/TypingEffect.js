import React, { useState, useEffect, useRef } from "react";

function TypingEffect() {
  const text = "D  i c t i o n a r y";
  const [displayed, setDisplayed] = useState(""); // Declare state for displayed text
  const indexRef = useRef(0); // Create a ref for the index

  useEffect(() => {
    const type = () => {
      if (indexRef.current < text.length) {
        setDisplayed((prev) => prev + text.charAt(indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(timer); // Clear the interval when done
      }
    };

    const timer = setInterval(type, 100); // Start typing effect
    return () => clearInterval(timer); // Clean up interval on unmount
  }, []);

  return <h1 className="title">{displayed}</h1>;
}

export default TypingEffect;
