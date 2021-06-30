import React, { useState } from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
  IconButton,
  Button,
  Typography,
  Input,
  makeStyles,
  Menu,
  MenuItem,
  TextField,
  FormControl,
  Box,
  FormHelperText,
  FormLabel,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
  },
  applyBtn: {
    backgroundColor: "#2A2A2A",
  },
}));

function FilterMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (e) => {
    props.handleSetFilterBy(e.target.textContent);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-haspopup="true" onClick={handleClick}>
        <FilterListIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem onClick={handleSelect}>ID</MenuItem>
        <MenuItem onClick={handleSelect}>Name</MenuItem>
        <MenuItem onClick={handleSelect}>Email</MenuItem>
        <MenuItem onClick={handleSelect}>Country</MenuItem>
      </Menu>
    </div>
  );
}

const Filter = (props) => {
  const classes = useStyles();
  const [filterBy, setFilterBy] = useState("Name");
  const [filterVal, setFilterVal] = useState("");

  const handleFilterData = (data) => {
    if (filterVal === "") {
      props.handleSetData(props.data);
    } else if (filterBy === "Name") {
      const filteredArr = data.filter((elem) => {
        return elem.name.toLowerCase().includes(filterVal.toLowerCase());
      });

      props.handleSetData(filteredArr);
    } else if (filterBy === "Email") {
      const filteredArr = data.filter((elem) => {
        return elem.email === filterVal;
      });

      props.handleSetData(filteredArr);
    } else if (filterBy === "ID") {
      const filteredArr = data.filter((elem) => {
        return elem.id.toString() === filterVal;
      });

      props.handleSetData(filteredArr);
    }
    else if (filterBy === "Country") {
      const filteredArr = data.filter((elem) => {
        return elem.country.toLowerCase().includes(filterVal);
      });

      props.handleSetData(filteredArr);
    }

  };

  return (
    <div className={classes.root}>
      <FilterMenu handleSetFilterBy={setFilterBy} />
      <Typography variant="subtitle1" color="initial">
        Filter by {filterBy}:
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFilterData(props.data);
        }}
      >
        <Box ml={4}>
          <Input
            id="filter-value"
            label="Enter Value"
            onChange={(e) => {
              setFilterVal(e.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  type="submit"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
      </form>
    </div>
  );
};

export default Filter;
