import { Typography } from "@mui/material";
import styles from "./Hero.module.css";

const Hero = () => (
  <div className={styles.heroBg}>
    <Typography
      variant="h1"
      sx={{
        color: "#fff",
        fontFamily: "'Montserrat', 'Poppins', 'Raleway', Arial, sans-serif",
        fontWeight: 700,
        fontSize: { xs: "2.5rem", md: "5rem" },
        letterSpacing: 6,
        textShadow: "0 8px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)",
        textTransform: "uppercase",
      }}
    >
      IronByte Studio
    </Typography>
  </div>
);

export default Hero;