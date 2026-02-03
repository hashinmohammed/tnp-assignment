import { useState, useEffect, useRef } from "react";

/**
 * Custom hook for virtual scrolling based on window height and scroll position
 * @param {Array} items - Array of items to virtualize
 * @param {Object} options - Configuration options
 * @returns {Object} - { visibleItems, totalHeight, offsetY }
 */
export const useVirtualScroll = (items, options = {}) => {
  const {
    itemHeight = 400,
    overscan = 3, // Number of items to render above/below visible area
    containerRef = null,
  } = options;

  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });
  const scrollingElement = useRef(null);

  useEffect(() => {
    const element = containerRef?.current || window;
    scrollingElement.current = element;

    const handleScroll = () => {
      const scrollTop =
        element === window
          ? window.pageYOffset || document.documentElement.scrollTop
          : element.scrollTop;

      const viewportHeight =
        element === window ? window.innerHeight : element.clientHeight;

      // Calculate which items should be visible
      const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan,
      );
      const endIndex = Math.min(
        items.length,
        Math.ceil((scrollTop + viewportHeight) / itemHeight) + overscan,
      );

      setVisibleRange({ start: startIndex, end: endIndex });
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    element.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items.length, itemHeight, overscan, containerRef]);

  // Calculate total height for the container
  const totalHeight = items.length * itemHeight;

  // Calculate offset for the first visible item
  const offsetY = visibleRange.start * itemHeight;

  // Get visible items
  const visibleItems = items
    .slice(visibleRange.start, visibleRange.end)
    .map((item, index) => ({
      ...item,
      index: visibleRange.start + index,
    }));

  return {
    visibleItems,
    totalHeight,
    offsetY,
    visibleRange,
  };
};
