import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Avatar,
  makeStyles,
  Button,
} from "@material-ui/core";
import axios from "axios";
import baseUrl from "../mytutor-backend";
import Swal from "sweetalert2"

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#29524A",
    height: "50px",
    width: "50px",
    marginRight: "10px",
  },
  complaintDiv: {
    margin: "2vw 0",
    border: "2px solid #e6e6e6",
    padding: "2vw",
    borderRadius: "0.7vw",
  },
  buttons: {
    padding: "0.6vw 3vw",
    fontSize: "16px",
    margin: "5px",
    backgroundColor: "#2A2A2A",
    color: "#fff",
  },
}));

const Messages = () => {
  const classes = useStyles();
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
    document.title = "Messages";
    axios
      .get(`${baseUrl}/get-all-complaints`)
      .then((response) => {
        setComplaints(response.data.applicants);
      })
      .catch((error) => {
        alert("Errror");
      });
  }, []);


  const handleDeleteComplaint = (id)=>{
    axios.get(`${baseUrl}/reject-complaint?complaint_id=${id}`)
    .then((response)=>{
      Swal.fire({
        title:"Complaint Deleted",
        text:"Complaint Deleted Successfully",
        icon:"success",
      }).then(res=>{
        axios
        .get(`${baseUrl}/get-all-complaints`)
        .then((response) => {
          setComplaints(response.data.applicants);
        })
        .catch((error) => {
          alert("Errror");
        });
      })
      
    })
    .catch((error)=>{
      alert("Error");
    })
  }

  const handleResolvedComplaint =(id)=>{
    axios.get(`${baseUrl}/reject-complaint?complaint_id=${id}`)
    .then((response)=>{
      Swal.fire({
        title:"Complaint Deleted",
        text:"Complaint Deleted Successfully",
        icon:"success",
      }).then(res=>{
        axios
        .get(`${baseUrl}/get-all-complaints`)
        .then((response) => {
          setComplaints(response.data.applicants);
        })
        .catch((error) => {
          alert("Errror");
        });
      })
      
    })
    .catch((error)=>{
      alert("Error");
    })
  }
  
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" color="initial" align="center">
        Users Complaints
      </Typography>
      {complaints.length > 0 &&
        complaints.map((complaint, index) => {
          return (
            <Box className={classes.complaintDiv}>
              <Grid container spacing={1} justifyContent="space-between">
                <Grid item lg={8}>
                  <Box display="flex" alignItems="center">
                    <Avatar className={classes.avatar}>
                      {complaint.complainer_name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" color="initial">
                        {complaint.complainer_type}
                      </Typography>
                      <Typography variant="h5" color="initial">
                        {complaint.complainer_name}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} style={{ textAlign: "right" }}>
                  <Typography variant="h6" color="initial">
                    {complaint.phone_no}
                  </Typography>
                  <Typography variant="h6" color="initial">
                    {complaint.email}
                  </Typography>
                </Grid>
                <Grid item lg={12}>
                  <Typography variant="h6" color="initial">
                    Subject: {complaint.subject}
                  </Typography>
                  <Typography variant="h6" color="initial">
                    Message: {complaint.message}
                  </Typography>
                </Grid>
                <Grid item lg={12} style={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    color="default"
                    size="small"
                    onClick={()=>handleResolvedComplaint(complaint.id)}
                    className={`${classes.buttons} ${classes.resolvedBtn}`}
                  >
                    Resolved
                  </Button>
                  <Button
                    variant="outlined"
                    color="default"
                    size="small"
                    onClick={()=>handleDeleteComplaint(complaint.id)}
                    className={`${classes.buttons} ${classes.rejectBtn}`}
                  >
                    Reject
                  </Button>
                </Grid>
              </Grid>
            </Box>
          );
        })}
    </Container>
  );
};

export default Messages;
