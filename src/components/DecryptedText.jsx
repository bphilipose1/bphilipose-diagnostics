import React, { useState, useEffect } from "react";

const DecryptedText = ({ text, speed = 40, delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\/[]{}-=+*^?#________";

  useEffect(() => {
    let iteration = 0;
    let interval;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) clearInterval(interval);
        iteration += 0.5;
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return <span>{displayText}</span>;
};

export default DecryptedText;
