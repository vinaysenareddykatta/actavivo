import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#32AE79',
      main: '#32AE79',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f4e732c9',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography:{
    fontFamily: 'Poppins'
  }
});
