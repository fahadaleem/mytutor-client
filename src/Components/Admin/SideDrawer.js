import React, { useState } from "react";
import {
  Drawer,
  makeStyles,
  Typography,
  Divider,
  Box, IconButton,
} from "@material-ui/core";
import SidebarMenu from "./SidebarMenu";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "75px",
    zIndex: "-10",
    padding: "25px 10px",
    width: "230px",
    backgroundColor: "#EEEEEE",
    color: "#29524A",
  },
  userName: {
    fontSize: "18px",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  designation: {
    fontSize: "16px",
    marginBottom: "10px",
    letterSpacing: "2px",
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

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      classes={{ paper: classes.root }}
    >
      <Box my={1}>
        <Typography variant="h5" className={classes.userName}>
          Muhammad Fahad
        </Typography>
        <Typography variant="h6" className={classes.designation}>
          Admin of Mytutor
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
        Muhammad Fahad
      </Typography>
      <Typography variant="h6" className={classes.designation}>
        Admin of Mytutor
      </Typography>
      <Divider />
    </Box>
    <SidebarMenu />
  </Drawer>
  </div>)
}

export {SideDrawer, ResponsiveSidebarDrawer};
