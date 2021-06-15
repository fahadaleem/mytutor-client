import React from "react";
import { Typography, makeStyles, Box, Button } from "@material-ui/core";
import maleAvatar from "../../../Assests/male-avatar2.png";
import femaleAvatar from "../../../Assests/female-avatar.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding:"25px 10px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  avatar: {
    width: "150px",
  },

  info: {
    margin: "15px 0 5px 0",
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: "1.75rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      textAlign: "center",
    },
  },
  ap_info: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const ApplicantMetaInformation = (props) => {
  const { gender, email, phone, appliedDate, country, resume } = props;

  const classes = useStyles();
  console.log(appliedDate);

  return (
    <div className={classes.root}>
      <img
        src={gender === "male" ? maleAvatar : femaleAvatar}
        className={classes.avatar}
      />
      <Typography variant="h4" color="initial" className={classes.info}>
        From:
      </Typography>
      <Typography variant="body1" color="initial" className={classes.ap_info}>
        {country}
      </Typography>
      <Typography variant="h4" color="initial" className={classes.info}>
        Contact:
      </Typography>
      <Typography variant="body1" color="initial" className={classes.ap_info}>
        +{phone}
      </Typography>
      <Typography variant="h4" color="initial" className={classes.info}>
        Email:
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        style={{ overflowWrap: "anywhere" }}
        className={classes.ap_info}
      >
        {email}
      </Typography>
      <Typography variant="h4" color="initial" className={classes.info}>
        Resume:
      </Typography>
      <Box className={classes.ap_info}>
        <a href={resume} target="_blank">
        <Button variant="outlined" color="default">
          View Resume
        </Button>
        </a>
      </Box>
      <Typography variant="h4" color="initial" className={classes.info}>
        Applied On:{" "}
      </Typography>
      <Typography variant="body1" color="initial" className={classes.ap_info}>
        {appliedDate.slice(0,11)}
      </Typography>
    </div>
  );
};

export default ApplicantMetaInformation;
