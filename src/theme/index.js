import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#FFF',
    },
    type: 'light',
    primary: {
      main: '#37BAEC',
      light: '',
      dark: '',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#4BB7B1',
      light: '',
      dark: '',
      contrastText: '#FFF',
    },
    colors: {
      astral: '#2E78B7',
      alabaster: '#FBFBFB',
      greenPea: '#1E6738',
    },
    shadows: {
      pointZeroFive: 'rgba(0,0,0,0.05)',
      pointFour: 'rgba(0, 0, 0, 0.4)',
    },
    grey: {
      10: '#F5F5F5',
      20: '#F0F0F0',
      30: '#C0C0C0',
      50: '#A9A9A9',
      70: '#808080',
      90: '#303030',
    },
  },
  typography: {
    fontFamily: ['Encode Sans', 'system-ui'].join(','),
    button: {
      fontSize: '16px',
    },
    h5: {
      fontSize: 26,
      fontWeight: 'bold',
      paddingBottom: 30,
      paddingTop: 15,
    },
  },
});
