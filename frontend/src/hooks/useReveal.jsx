import { useEffect, useRef, useState } from "react";

// animation for the fade-in-up and out effect when elements enter the viewport
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Triggers animation when element is at least 15% visible
      },
      { threshold: 0.15, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// References: 
// - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// - https://css-tricks.com/a-few-functionalities-of-the-intersection-observer-api/
// - https://react.dev/reference/react/useRef