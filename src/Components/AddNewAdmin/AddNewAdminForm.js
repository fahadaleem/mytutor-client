import React, { useContext, useState } from "react";
import {
  FormControl,
  TextField,
  Typography,
  makeStyles,
  Box,
  Grid,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { AuthContext } from "../../Contexts/AdminAuthContexts";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "15px 20px",
  },
  label: {
    margin: "5px 0",
  },
  generatepasswordBtn: {
    backgroundColor: "#29524A",
    position: "relative",
    top: "20px",
    color: "white",
    padding: "15px 20px",
    "&:hover": {
      backgroundColor: "#29524aa6",
    },
  },
  submitBtn: {
    backgroundColor: "#2C2E43 !important",
    color: "#EEEEEE",
    padding: "15px 35px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "20px 0",
    },
  },
}));

const AddNewAdminForm = () => {
  const classes = useStyles();
  const { handleAddNewAdmin } = useContext(AuthContext);
  const [newAdminData, setNewAdminData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleGeneratePassword = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*<>?-+";
    const randomNo = Math.floor(Math.random() * 20 + 8);
    let password = "";
    for (let i = 0; i < randomNo; i++) {
      const rand = Math.floor(Math.random() * characters.length);
      password += characters[rand];
    }

    setNewAdminData({
      ...newAdminData,
      password,
    });
  };

  const handleValidate = (e) => {
    e.preventDefault();
    if (newAdminData.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password should be 6 or more characters long!",
      });
    } else if (
      newAdminData.name !== "" &&
      newAdminData.email !== "" &&
      newAdminData.password !== "" &&
      newAdminData.role !== "" &&
      newAdminData.password.length >= 6
    ) {
      handleAddNewAdmin(newAdminData).then((isError) => {
        if (!isError) {
          setNewAdminData({
            name: "",
            email: "",
            password: "",
            role: "",
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Fill out all the fields",
      });
    }
  };
  return (
    <form className={classes.form} onSubmit={handleValidate}>
      <Typography variant="h4" color="initial" style={{ margin: "0 0 15px 0" }}>
        Add New Account
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography variant="h6" color="initial" className={classes.label}>
            Enter Name:
          </Typography>
          <TextField
            id="name"
            fullWidth
            variant="outlined"
            placeholder="Type Name"
            value={newAdminData.name}
            onChange={(e) => {
              setNewAdminData({
                ...newAdminData,
                name: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <Typography variant="h6" color="initial" className={classes.label}>
            Select Role:
          </Typography>
          <Select
            id="role"
            variant="outlined"
            placeholder="Select Role"
            value={newAdminData.role}
            displayEmpty
            fullWidth
            onChange={(e) => {
              setNewAdminData({
                ...newAdminData,
                role: e.target.value,
              });
            }}
          >
            <MenuItem value="" disabled>
              Select Role
            </MenuItem>
            <MenuItem value="Administrator">Administrator</MenuItem>
            <MenuItem value="Moderator">Moderator</MenuItem>
            <MenuItem value="Viewer">Viewer</MenuItem>
          </Select>
        </Grid>
        <Grid item lg={5} md={5} sm={6} xs={12}>
          <Typography variant="h6" color="initial" className={classes.label}>
            Enter Email:
          </Typography>
          <TextField
            id="email"
            fullWidth
            variant="outlined"
            placeholder="Type Email"
            value={newAdminData.email}
            onChange={(e) => {
              setNewAdminData({
                ...newAdminData,
                email: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography variant="h6" color="initial" className={classes.label}>
            Enter Password:
          </Typography>
          <TextField
            id="email"
            type="password"
            fullWidth
            value={newAdminData.password}
            variant="outlined"
            placeholder="Type Password"
            onChange={(e) => {
              setNewAdminData({
                ...newAdminData,
                password: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Button
            variant="contained"
            color="default"
            fullWidth
            className={classes.generatepasswordBtn}
            onClick={handleGeneratePassword}
          >
            Generate Password
          </Button>
        </Grid>
      </Grid>
      <Box my={2} align="right">
        <Button
          variant="contained"
          className={classes.submitBtn}
          type="submit"
          size="large"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default AddNewAdminForm;
