import { Box, Divider, Stack, Typography } from "@mui/material";

const About = () => {
  return (
<>
<Box sx={{ padding: 2, textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    <Stack direction="column" spacing={2}>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        About Us
      </Typography>
      <Divider />
      <Typography variant="body1">
        We are a company dedicated to providing the best service possible.
      </Typography>
    </Stack>
</Box>
</>
  );
};

export default About;
