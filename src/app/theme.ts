import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(12,19,41)',
      contrastText: '#fff',
    },
    accent: {
      main: '#FF8C42',
      contrastText: '#fff',
    },
  },
});

export default theme;
