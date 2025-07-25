import { useEffect, useState } from 'react';
import { debounce, throttle } from '../utils/performance';

// Hook for optimized scroll handling
export const useOptimizedScroll = (callback: () => void, delay: number = 100) => {
  useEffect(() => {
    const debouncedCallback = debounce(callback, delay);
    window.addEventListener('scroll', debouncedCallback, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', debouncedCallback);
    };
  }, [callback, delay]);
};

// Hook for optimized resize handling
export const useOptimizedResize = (callback: () => void, delay: number = 250) => {
  useEffect(() => {
    const throttledCallback = throttle(callback, delay);
    window.addEventListener('resize', throttledCallback, { passive: true });
    
    return () => {
      window.removeEventListener('resize', throttledCallback);
    };
  }, [callback, delay]);
};

// Hook for intersection observer
export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options, hasIntersected]);

  return { isIntersecting, hasIntersected };
};

// Hook for lazy loading images
export const useLazyImage = (src: string) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setIsError(true);
    };
    
    img.src = src;
  }, [src]);

  return { imageSrc, isLoaded, isError };
};

// Hook for prefers-reduced-motion
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};