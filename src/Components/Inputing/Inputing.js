import React from 'react';
import Grid from '@material-ui/core/Grid';


function Inputing(){
    return(
        <div>

        <div className="workout">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>O que treinar</h1>
                <h2>...</h2>
            </Grid>
        </div>
        
        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>Onde treinar</h1>
                <h1>....</h1>
            </Grid>
        </div>

        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>NUMERO DE EXERCICIOS</h1>
                <h1>....</h1>
            </Grid>
        </div>

        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>Numero exercicios</h1>
                <h1>....</h1>
            </Grid>
        </div>

        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>button submmit</h1>
                <h1>....</h1>
            </Grid>
        </div>

        </div>
    );
}

export default Inputing;