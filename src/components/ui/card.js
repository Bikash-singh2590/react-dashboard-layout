
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        paddingLeft: "10px",
        paddingTop: "1px",
        paddingBottom: "5px",
        background: "grey",
        borderRadius:"7px"

    },
    tilte: {

    },
    body: {
        color: "#fff",
    }

});

export default function Card(props) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <div className={classes.tilte}>
                <p>{props.cardTitle}</p>
            </div>
            <div className={classes.body}  >
                <Typography variant="h6"  >{props.cardBody}</Typography>
            </div>
        </div>
    )
}

