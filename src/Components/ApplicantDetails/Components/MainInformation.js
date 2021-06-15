import React from "react";
import { Typography, makeStyles, Box, Divider, Button, ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 20px",
    [theme.breakpoints.down('sm')]:{
        padding:"0"
    }
  },
  avatar: {
    width: "150px",
  },
  divider:{
      width:"35%",
      backgroundColor:"#29524A",
      height:"4px",
      [theme.breakpoints.down('xs')]:{
          display:"none"
      }
  },
  info:{
      margin:"15px 0 5px 0",
      textTransform:"uppercase",
      fontSize:"1.75rem",
      [theme.breakpoints.down('xs')]:{
          fontSize:"1.5rem"
      }
  },
  actionBtns:{
      margin:"25px 15px 25px 0",
      fontSize:"18px",
      padding:"15px 35px",
      backgroundColor:"#2A2A2A",
      [theme.breakpoints.down('sm')]:{
          width:"100%",
          margin:"10px 0",
          fontSize:"16px"
      }
  },
  hireBtn:{
      backgroundColor:"#6200ee"
  },
  name:{
      fontSize:"2.75rem",
      [theme.breakpoints.down('xs')]:{
        fontSize:"2rem",
        textAlign:"center"
      }
  }
}));

const ApplicantMainInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" color="initial" className={`${classes.info} ${classes.name}`}>
        Muhammad Fahad Aleem
        <Divider className={classes.divider} />
      </Typography>
      
      <Typography variant="h4" color="initial" className={classes.info}>
        About:
      </Typography>
      <Typography variant="body1" color="initial">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like).
      </Typography>
      <Typography variant="h4" color="initial" className={classes.info}>
        Experience:
      </Typography>
      <Typography variant="body1" color="initial">
        - 2 Years Experience
      </Typography>

      <Typography variant="h4" color="initial" className={classes.info}>
        Willing to teach courses:
      </Typography>
      <Typography variant="body1" color="initial">
        1- Physics
      </Typography>
      <Typography variant="body1" color="initial">
        2- Maths
      </Typography>
      <Typography variant="h4" color="initial" className={classes.info}>
        Expected Salary:
      </Typography>
      <Typography variant="body1" color="initial">
        - 200 USD/Month
      </Typography>
      <Button variant="contained" color="primary" className={`${classes.actionBtns} ${classes.hireBtn}`}>
      Hire Applicant
      </Button>
      <Button variant="contained" color="primary" className={classes.actionBtns}>
      Reject Application
      </Button>
     
    </div>
  );
};

export default ApplicantMainInformation;
