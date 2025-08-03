import { Box, Typography } from "@mui/material";

const Hero = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: "100vh", // Full viewport height
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `
        radial-gradient(ellipse 70% 40% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%),
        url('/studio-bg.jpg')
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    <Typography
      variant="h1"
      sx={{
        color: "#fff",
        fontFamily: "'Montserrat', 'Poppins', 'Raleway', Arial, sans-serif",
        fontWeight: 400,
        fontSize: { xs: "2.5rem", md: "5rem" },
        letterSpacing: 10,
        textShadow: "0 8px 32px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)",
        textTransform: "uppercase",
      }}
    >
      IronByte Studio
    </Typography>
  </Box>
);

export default Hero;