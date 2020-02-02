import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme=>(
    {
        large: {
            width: theme.spacing(45),
            height: theme.spacing(45),
        },
        root: {
            backgroundColor: theme.palette.primary.main,
        },
    }
));

//Neste arquivo fica a página relativa ao resumo
export default function Resumo(){
    const classes = useStyles();
    const image = require('../static/images/filipe-machado.jpeg');
    const data = require('../static/infos/bio.json');
    
    return(
        <div>
            <Grid container alignItems="center" justify="center">
                <Typography variant='h2' gutterBottom>
                    FILIPE MACHADO
                </Typography>
            </Grid>
            <Grid container wrap='nowrap' alignItems='center' justify='center' spacing={2}>
                <Grid item>
                    <Avatar alt='Filipe Machado' src={image} className={classes.large}/>
                </Grid>
                <Grid container wrap='nowrap' direction='column' item>
                    <Typography variant='subtitle1' gutterBottom>
                        {data.first} 
                    </Typography>
                    <Typography variant='subtitle1' gutterBottom>
                        {data.second} 
                    </Typography>
                </Grid>        
            </Grid>    
        </div>
    );

}