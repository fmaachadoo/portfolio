import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';

const useStyles = makeStyles(theme=>(
    {
        large: {
            width: theme.spacing(45),
            height: theme.spacing(45),
        },
        paper: {
            padding: theme.spacing(3),
            color: theme.palette.text.secondary,
            minWidth: 500
        },
    }
));

export default function Contato(){
    const classes = useStyles();
    const image = require('../static/images/filipe-machado.jpeg');
    const data = require('../static/infos/contato.json');
    return(
        <div>
            <Grid container spacing={2} direction='row' wrap='nowrap' alignItems='center' justify='space-evenly' >
                <Grid item>
                    <Avatar alt='Filipe Machado' src={image} className={classes.large}/>
                </Grid>
                <Grid item>
                <Paper className={classes.paper}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item>
                            <Typography variant='button'>Nome : </Typography>
                            <Typography variant='body1'>{data.Nome}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='button'>Nacionalidade : </Typography>
                            <Typography variant='body1'>{data.Nacionalidade}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='button'>Idade : </Typography>
                            <Typography variant='body1'>{data.Idade}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='button'>Endereço : </Typography>
                            <Typography variant='body1'>{data.Endereco}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='button'>Celular : </Typography>
                            <Typography variant='body1'>{data.Celular}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='button'>Email : </Typography>
                            <Typography variant='body1'>{data.Email}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='button'>Github : </Typography>
                            <Typography variant='body1'>{data.Github}</Typography>
                        </Grid>
                    </Grid>    
                </Paper>
                </Grid>
            </Grid>
        </div>
    );    
}