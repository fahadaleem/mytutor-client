import React from "react"
import {Typography, makeStyles, Box, Button} from '@material-ui/core'
import maleAvatar from "../../../Assests/male-avatar2.png"



const useStyles = makeStyles(theme=>({
    root:{
        padding:"25px 10px",
        // textAlign:"center",
        [theme.breakpoints.down('sm')]:{
            textAlign:"center"
        }
    },
    avatar:{
        width:"150px"
    },
   
    info:{
        margin:"15px 0 5px 0",
      textTransform:"uppercase",
      fontSize:"1.75rem",
      [theme.breakpoints.down('xs')]:{
          fontSize:"1.5rem"
      }
    }
}))


const ApplicantMetaInformation = ()=>{
    
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img src={maleAvatar} className={classes.avatar} />
            <Box className={classes.metaInformation}>
                <Typography variant="h4" color="initial" className={classes.info}>From:</Typography>
                <Typography variant="body1" color="initial">Pakistan</Typography>
                <Typography variant="h4" color="initial" className={classes.info}>Contact:</Typography>
                <Typography variant="body1" color="initial">+923162036048</Typography>
                <Typography variant="h4" color="initial" className={classes.info}>Email:</Typography>
                <Typography variant="body1" color="initial">faleem396@gmail.com</Typography>
                <Typography variant="h4" color="initial" className={classes.info}>Resume:</Typography>
                <Button variant="outlined" color="default">
                  View Resume
                </Button>
                <Typography variant="h4" color="initial" className={classes.info}>Applied On: </Typography>
                <Typography variant="body1" color="initial">02-08-2020</Typography>

            </Box>
        </div>
    )
}

export default ApplicantMetaInformation