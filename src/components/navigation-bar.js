import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

import Resumo from '../scenes/resumo'
import Habilidades from '../scenes/habilidades'
import Projetos from '../scenes/projetos'
import Contato from '../scenes/contato'

function a11yProps(index) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles (theme => ({
    root: {
        flexGrow: 1,
        
    },
    navbar: {
        minHeight: 80,
        backgroundColor: '#2e1534',
              
    }

}));

export default function NavBar(){
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    /* NEW */

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = index => {
        setValue(index);
      };
    
      const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };
    
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
          >
            {value === index && <Box p={6}>{children}</Box>}
          </Typography>
        );
      }

    /* TILL HERE */

    return(
        <div>
            <AppBar position='static' color='default' className={classes.navbar}>
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="tabs"
                >
                    <Tab className={classes.navbar} label="Resumo" {...a11yProps(0)} />
                    <Tab className={classes.navbar} label="Habilidades" {...a11yProps(1)} />
                    <Tab className={classes.navbar} label="Projetos" {...a11yProps(2)} />
                    <Tab className={classes.navbar} label="Contato" {...a11yProps(3)} />
                </Tabs>
            </AppBar> 

            <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Resumo backgroundColor={theme.palette.primary.main} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Habilidades/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Projetos/>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Contato/>
                </TabPanel>
            </SwipeableViews>           
        </div>    
    );
}
