import React, { Component } from 'react'
import classes from './Dashboard.module.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/ui/card'

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
               
                {/* ---filter form--- */}
                <div className={classes.Header}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <Paper className={classes.Paper} style={{ background: "#46A29F" }} >Vijiya Manufacturer : Receivables and Ageing Dashboard</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper className={classes.Paper} style={{ background: "#46A29F" }}>As of Date : 21-01-2021</Paper>
                        </Grid>
                    </Grid>
                </div>
                {/* ---cards--- */}
                <div style={{marginBottom:"10px"}}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Card cardTitle="Total Receivables" cardBody="Rs 5.7M"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Card cardTitle="Not Yet Due" cardBody="Rs 535.0K"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Card cardTitle="Total Overdue" cardBody="Rs 5.2M" />
                        </Grid>
                        <Grid item xs={3}>
                            <Card cardTitle="% Overdue" cardBody="90.6%"/>
                        </Grid>
                    </Grid>
                </div>
                {/* ---chart--- */}
                <div>

                </div>


            </React.Fragment>
        );
    };
}
export default Dashboard;