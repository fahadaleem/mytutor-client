import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent,Button, Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles(theme=>({
  root: {
    minWidth: 275,
    backgroundColor:"#29524A",
    padding:"40px 25px",
    margin:"10px 0",
    borderRadius:"10px",
    marginRight:"15px",
    [theme.breakpoints.down('sm')]:{
      marginRight:0
  }
},

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    // fontSize: 32,
    color:"white",
    textAlign:"center"
  },
  count:{
    color:"white",
    textAlign:"center"
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function TotalTeacherCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h4">
          Total Teachers
        </Typography>
        <Typography variant="h2" className={classes.count}>
          +{props.totalTeachers}
        </Typography>
      </CardContent>
    </Card>
  );
}
