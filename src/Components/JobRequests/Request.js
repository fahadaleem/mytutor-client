import React from "react";
import {
  Container,
  makeStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { Height } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { JobRequestContext } from "../../Contexts/JobRequestContext";
import maleAvatar from "../../Assests/male-avatar2.png"
import femaleAvatar from "../../Assests/female-avatar.png"

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#EEEEEE",

    padding: "15px 30px",
    margin: "15px 0",
    borderRadius: "5px",
    border: "1px solid #29524A",
    [theme.breakpoints.down("sm")]: {
      padding: "35px 30px",
    },
  },
  avatarContainer: {
    borderRadius: "50%",
    width: "85px",
    height: "85px",
    textAlign: "center",
    padding: "0 !important",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "115px",
      height: "115px",
    },
  },
  userImage: {
    width: "85px",
    height: "85px",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "115px",
      height: "115px",
    },
  },
  rightCol: {
    flex: 1,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    color: "#6A7481",
  },

  userBasicInfo: {
    color: "#6A7481",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  otherdetails: {
    color: "#6A7481",
  },
  name: {
    color: "black !important",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
  },
  viewDetailsBtn: {
    marginTop: "10px",
    fontSize: "16px",
  },
}));

export default function JobRequest(props) {
  const classes = useStyles();

  const { gender, name, appliedDate, teachingExperience, country } = props;

  const getNumberOfDays = (date) => {
    if (typeof date !== 'object') {
      date = new Date(date);
    }
  
    var seconds = Math.floor((new Date() - date) / 1000);
    var intervalType;
  
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
      intervalType = 'year';
    } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
          intervalType = 'day';
        } else {
          interval = Math.floor(seconds / 3600);
          if (interval >= 1) {
            intervalType = "hour";
          } else {
            interval = Math.floor(seconds / 60);
            if (interval >= 1) {
              intervalType = "minute";
            } else {
              interval = seconds;
              intervalType = "second";
            }
          }
        }
      }
    }
  
    if (interval > 1 || interval === 0) {
      intervalType += 's';
    }
  
    return interval + ' ' + intervalType;
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3} alignItems="center">
        <Grid item className={classes.avatarContainer} lg={1} xs={12}>
          {props ? (
            <img src={gender==="male"?maleAvatar:femaleAvatar} alt="avatar" className={classes.userImage} />
          ) : (
            <Skeleton />
          )}
        </Grid>
        <Grid item className={classes.userInfo} lg={8} xs={12}>
          <Typography
            variant="h5"
            color="initial"
            className={`${classes.userBasicInfo} ${classes.name}`}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className={classes.userBasicInfo}
          >
            {teachingExperience} Experienced
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className={classes.userBasicInfo}
          >
            {country}
          </Typography>
        </Grid>
        <Grid item className={classes.rightCol} xs={12}>
          <Typography variant="h6" color="initial">
            {getNumberOfDays(appliedDate)} ago
          </Typography>
          <Link to="/admin/jobs/applicant/1" className={classes.link}>
            <Button color="primary" className={classes.viewDetailsBtn}>
              View Details
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
