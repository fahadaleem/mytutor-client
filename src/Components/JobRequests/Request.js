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

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#EEEEEE",

    padding: "15px 30px",
    margin: "15px 0",
    borderRadius: "5px",
    border:"1px solid #29524A",
    [theme.breakpoints.down('sm')]:{
        padding: "35px 30px",

    }
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

  const { image, name, appliedDate, designation, country } = props;

  const getNumberOfDays = (date) => {
    const differenceBetweenDates =
      new Date().getTime() - new Date(date).getTime();

    let days = Math.floor(differenceBetweenDates / (1000 * 3600 * 24));

    if (days > 365) {
      const year = Math.floor(days / 365);
      return year > 1 ? `${year} years` : `${year} year`;
    } else if (days > 30) {
      const month = Math.floor(days / 30);
      return month > 1 ? `${month} Months` : `${month} Month`;
    }

    return days > 1 ? `${days} days` : `${days} day`;
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3} alignItems="center">
        <Grid item className={classes.avatarContainer} lg={1} xs={12}>
          <img src={image} alt="avatar" className={classes.userImage} />
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
            {designation}
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
