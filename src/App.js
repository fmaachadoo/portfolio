import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './App.css';

import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import Projects from './components/projects'
import NavBar from './components/navigation-bar'

function App() {
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#76ff03',
      },
    },
  });
  console.log(darkTheme.palette)
  return (
     
    <ThemeProvider theme={darkTheme}>

      <div className="App">
        <NavBar/>
      </div>
      </ThemeProvider>
        
  );
}

export default App;
