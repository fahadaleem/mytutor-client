import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    btn: {
        // margin: "0 10px",
        borderRadius: "25px",
        padding: "10px 35px",
        width:"100% !important"
      },
      loginBtn: {
        backgroundColor: "#e63946",
        color: "#f1faee",
        letterSpacing: "1px !important",
        "&:hover": {
          backgroundColor: "#f1faee",
          color: "#e63946",
        },
      },
      signupBtn: {
        backgroundColor: "#a8dadc",
        letterSpacing: "1px !important",
        color: "#1d3557",
        "&:hover": {
          backgroundColor: "#f1faee",
          color: "#1d3557",
        },
      }
}))


export default function SimpleMenu() {



  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Slide}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About My Tutor</MenuItem>
        <MenuItem onClick={handleClose}>Testimonials</MenuItem>
        <MenuItem onClick={handleClose}>Careers</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        <MenuItem> <Button
              size="large"
              variant="contained"
              color="default"
              className={`${classes.btn} ${classes.loginBtn}`}
            >
              Login
            </Button>
            </MenuItem> 
            <MenuItem>
            <Button
              size="large"
              variant="contained"
              color="default"
              className={`${classes.btn} ${classes.signupBtn}`}
            >
              Sign Up
            </Button></MenuItem>

      </Menu>
    </div>
  );
}
