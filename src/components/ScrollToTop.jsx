import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // First attempt to scroll a layout container with id 'scroll-container'
    const scrollContainer = document.getElementById('scroll-container');
    
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    } else {
      // Fall back to window scrolling
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
