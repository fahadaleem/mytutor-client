import React from "react"
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Grid, makeStyles, Grow, Typography, Button } from '@material-ui/core'
import Career from '../../Assests/careers.png';
import Application from '../../Assests/application.png'
import Courses from '../../Assests/courses.png'


const useStyles = makeStyles(theme => ({
    // header: {
    //     height: "400px",
    //     background: "linear-gradient(90deg,#94bbe9,#4466df)",


    // },
    // image: {
    //     //  background: "linear-gradient(90deg,#94bbe9,#4466df)",
    //     paddingTop: "40px",
    //     paddingLeft: "100px",


    // }
}))

const Features = () => {
    const classes = useStyles();


    return (

        <div style={{marginTop: "100px",}}>
        <Grid container style={{marginBottom: "40px"}}>
        
        
        <Grid item lg={12}>    
            <Typography variant="h3" color="inherit" style={{textAlign: "center", color: "red"}}> OUR FEATURES </Typography>
        </Grid>
        

        </Grid>

        <Grid container style={{marginLeft:"20px",paddingLeft:"20px"}}>
          
        
        
        <Grid item lg={6} style={{marginTop:"50px"}}>    
            <Typography variant="h4" color="initial" style={{color:"#005555"}}> PROVIDING CAREERS AND EARNING OPPORTUNITY </Typography>
            <Typography variant="h5" color="initial" >Enroll in our application as a teacher and help students by providing them quality education, and an easy going earning opportunity for you.</Typography>
        </Grid>

        <Grid item lg={6}>    
           <img src={Career} alt="" style={{ width: "600px", height: "370px" }} />

        </Grid>

        

        </Grid>

        <Grid container style={{marginLeft:"20px",paddingLeft:"20px",marginTop:"100px",}}>
          
        <Grid item lg={6}>    
           <img src={Application} alt="" style={{ width: "600px", height: "370px" }} />

        </Grid>
        
        <Grid item lg={6} style={{marginTop:"100px"}}>    
            <Typography variant="h4" color="initial" style={{color:"#005555"}}> SIMPLE APPLICATION PROCESS </Typography>
            <Typography variant="h5" color="initial" style={{ marginRight: "140px" }}> Easy going process, fill out the form in our applicant section, and be a part of MY TUTOR as a teacher!</Typography>
        </Grid>

        

        

        </Grid>

        <Grid container style={{marginLeft:"20px",paddingLeft:"20px",marginTop:"100px"}}>
          
        
        
        <Grid item lg={6} style={{marginTop:"100px"}}>    
            <Typography variant="h4" color="initial" style={{color:"#005555"}}> QUALITY COURSES </Typography>
            <Typography variant="h5" color="initial" style={{ marginRight: "140px" }} > Providing highly skilled and quality courses which are in demand and in need of modern world which will help you polishing your hidden skills. </Typography>
        </Grid>

        <Grid item lg={6}>    
           <img src={Courses} alt="" style={{ width: "600px", height: "370px" }} />

        </Grid>

        

        </Grid>

        </div>
    )
}


export default Features