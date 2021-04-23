import React, {useState} from "react"
import {Container, Typography, makeStyles, Paper, TextField, Box, Button} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import {AuthContext} from "../Contexts/AdminAuthContexts"
const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:"#7BA0EA",
        height:"100%",
        position:"absolute",
        width:"100%"
    },
    form:{
        padding:"25px 35px",
        marginTop:"6rem"
    },
    lockIcon:{
        fontSize:"6rem"
    },
    forgotPasswordTagline:{
        margin:"10px 0", 
    },
    emailTextField:{
       '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
           border:"2px solid #7BA0EA !important", 
           color:"red"
       }
    },
    submitBtn:{
        backgroundColor:"#7BA0EA", 
        fontSize:"20px", 
        fontWeight:"bold", 
        color:"white"
    }
}))


const ResetPassword = ()=>{

    const [email, setEmail] = useState("")
    const {handleResetPassword} = React.useContext(AuthContext)

    const handleSetEmail = (e)=>{
        setEmail(e.target.value) 
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Container maxWidth="xs" className={classes.form} component={Paper}>
                <Box style={{textAlign:"center"}} my={1}>
                <LockIcon className={classes.lockIcon} />
                </Box>
                <Typography variant="h4" color="initial" align="center" className={classes.forgotPasswordTitle}>Forgot Password</Typography>
                <Typography variant="p" color="initial" display="block" className={classes.forgotPasswordTagline}>Enter the email associated with your account, we'll send you a link to reset your password</Typography>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    handleResetPassword(email);
                }}>
                <Box my={2}>
                <TextField
                  id="email"
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  className={classes.emailTextField}
                  value={email}
                  onChange={handleSetEmail}
                />
                </Box>
                <Box my={2}>
                <Button variant="contained" fullWidth type="submit" className={classes.submitBtn}>
                  Submit
                </Button>
                </Box>
                </form>
        </Container>
        </div>
    )
}


export default ResetPassword