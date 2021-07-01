import React from "react";
import TextEditor from "./TextEditor";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem, Grid,
  FormLabel,
  makeStyles, FormHelperText, TextField
} from "@material-ui/core";
import courseCategories from "../../categories.json"


const useStyles = makeStyles(theme=>({
    formLabel:{
        margin:"10px 0 5px 0"
    }
}))



const AddNewCourses = () => {


    const classes = useStyles()

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" color="initial">
        Create A New Course:
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Choose Category:</Typography>
          <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category"
          >
              {Object.keys(courseCategories).map((elem)=>{
                  return (
                      <MenuItem>{elem}</MenuItem>
                  )
              })}
          </Select>
        </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Course Code:</Typography>
              <FormControl fullWidth>
                <TextField
                  id="course-code"
                  label="Course Code"
                  variant="outlined"
                />                
              </FormControl>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Course Name:</Typography>
              <FormControl fullWidth>
                <TextField
                  id="course-code"
                  label="Course Name"
                  variant="outlined"
                />                
              </FormControl>
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Course Title:</Typography>
              <FormControl fullWidth>
                <TextField
                  id="course-code"
                  label="Course Title"
                  variant="outlined"
                />                
              </FormControl>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Course Description:</Typography>
              <FormControl fullWidth>
                <TextField
                  id="course-code"
                  label="Course Title"
                  variant="outlined"
                  multiline={true}
                  rows={7}
                />                
              </FormControl>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Course Outline:</Typography>
              <TextEditor />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Course Price:</Typography>
            <FormControl fullWidth>
                <TextField
                  id="course-code"
                  label="Course Price"
                  variant="outlined"
                  type="number"
                />                
              </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography variant="body1" color="initial" className={classes.formLabel}>Course Duration:</Typography>
            <FormControl fullWidth>
                <TextField
                  id="course-code"
                  label="Course Price"
                  variant="outlined"
                />                
              </FormControl>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddNewCourses;
