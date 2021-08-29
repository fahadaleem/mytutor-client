import React from "react"
import Navbar from "../Components/Navbar/MainNav"
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Grid, makeStyles, Grow, Typography, Button } from '@material-ui/core'
import Image from "../Assests/header1.jpg"
import Cards from "../Components/LandingPage/Cards"

const useStyles = makeStyles(theme => ({
    header: {
        height: "400px",
        background: "linear-gradient(90deg,#94bbe9,#4466df)",


    },
    image: {
        //  background: "linear-gradient(90deg,#94bbe9,#4466df)",
        paddingTop: "40px",
        paddingLeft: "100px",


    }
}))

const LandingPage = () => {
    const classes = useStyles();


    return (

        <div>
            <Navbar pageName="home" />
            <div className={classes.header}>

                <Grid container>


                    <Grid item lg={6}>  <Typography variant="h4" color="initial" style={{ paddingTop: "40px", paddingLeft: "30px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita esse adipisci culpa magnam tempora maxime dolor molestias
                        alias minus maiores.

                    </Typography>
                        <Button variant="contained" color="primary" style={{ marginTop: "80px", marginLeft: "30px", width: "150px", height: "50px" }}>
                            Get Started
                        </Button>
                        
                    </Grid>



                    <div className={classes.image}>
                        <Grid item lg={6}>  <img src={Image} alt="" style={{ width: "500px", height: "320px" }} /> </Grid>

                    </div>

                </Grid>

            </div>
            {/* <h1>landing here</h1> */}

            <Cards />




        </div>
    )
}


export default LandingPage