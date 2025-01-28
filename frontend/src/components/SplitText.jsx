import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text,
  className,
  delay = 0,
  animationFrom = {},
  animationTo = {},
  easing = "easeOut",
  threshold = 0.2,
  rootMargin = "-50px",
  onLetterAnimationComplete
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const splitText = text
      .split("")
      .map((char, index) => {
        return `<span class="letter">${char}</span>`;
      })
      .join("");

    textRef.current.innerHTML = splitText;

    const letters = textRef.current.querySelectorAll(".letter");

    gsap.from(letters, {
      opacity: animationFrom.opacity,
      x: animationFrom.x || 0,
      y: animationFrom.y || 0,
      transform: animationFrom.transform || "none",
      stagger: 0.05,
      delay: delay,
      ease: easing,
      onComplete: onLetterAnimationComplete,
    });
  }, [text, delay, animationFrom, easing, onLetterAnimationComplete]); // <-- corrected "easing" here

  return <div ref={textRef} className={className}></div>;
};

export default SplitText;

