import React from 'react';
import {Card , CardContent , Typography , Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from "classnames";

 const Cards = (props) => {
           if(!props.data.confirmed){
               return "Loading.. "
           }     
           
           console.log(props.data);
    return (
        <div className = {styles.container}>
            <Grid container spacing = {10} justify = "center">
                <Grid item component = {Card} xs = {12} md= {3} className = {cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Infected</Typography>
                        <Typography variant = "h5" > <CountUp  start ={0} end = {props.data.confirmed.value} duration = {2} separator = ","></CountUp>
                        </Typography>
                        <Typography color = "textSecondary" > {new Date(props.data.lastUpdata.lastUpdate).toDateString() }</Typography>
                        <Typography variant = "body2" > Number of active Cases</Typography>

                    </CardContent>   
                </Grid>
                <Grid item component = {Card} xs = {12} md= {3} className = {cx(styles.card , styles.recovered)}>
                
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant = "h5" ><CountUp  start ={0} end = {props.data.recovered.value} duration = {2} separator = ","></CountUp></Typography>
                        <Typography color = "textSecondary" > {new Date(props.data.lastUpdata.lastUpdate).toDateString() }</Typography>
                        <Typography variant = "body2" > Number of recovered Cases</Typography>

                    </CardContent>   
                </Grid>
                <Grid item component = {Card} xs = {12} md= {3} className = {cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom> Deaths</Typography>
                        <Typography variant = "h5" ><CountUp  start ={0} end = {props.data.deaths.value} duration = {2} separator = ","></CountUp></Typography>
                        <Typography color = "textSecondary" >{new Date(props.data.lastUpdata.lastUpdate).toDateString() }</Typography>
                        <Typography variant = "body2" > Number of deaths</Typography>

                    </CardContent>   
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards;