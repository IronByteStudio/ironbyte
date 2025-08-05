import { Box, Typography } from '@mui/material';

const Copyright = () => (
  <Box sx={{ width: '100%', textAlign: 'center', py: 10 }}>
    <Typography variant="body2" color="white">
      © {new Date().getFullYear()} IronByte Studio. All rights reserved.
    </Typography>
  </Box>
);

export default Copyright;
