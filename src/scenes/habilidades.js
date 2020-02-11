import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,
      
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
        minHeight: 120
    },
}));

export default function Habilidades(){
    const classes = useStyles();
    const data = require('../static/infos/habilidades.json');
    //console.log(data);
    return(
        <div className={classes.root} >
            <Grid container justify='center'>    
                <Grid item>    
                    <Typography variant='h2' gutterBottom color='primary' >
                        HABILIDADES
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={8} justify='space-evenly' alignItems='baseline'>
                <Grid item xs={6}>
                    <Paper className={classes.paper} >
                    <Grid container justify='center'>    
                        <Grid item >
                            <Typography variant='h4' >
                                Linguagens e Frameworks
                            </Typography>
                        </Grid>  
                    </Grid>
                    <br></br>    
                        <Grid container spacing={3} justify='space-evenly'>                                
                            {data.linguagens.map(item => (
                                <Grid item >    
                                    <Chip label={item}/>    
                                </Grid>
                            ))}
                        </Grid>    
                    </Paper>             
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper} >
                        <Grid container justify='center'>    
                            <Grid item>
                                <Typography variant='h4' >
                                    Outros conhecimentos
                                </Typography>
                            </Grid>    
                        </Grid>
                        <br></br>   
                        <Grid container spacing={3} justify='space-evenly'>
                            {data.others.map(item => (
                                <Grid item>    
                                    <Chip label={item}/>    
                                </Grid>
                            ))}
                        </Grid>    
                    </Paper>    
                </Grid>    
            </Grid>
            <Grid>
                <br></br>
                <Paper className={classes.paper}>    
                    <Typography variant='body1' >
                        Estudo ferramentas de programação tanto de back-end quanto de front-end, procuro sempre estudar sobre tecnologias que estão sendo as mais ultilizadas no mercado, sendo assim, estou sempre aberto a entender e a ultilizar tecnologias novas. Conhecimentos sobre boas-práticas e otimização de código que ajudem a melhorar tanto o desempenho quanto a manutenção do software são elementos do meu dia-a-dia de estudo.
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}