import React, { Component } from 'react'
import classes from './Dashboard.module.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/ui/card';
import Chart from '../../components/charts/chart';
import Typography from '@material-ui/core/Typography';

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
                <div style={{ marginBottom: "10px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Card cardTitle="Total Receivables" cardBody="Rs 5.7M" />
                        </Grid>
                        <Grid item xs={3}>
                            <Card cardTitle="Not Yet Due" cardBody="Rs 535.0K" />
                        </Grid>
                        <Grid item xs={3}>
                            <Card cardTitle="Total Overdue" cardBody="Rs 5.2M" />
                        </Grid>
                        <Grid item xs={3}>
                            <Card cardTitle="% Overdue" cardBody="90.6%" />
                        </Grid>
                    </Grid>
                </div>
                {/* ---chart--- */}
                <div style={{ marginBottom: "10px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Chart />
                        </Grid>
                        <Grid item xs={6}>
                            <Chart />
                        </Grid>
                    </Grid>
                </div>
                {/* ---Ageing Report Summary---*/}
                <div className="Ageing Report Summary">
                    <div>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.Paper} style={{ background: "#46A29F" }} >Ageing Report Summary</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                    donec massa sapien faucibus et molestie ac.
                            </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.Paper} style={{ background: "#46A29F" }} >Ageing Report Detailed</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                    donec massa sapien faucibus et molestie ac.
                            </Typography>
                            </Grid>
                        </Grid>

                    </div>

                </div>
            </React.Fragment>
        );
    };
}
export default Dashboard;