import { useState, useCallback } from "react";

/**
 * @param {number} totalSlides - Total number of slides
 * @param {Object} options - Configuration options
 * @returns {Object} - { currentIndex, nextSlide, prevSlide, goToSlide, setCurrentIndex }
 */
export const useCarousel = (totalSlides, options = {}) => {
  const { loop = true, initialIndex = 0 } = options;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextSlide = useCallback(() => {
    if (loop) {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
    }
  }, [totalSlides, loop]);

  const prevSlide = useCallback(() => {
    if (loop) {
      setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  }, [totalSlides, loop]);

  const goToSlide = useCallback(
    (index) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentIndex(index);
      }
    },
    [totalSlides],
  );

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    setCurrentIndex,
  };
};
