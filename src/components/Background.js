import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './css/background.css';
import Grid from '@material-ui/core/Grid';
import img01 from './img/cv01.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const  Background = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div class="leaf">
                        <div>  
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>  
                            <img src={img01} height="75px" width="75px" ></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div> 
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>   
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                    </div>
                    <div class="leaf leaf1">
                        <div>  
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>  
                            <img src={img01} height="75px" width="75px" ></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div> 
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>   
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                    </div>
                    <div class="leaf leaf2">
                        <div>  
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>  
                            <img src={img01} height="75px" width="75px" ></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div> 
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>   
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                        <div>
                            <img src={img01} height="75px" width="75px"></img>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Background;