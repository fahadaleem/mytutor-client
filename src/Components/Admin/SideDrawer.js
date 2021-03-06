import React, { useState, useContext } from "react";
import {
  Drawer,
  makeStyles,
  Typography,
  Divider,
  Box, IconButton,
} from "@material-ui/core";
import SidebarMenu from "./SidebarMenu";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthContext } from "../../Contexts/AdminAuthContexts";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "75px",
    padding: "25px 10px",
    width: "230px",
    backgroundColor: "#EEEEEE",
    color: "#29524A",
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },
  userName: {
    fontSize: "18px",
    fontWeight: "500",
  },
  designation: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  responsiveRoot:{
    padding: "25px 10px",
    width: "230px",
    backgroundColor: "#EEEEEE",
    color: "#29524A",
  },
  menuToggler:{
      color:"white"
  }
}));

const SideDrawer = () => {
  const classes = useStyles();
  const {admin} = useContext(AuthContext)

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      classes={{ paper: classes.root }}
    >
      <Box my={1}>
        <Typography variant="h5" className={classes.userName}>
          {admin.name}
        </Typography>
        <Typography variant="h6" className={classes.designation}>
          {admin.role}
        </Typography>
        <Divider />
      </Box>
      <SidebarMenu />
    </Drawer>
  );
};



const ResponsiveSidebarDrawer = ()=>{

    const classes = useStyles()

    const [toggle, setToggle] = useState(false)
    const {admin} = useContext(AuthContext)

    return(
    <div>
    
    <IconButton aria-label="toggle" onClick={()=>setToggle(!toggle)} className={classes.menuToggler}>
        <MenuIcon />
    </IconButton>

    <Drawer
    variant="temporary"
    anchor="left"
    open={toggle}
    classes={{ paper: classes.responsiveRoot }}
    onClose={()=>setToggle(!toggle)}
  >
    <Box my={3}>
      <Typography variant="h5" className={classes.userName}>
      {admin.name}
      </Typography>
      <Typography variant="h6" className={classes.designation}>
      {admin.role}
      </Typography>
      <Divider />
    </Box>
    <SidebarMenu />
  </Drawer>
  </div>)
}

export {SideDrawer, ResponsiveSidebarDrawer};
