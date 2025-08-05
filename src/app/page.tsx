'use client';

import Image from 'next/image';
import styles from './page.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import { Box } from '@mui/material';
import Copyright from './components/Copyright';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
        }}
      >
        <Box sx={{ scrollSnapAlign: 'start', minHeight: '100vh' }}>
          <Hero />
        </Box>
        <Box
          sx={{
            scrollSnapAlign: 'start',
            minHeight: '100vh',
            overflowY: 'auto',
          }}
        >
          <About />
        </Box>
        <Box
          sx={{
            scrollSnapAlign: 'start',
            minHeight: '100vh',
            overflowY: 'auto',
          }}
        >
          <Contact />
        </Box>
        <Box sx={{ scrollSnapAlign: 'start' }}>
          <Copyright />
        </Box>
      </Box>
    </>
  );
}
