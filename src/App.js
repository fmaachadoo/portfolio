import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import Projects from './components/projects';
import NavBar from './components/navigation-bar';

import FireParticles from './components/particles';

function App() {
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#ff0000',
      },
      background: {
        paper: '#3d2a2a',
      },
      text: {
        primary: '#ffffff',
        secondary: '#ffffff',
      }
    },
  });




  console.log(darkTheme.palette)
  return (     
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <NavBar/>
        <FireParticles />
      </div>
      </ThemeProvider>
        
  );
}

export default App;
