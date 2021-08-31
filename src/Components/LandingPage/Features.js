import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid, makeStyles, Grow, Typography, Button } from "@material-ui/core";
import Career from "../../Assests/job.png";
import Application from "../../Assests/jobapplication.png";
import Courses from "../../Assests/courses.png";
import Complaint from "../../Assests/complaintmanagment.png"
import Email from "../../Assests/emailalert.png"
const useStyles = makeStyles((theme) => ({
  // header: {
  //     height: "400px",
  //     background: "linear-gradient(90deg,#94bbe9,#4466df)",
  // },
  // image: {
  //     //  background: "linear-gradient(90deg,#94bbe9,#4466df)",
  //     paddingTop: "40px",
  //     paddingLeft: "100px",
  // }
}));

const Features = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "100px" }}>
      <Grid container style={{ backgroundColor:"#2F1793", paddingTop:"50px" }}>
        <Grid item lg={12}>
          <Typography
            variant="h3"
            color="inherit"
            style={{ textAlign: "center", color: "red" }}
          >
            {" "}
            OUR FEATURES{" "}
          </Typography>
        </Grid>
      </Grid>

      <Grid container style={{backgroundColor:"#2F1793", padding:"80px" }} alignItems="center">
        <Grid item lg={6} style={{paddingRight:"40px"}}>
          <Typography variant="h4" color="initial" style={{color:"#fff"}}>
            {" "}
            PROVIDING CAREERS AND EARNING OPPORTUNITY{" "}
          </Typography>
          <Typography variant="h5" color="initial" style={{color:"#fff"}}>
            Enroll in our application as a teacher and help students by
            providing them quality education, and an easy going earning
            opportunity for you.
          </Typography>
        </Grid>

        <Grid item lg={6}>
          <img
            src={Career}
            alt=""
            style={{ width: "100%",boxShadow: '0 4px 8px 0 rgba(255,255,255,0.2)' }}
            
          />
        </Grid>
      </Grid>

      <Grid
        container
        style={{ marginLeft: "20px", paddingLeft: "20px", marginTop: "100px" }}
        alignItems="center"
      >
        <Grid item lg={6}>
          <img
            src={Application}
            alt=""
            style={{ width: "100%", boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius:"5px" }}
          />
        </Grid>

        <Grid item lg={6} >
          <Typography variant="h4" color="initial" style={{ color: "#2F1793",padding:"0 40px" }}>
            {" "}
            FILTER BEST CANDIDATES FOR TEACHING{" "}
          </Typography>
          <Typography
            variant="h5"
            color="initial"
            style={{ marginTop: "20px", padding:"0px 40px " }}
          >
            {" "}
            Filter the best candidates for teaching and help students by providing  them quality education, and an easy going earning opportunity for you.
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{backgroundColor:"#2F1793", padding:"80px", marginTop:"70px" }} alignItems="center">
        <Grid item lg={6} style={{paddingRight:"40px"}}>
          <Typography variant="h4" color="initial" style={{color:"#fff"}}>
            {" "}
            COMPLAINT MANAGMENT{" "}
          </Typography>
          <Typography variant="h5" color="initial" style={{color:"#fff",padding:"20px 0"}} >
            A full flegded complaint management system to make Mytutor platform query free and easy. So, everyone can use it easily and get all the benefits from this platform.
          </Typography>
        </Grid>

        <Grid item lg={6}>
          <img
            src={Complaint}
            alt=""
            style={{ width: "100%",boxShadow: '0 4px 8px 0 rgba(255,255,255,0.2)' }}
            
          />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ padding: "20px 40px", marginTop: "100px" }}
        alignItems="center"
      >
        <Grid item lg={6} style={{ paddingLeft:"40px", paddingRight:"40px" }}>
          <Typography variant="h4" color="initial" style={{ color: "#005555" }}>
            {" "}
            COURSE CATALOG{" "}
          </Typography>
          <Typography
            variant="h5"
            color="initial"
          >
            {" "}
            Providing highly skilled and quality courses which are in demand and
            in need of modern world which will help you polishing your hidden
            skills.{" "}
          </Typography>
        </Grid>

        <Grid item lg={6}>
          <img
            src={Courses}
            alt=""
            style={{ width: "100%",boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius:"5px" }}
          />
        </Grid>
        
      </Grid>
      <Grid container style={{backgroundColor:"#2F1793", padding:"80px", marginTop:"70px" }} alignItems="center">
        <Grid item lg={6} style={{paddingRight:"40px"}}>
          <Typography variant="h4" color="initial" style={{color:"#fff"}}>
            {" "}
            EMAIL ALERTS{" "}
          </Typography>
          <Typography variant="h5" color="initial" style={{color:"#fff",padding:"20px 0"}} >
            Email Alert integrations to help you to get to know about everything whenever any teacher submitted application, teacher hired, new admin role assigned.
          </Typography>
        </Grid>

        <Grid item lg={6}>
          <img
            src={Email}
            alt=""
            style={{ width: "100%",boxShadow: '0 4px 8px 0 rgba(255,255,255,0.2)' }}
            
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
