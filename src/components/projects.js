import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import Latym from '../static/images/latym.jpeg';
import Recomendacao from '../static/images/recomendacao.png';
import English from '../static/images/logo.png';

const images = [ Latym , Recomendacao, English ];
    
  
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    paper: {
      padding: 6,
      color: theme.palette.text.secondary,
      
    },
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.primary.light,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.primary.light,      
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  

export default function Projects() {
  const classes = useStyles();
  const data = require('../static/infos/projetos.json');
  return (
    <div>
    <Paper className={classes.root}>
      {data.projetos.map((projecto, index) => (
        <ButtonBase
          focusRipple
          key={projecto.name}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: projecto.width,
          }}
          href={projecto.link}
          
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[index]})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {projecto.name}
              <span className={classes.imageMarked} />
            
            </Typography>
            
        
          </span>
        </ButtonBase>
      ))}
      
      <Grid container direction='row' spacing={2} wrap='nowrap' justify='space-evenly'>  
      
        {data.projetos.map(projecto => (
          <Grid item container xs={3}>
            
            <Paper elevation={0} width={projecto.width} className={classes.paper}>  
            <Grid item>
              <Typography variant='body2' component='p'>
                {projecto.descricao}
              </Typography>
            </Grid>  
            <br></br>
            <Typography variant='button' color='textSecondary' component='p'>
                Tecnologias:
            </Typography>  
              <Grid container spacing={2}>
              {projecto.tecnologias.map(tech => (
                <Grid item>  
                  <Chip label={tech}/> 
                </Grid>
              ))}
              </Grid>
            </Paper>
          </Grid>     
        ))}
        
      </Grid>  
      </Paper>
      </div>
    );
  }
  