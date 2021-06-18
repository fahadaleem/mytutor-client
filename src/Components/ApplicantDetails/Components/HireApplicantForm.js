import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {makeStyles, Typography, IconButton} from '@material-ui/core';
import HiringDatePicker from "./HiringDatePicker"
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop:"20px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function HireApplicantForm(props) {
  
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [passwordVisiblity, setPasswordVisibility] = React.useState(false)


  const handleGeneratePassword = ()=>{

  }


  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      
      <Dialog open={props.formState} scroll={'paper'} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Teacher Hiring Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To hire new teacher, Please enter the following intormation to complete the hiring process.
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
          <HiringDatePicker />
          <TextField
            id="salary"
            label="Salary Per Month"
            margin="dense"
            type="number"
            fullWidth
          />
           <FormControl fullWidth className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Course Code</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>PY-01</MenuItem>
          <MenuItem value={20}>CSHARP-01</MenuItem>
          <MenuItem value={30}>STATS-03</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
          <TextField
            id="course-name"
            label="CourseName"
            className={classes.courseNameField}
          />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
      <Typography variant="h5" color="initial">Login Credentials</Typography>
          <TextField
            id="teacher-email"
            label="Email"
            inputProps={{
              autocomplete: 'new-password',
              form: {
                autocomplete: 'off',
              },
            }}

          />
      </FormControl>
      <FormControl fullWidth className={classes.formControl}>
          <TextField
            id="teacher-password"
            label="Password"
            autoComplete="off"
            type={passwordVisiblity?"text":"password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={()=>{
                    setPasswordVisibility(!passwordVisiblity)
                  }}>
                  {passwordVisiblity?<VisibilityIcon />:<VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
              autocomplete: 'new-password',
            form: {
              autocomplete: 'off',
              },
            }}
          />
          <Box my={2}>
          <Button variant="outlined" color="default">
            Generate Password
          </Button>
          </Box>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} variant="contained" color="secondary">
            Cancel
          </Button>
          <Button onClick={props.handleClose} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
