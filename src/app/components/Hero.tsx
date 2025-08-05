import { Typography } from '@mui/material';
import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.heroBg}>
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
);

export default Hero;
