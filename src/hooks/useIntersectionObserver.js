import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for observing element visibility in viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - { ref, isVisible }
 */
export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        // Once visible, mark as "has been visible" for lazy loading
        if (visible && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasBeenVisible, options]);

  return { ref: elementRef, isVisible, hasBeenVisible };
};
