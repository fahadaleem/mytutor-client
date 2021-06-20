import React from 'react';
import MailIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Button } from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AllCourses from './AllCourses'


import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
     toolbar: theme.mixins.toolbar,

    custom:{
        
        height: "100% !important",
        backgroundColor: "lightBlue",
        drawerPaper: {
    },
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      heading:{
        fontWeight:"medium",
        fontSize:"20px",
        padding:"10px"
      },
      textField: {
        margin: "10px 0",
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#2F1793 !important",
        },
        width: "100%",
      },
      submitBtn: {
        width: "80%",
        marginTop: "20px",
        marginLeft: "20px",
        
        backgroundColor: "#2F1793",
        "&:hover": {
          backgroundColor: "#4722e3",
        },
        align: "center",
      },
    }));




const SideBar = () => {
    const classes = useStyles();


    return ( 
      <div >
        <div className={`${classes.toolbar} ${classes.custom}`} >
        <Typography variant="h6" color="initial" className={classes.heading}>Your Courses</Typography>
        <Divider />
        <List>
          {['Course1', 'Course2', 'Course3', 'Course4'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><BookIcon/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
          className={`${classes.submitBtn} ${classes.textField}`}
          size="large"
          type="submit"
        >
          Logout
        </Button>
      </div> 
      
      </div>
      
      );
}
 
export default SideBar;