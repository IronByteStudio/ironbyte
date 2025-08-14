import { Box, Typography, useTheme } from '@mui/material';

const Copyright = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box sx={{ width: '100%', textAlign: 'center', py: 2 }}>
      <Typography
        variant="body2"
        sx={{
          color: isDark ? theme.palette.primary.contrastText : theme.palette.primary.main,
        }}
      >
        © {new Date().getFullYear()} IronByte Studio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Copyright;
