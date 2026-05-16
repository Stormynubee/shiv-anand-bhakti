import { useEffect, useRef } from 'react';

/**
 * A hook to trigger animations when an element enters the viewport.
 * Uses IntersectionObserver for high performance.
 */
export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          entry.target.classList.remove('revealed');
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
      
      // Also observe children with a specific class for staggered animations
      const childrenToStagger = currentRef.querySelectorAll('.reveal-child');
      childrenToStagger.forEach(child => observer.observe(child));
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
};

// Add this to index.css later:
/*
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.reveal-element.revealed {
  opacity: 1;
  transform: translateY(0);
}

.reveal-child {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-child.revealed {
  opacity: 1;
  transform: translateY(0);
}
*/
