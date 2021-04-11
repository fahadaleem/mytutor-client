import React, {useState} from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Divider, Checkbox, FormControlLabel,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles({
  root: {
    // backgroundColor: "#E9EAED",
    backgroundColor:"#29524A",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  customFont: {
    fontFamily: "'Quicksand', sans-serif",
  },
  mainHeading: {
    fontWeight: "bold",
  },
  form: {
    padding: "45px 35px",
    marginTop: "3rem",
  },
  textField: {
    margin: "10px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#29524A !important",
    },
  },
  inputLabel: {
    color: "green !important",
    fontWeight: "500",
  },
  submitBtn: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#29524A",
    "&:hover": {
      backgroundColor: "#669b90",
    },
  },
  linkBtn: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#29524A",
  },
  checkbox:{
    color: "#29524A !important",
  }
});

const AdminLogin = (props) => {

    const {handleSubmit, loading} = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const classes = useStyles();

    const handleToggleRememberMe = ()=>{
        setRememberMe(!rememberMe)
    }

    const handleLoginUser = ()=>{
        const credentials = {
            email:email,
            password: password
        }

        handleSubmit(credentials)
    }


  return (
    <div className={classes.root}>
      <Container maxWidth="xs" component={Paper} elevation={3}>
        <form className={`${classes.form}`} onSubmit={handleLoginUser}>
          <Box my={2}>
            <Typography
              variant="h3"
              color="initial"
              align="center"
              className={`${classes.customFont} ${classes.mainHeading}`}
            >
              Admin Login
            </Typography>
          </Box>
          <Box my={1}>
            <Typography variant="h5" color="initial">User not found</Typography>
          </Box>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            className={`${classes.textField} ${classes.customFont}`}
            InputLabelProps={{className: classes.inputLabel}}
            onChange = {(e)=>{
                setEmail(e.target.value)
            }}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            InputLabelProps={{className: classes.inputLabel}}
            className={classes.textField}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
          <FormControlLabel
            label="Remember Me"
            control={
              <Checkbox
                value="Remember Me"
                checked={rememberMe}
                onChange={handleToggleRememberMe}
                className={classes.checkbox}
              />
            }
          />

          <Box style={{textAlign: "center"}} my={1}>
            <Button color="primary">
              <a href="#" className={classes.linkBtn}>
                Reset Password
              </a>
            </Button>
          </Box>
          <Box style={{textAlign: "center"}}>
           {loading?<Button
            variant="contained"
            color="primary"
            className={classes.submitBtn}
            size="large"
            type="submit"
          >
            <CircularProgress style={{color:"white"}}/>
          </Button>:<Button
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
          className={classes.submitBtn}
          size="large"
          type="submit"
        >
          Login
        </Button>}
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default AdminLogin;
