import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  ul: {
    listStyleType: "none",
    margin: 0,
    //padding: 0,
    overflow: "hidden",
    
  },
  
  li: {
    float: "center",
    display: "block",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    padding: "16px",
  },
  
//   li a {
//     display: block;
//     color: white;
//     text-align: center;
//     padding: 16px;
//     text-decoration: none;
//   }
  
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"#005555", height: "100px"}} >
        <Toolbar variant="dense">
          
            <Typography variant="p" color="initial"></Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
