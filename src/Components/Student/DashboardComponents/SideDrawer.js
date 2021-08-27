import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { ListItem, IconButton } from "@material-ui/core";
import categories from "../../../categories.json";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  listItem: {
    padding: "15px 10px",
    borderBottom: "2px solid #efefef",
  },
  toggleBtn:{
      color:"#fff",
      fontSize:"28px"
  }
}));

export default function SideDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <div>
      <IconButton aria-label="menu-toggle" onClick={toggleDrawer}>
        <ArrowForwardIosIcon className={classes.toggleBtn}/>
      </IconButton>
      <Drawer
        open={state}
        onClose={() => toggleDrawer()}
        PaperProps={{ className: classes.list }}
      >
        <List>
          {Object.keys(categories).map((category, index) => {
            return (
              <Link className={classes.link}>
                <ListItem className={classes.listItem}>{category}</ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
