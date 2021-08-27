import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Input,
  InputAdornment,
  TextField,
  Box,
  IconButton,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import categories from "../../../categories.json";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // padding:"5px 25px"
  },
  link: {
    textDecoration: "none",
    padding: "0 5px",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#2F1793",
    padding: "5px 20px",
  },
  searchTextField: {
    width: "35vw",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
      borderRadius: "30px",
      borderWidth: "2px",
      padding: 0,
    },
    "& input": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-adornedStart": {
      height: "45px",
    },
  },
}));

const StudentNavbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6">Mytutor - Student</Typography>
        <div className="">
          <TextField
            id="input-with-icon-textfield"
            variant="outlined"
            className={classes.searchTextField}
            placeholder="Search course"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#fff" }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Box>
            <IconButton aria-label="favourite-btn">
              <FavoriteBorderIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="favourite-btn">
              <NotificationsNoneIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="favourite-btn">
              <AccountCircleIcon style={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </div>
      </Toolbar>
      <Box
        className={classes.categories}
        display="flex"
        justifyContent="space-between"
        style={{ backgroundColor: "white", padding: "10px 20px" }}
      >
        {Object.keys(categories)
          .slice(0, 8)
          .map((category, index) => {
            return (
              <Link className={classes.link} key={index}>
                <Typography variant="body1" color="initial">
                  {category}
                </Typography>
              </Link>
            );
          })}
      </Box>
    </AppBar>
  );
};

export default StudentNavbar;
