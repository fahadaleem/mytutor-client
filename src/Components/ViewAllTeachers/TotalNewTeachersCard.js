import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    backgroundColor: "#2A2A2A",
    padding: "40px 25px",
    margin: "10px 0",
    borderRadius: "10px",
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    // fontSize: 32,
    color: "white",
    textAlign: "center",
  },
  count: {
    color: "white",
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function TotalNewTeachersCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h4">
          Total New Teachers Hired
        </Typography>
        <Typography variant="h2" className={classes.count}>
          +267
        </Typography>
      </CardContent>
    </Card>
  );
}
