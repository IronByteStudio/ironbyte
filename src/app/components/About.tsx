import { Box, Divider, Stack, Typography } from '@mui/material';

const About = () => {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          textAlign: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Stack direction="column" spacing={2} alignItems="center">
          <Typography
            variant="h2"
            component="h1"
            color="primary.main"
            gutterBottom
          >
            About Us
          </Typography>
          <Divider
            sx={{ borderColor: 'accent.main', borderWidth: 2, width: '40%' }}
          />
          <Typography
            variant="body1"
            sx={{
              width: { xs: '98%', md: '50%' },
              padding: { xs: '1rem 0.5rem', md: '2rem 0' },
            }}
          >
            Ironbyte is a two-person web development team passionate about
            helping small and local businesses grow online. We have experience
            working with nonprofits and enjoy supporting organizations that make
            a positive impact. As a faith-based team, we value integrity,
            service, and building genuine relationships with our clients.
            Whether you’re just getting started or looking to refresh your
            online presence, we’re here to make the process simple and
            effective.
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default About;
