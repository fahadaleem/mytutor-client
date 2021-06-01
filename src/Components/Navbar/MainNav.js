import React from "react"
import {AppBar, Toolbar, Typography, makeStyles, Button, Grid, Box, Hidden} from '@material-ui/core'
import {Link} from "react-router-dom"


const useStyles = makeStyles(theme=>({
    appBar:{
        backgroundColor:"#1A2238",
        padding:"25px 15px"
    },
    title:{
        color:"#9DAAF2"
    },
    tagLine:{
        color:"#FF6A3D"
    },
    menu:{
        display:"flex",
        justifyContent:"space-between",
        '& a':{
            color:"#9DAAF2",
            textDecoration:"none",
            '& h6':{
            letterSpacing:"1px !important"

            }
        }
    },
    btn:{
        margin:"0 10px"
    },
    loginBtn:{
        backgroundColor:"#FF6A3D",
        color:"white",
        letterSpacing:"1px !important"

    },
    signupBtn:{
        backgroundColor:"#9DAAF2",
        letterSpacing:"1px !important"

    }

}))

const Navbar = ()=>{

    const classes = useStyles()

    return (
        <AppBar position="relative" className={classes.appBar} elevation={0}>
      <Toolbar>
        <Grid container spacing={3} justify="space-between" alignItems="center">
            <Grid item lg={3} xs={4}>
                <Typography variant="h6" color="initial" className={classes.title}>
                    My Tutor
                </Typography>
                <Hidden smDown>
                <Typography variant="p" color="initial" className={classes.tagLine}>Your Online Teaching and <br />Learning Solution</Typography>
                </Hidden>
            </Grid> 
            <Hidden smDown>
            <Grid item lg={6}>
                <Box className={classes.menu}>
                <Link>
                    <Typography variant="h6" color="initial">Home</Typography>
                </Link>
                <Link>
                    <Typography variant="h6" color="initial">About My Tutor</Typography>
                </Link>
                <Link>
                    <Typography variant="h6" color="initial">Testimonials</Typography>
                </Link>
                <Link>
                    <Typography variant="h6" color="initial">Careers</Typography>
                </Link>
                <Link>
                    <Typography variant="h6" color="initial">Contact Us</Typography>
                </Link>
                    </Box>
            </Grid>
            </Hidden>
            <Grid item lg={3} style={{textAlign:"right"}}>
                <Button variant="contained" color="default" className={`${classes.btn} ${classes.loginBtn}`}>
                  Login
                </Button>
                <Button variant="contained" color="default" className={`${classes.btn} ${classes.signupBtn}`}>
                  Sign Up
                </Button>
            </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    )
}

export default Navbar