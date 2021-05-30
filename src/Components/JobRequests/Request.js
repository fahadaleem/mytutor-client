import React from "react"
import {Container, makeStyles, Grid, Typography} from '@material-ui/core'
import { Height } from "@material-ui/icons"
import {Link} from "react-router-dom"


const useStyles = makeStyles(theme=>({
    container:{
        backgroundColor:"#eceff4",
        padding:"35px 30px",
        margin:"15px 0",
        borderRadius:"5px",
        boxShadow: '0 8px 10px 0 rgba(0,0,0,0.2)'
    },
    avatarContainer:{
        borderRadius:"50%",
        width:"85px",
        height:"85px",
        textAlign:"center",
        padding:"0 !important",
        [theme.breakpoints.down('sm')]:{
            margin:"0 auto",
            width:"115px",
        height:"115px",

        }
    },
    userImage:{
        width:"85px",
        height:"85px",
        borderRadius:"50%",
        [theme.breakpoints.down('sm')]:{
            width:"115px",
            height:"115px",
        }
    },
    rightCol:{
        flex:1,
        textAlign:"right",
        [theme.breakpoints.down('sm')]:{
        textAlign:"left",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
        },
        color:"#6A7481"
    },
  
    userBasicInfo:{
        color:"#6A7481",
        [theme.breakpoints.down('sm')]:{
            textAlign:"center"
        }
    },
    otherdetails:{
        color:"#6A7481"
    },
    name:{
        color:"black !important",
        fontWeight:"bold"
    }

}))


export default function JobRequest () {
    const jobRequests = [
        {
            id:1,
            name:"Muhammad Fahad Aleem",
            country:"pakistan",
            appliedDate:"02-08-2020",
            designation:"React JS Developer",
            imageUrl:"https://avatars.githubusercontent.com/u/55811140?v=4"
        }
    ]

    const classes = useStyles()



    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3} alignItems="center">
              <Grid item className={classes.avatarContainer}>
                  <img src={'https://avatars.githubusercontent.com/u/55811140?v=4'} alt="avatar" className={classes.userImage} />
              </Grid>
              <Grid item className={classes.userInfo}>
                  <Typography variant="h4" color="initial" className={`${classes.userBasicInfo} ${classes.name}`}>Muhammad Fahad Aleem</Typography>
                  <Typography variant="h5" color="initial" className={classes.userBasicInfo}>React JS Developer</Typography>
                  <Typography variant="h6" color="initial" className={classes.userBasicInfo}>Pakistan</Typography>
              </Grid>
              <Grid item className={classes.rightCol}>
            <Typography variant="h6" color="initial">2 days ago</Typography>
              <Typography variant="h6" color="initial">View Details</Typography>

              </Grid>
            </Grid>
        </Container>
    )

}