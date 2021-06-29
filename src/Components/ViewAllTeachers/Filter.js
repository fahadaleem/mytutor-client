import React, {useState} from "react"
import FilterListIcon from '@material-ui/icons/FilterList';
import {IconButton,Button, Typography, makeStyles, Menu, MenuItem, TextField, FormControl, Box, FormHelperText, FormLabel} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    root:{
        display:"flex",
        alignItems:"center",
        margin:"15px 0"
    },
    applyBtn:{
        backgroundColor:"#2A2A2A"
    }
}))


function FilterMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleSelect = (e) => {
        props.handleSetFilterBy(e.target.textContent)
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
          onClose={()=>{
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



const Filter = ()=>{

    const classes = useStyles();
    const [filterBy, setFilterBy] = useState('Name')
    return (
        <div className={classes.root}>
            <FilterMenu handleSetFilterBy = {setFilterBy}/>
            <Typography variant="subtitle1" color="initial">
                Filter by {filterBy}: 
            </Typography>
            <form>
            <Box ml={4}>
          <FormControl>
             <TextField
              id="filter-value"
              label="Enter Value"
            />
           </FormControl>
           <FormControl>
             <Button variant="contained" color="primary" className={classes.applyBtn} type="submit">
               Apply
             </Button>
           </FormControl>
          </Box>
            </form>
        </div>
    )
}

export default Filter