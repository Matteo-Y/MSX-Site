import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { hash } = useLocation(); // Use hash for HashRouter

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0); // Manually scroll to top
  }, [hash]); // Trigger scroll reset on hash change

  // Optional cleanup (in case you switch between routers)
  useEffect(() => {
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'; // Restore default behavior on unmount
      }
    };
  }, []);
}
