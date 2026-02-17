import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // useLayoutEffect fires synchronously before the browser paints,
  // ensuring the scroll position is reset before the user sees the new page.
  useLayoutEffect(() => {
    // Temporarily disable CSS smooth scrolling so the jump is instant
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    // Force scroll to top on every possible scroll container
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    // Also reset #root in case it became a scroll container
    const root = document.getElementById('root');
    if (root) root.scrollTop = 0;

    // Restore the original scroll-behavior on the next frame
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prevBehavior;
    });
  }, [pathname]);

  return null;
}
