import React, { useState, useEffect } from "react";

const TypingAnimation = ({
  text,
  speed = 50,
  className = "",
  cursor = true,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    setIsComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {cursor && !isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypingAnimation;
