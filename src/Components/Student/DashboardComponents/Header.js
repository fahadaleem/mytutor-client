import React from "react"
import {Typography, Paper,makeStyles, Hidden} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    header:{
        background:"linear-gradient(90deg,rgba(0,0,0,0.3),rgba(0,0,0,0.8)), url('/student-header.jpg')",
        height:"40vw;",
        backgroundPosition:"center",
        backgroundSize:"cover",
        padding:"10vw 2vw",
        [theme.breakpoints.down("sm")]:{
            height:"80vw"
        }
    },
    headerBox:{
        backgroundColor:"#fff",
        width:"50vw",
        height:"20vw",
        padding:"3vw 2vw",
        [theme.breakpoints.down("sm")]:{
            height:"50vw",
            width:"80vw"
        }
    }
}))

const Header = ()=>{
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <Hidden smDown>
                <Paper className={classes.headerBox}>
                <Typography variant="h2" color="initial">If you can dream it,<br /> you can do it.</Typography>
                <Typography variant="h5" color="initial" style={{margin:"10px 0"}}>Skills for your present (and your future). Get started with us.</Typography>
                </Paper>
                </Hidden>
                <Hidden smUp>
                <div>
                <Typography variant="h2" color="initial" style={{fontSize:"10vw", color:"#fff"}}>If you can dream it,<br /> you can do it.</Typography>
                <Typography variant="h5" color="initial" style={{margin:"10px 0",fontSize:"8vw",color:"#fff"}}>Skills for your present (and your future). Get started with us.</Typography>
                </div>
                </Hidden>
        </div>
    )
}

export default Header