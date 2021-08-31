import React, { useState } from "react";
import axios from "axios";
import baseUrl from "../../mytutor-backend";
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  makeStyles,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#e63946 !important",
    padding: "10vw 2vw",
  },
  heading: {
    color: "#fff",
    fontSize: "6vw",
  },
  text: {
    fontSize: "2vw",
    color: "#fff",
  },
  complaintForm: {
    padding: "2vw 0",
  },
  fields: {
    margin: "1vw 0",
  },
  complaintBtn: {
    backgroundColor: "#2F1793",
    color: "#fff",
    padding: "0.7vw 1vw",
    fontSize: "16px",
    "&:hover": {
      color: "#2F1793",
    },
  },
}));

const CompaintHeader = () => {
  const classes = useStyles();

  const [complaintData, setComplaintData] = useState({
    complainer_name: "",
    complainer_type: "",
    email: "",
    country: "",
    phone_no: "",
    gender: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${baseUrl}/add-new-complaint`,
      data: complaintData,
    })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Your Complaint has been submitted successfully",
        }).then((res) => {
          setComplaintData({
            complainer_name: "",
            complainer_type: "",
            email: "",
            country: "",
            phone_no: "",
            gender: "",
            subject: "",
            message: "",
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Box className={classes.root}>
        <Typography
          variant="h1"
          className={classes.heading}
          color="white"
          align="center"
        >
          Having some issues?
        </Typography>
        <Typography
          variant="body1"
          className={classes.text}
          color="white"
          align="center"
        >
          Fill out the below form to get your query resolved.
        </Typography>
      </Box>
      <Container maxWidth="sm" className={classes.complaintForm} my={3}>
        <Typography
          variant="h2"
          className={classes}
          color="white"
          align="center"
        >
          Complaint Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth className={classes.fields}>
            <TextField
              required
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={complaintData.complainer_name}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  complainer_name: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl fullWidth variant="outlined" className={classes.fields}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select Your Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              //   onChange={handleChange}
              label="Select Your Type"
              required
              value={complaintData.complainer_type}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  complainer_type: e.target.value,
                })
              }
            >
              <MenuItem value={"Teacher"}>Teacher</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.fields}>
            <TextField
              id="outlined-basic"
              type="email"
              required
              label="Email"
              variant="outlined"
              value={complaintData.email}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  email: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl fullWidth className={classes.fields}>
            <TextField
              id="outlined-basic"
              type="text"
              required
              label="Phone No."
              variant="outlined"
              value={complaintData.phone_no}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  phone_no: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" className={classes.fields}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select Your Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              //   onChange={handleChange}
              label="Select Your Gender"
              required
              value={complaintData.gender}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  gender: e.target.value,
                })
              }
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className={classes.fields}>
            <TextField
              id="outlined-basic"
              type="text"
              required
              label="Country"
              variant="outlined"
              value={complaintData.country}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  country: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl fullWidth className={classes.fields}>
            <TextField
              id="outlined-basic"
              type="text"
              required
              label="Subject about your complaint"
              variant="outlined"
              value={complaintData.subject}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  subject: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl multiLine={true} fullWidth className={classes.fields}>
            <TextField
              id="outlined-basic"
              //   type="text"
              required
              label="Message"
              variant="outlined"
              multiline
              rows={8}
              value={complaintData.message}
              onChange={(e) =>
                setComplaintData({
                  ...complaintData,
                  message: e.target.value,
                })
              }
            />
          </FormControl>

          <Button
            fullWidth
            variant="outlined"
            className={classes.complaintBtn}
            type="submit"
            color="default"
          >
            Submit
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default CompaintHeader;
