import React from "react";
import { Drawer, makeStyles, Typography, Divider, Box } from "@material-ui/core";
import SidebarMenu from "./SidebarMenu"


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
    letterSpacing:"2px"
  },
  designation:{
      fontSize:"16px",
      marginBottom:"10px", 
    letterSpacing:"2px"

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
  );
};

export default SideDrawer;
