import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Projects from '../components/projects'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,  
    },

    
}));

export default function Projetos(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Projects/>
        </div>
    );
}