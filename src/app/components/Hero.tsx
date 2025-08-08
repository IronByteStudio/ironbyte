import { Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (parallaxRef.current && e.target) {
        const scrollTarget = e.target as HTMLElement;
        const scrolled = scrollTarget.scrollTop;
        const parallaxOffset = scrolled * 0.5; // 50% of scroll speed
        parallaxRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;
      }
    };

    // Find the scroll container by traversing up the DOM
    let scrollContainer: HTMLElement | null = null;
    let parent = containerRef.current?.parentElement;
    
    while (parent) {
      const computedStyle = window.getComputedStyle(parent);
      if (computedStyle.overflowY === 'scroll' || computedStyle.overflowY === 'auto') {
        scrollContainer = parent;
        break;
      }
      parent = parent.parentElement;
    }

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer?.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.heroContainer}>
      <div ref={parallaxRef} className={styles.parallaxBg} />
      <div className={styles.heroContent}>
        <Typography
          variant="h1"
          sx={{
            color: '#fff',
            fontFamily:
              '"Helvetica Neue", Helvetica, Arial, "Liberation Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            fontWeight: 200, // Ultra thin
            fontSize: { xs: '2.5rem', md: '5rem' },
            letterSpacing: 12,
            textShadow: '0 8px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)',
            textTransform: 'uppercase',
            transform: 'scaleY(1.2)',
            display: 'inline-block',
          }}
        >
          IronByte Studio
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
