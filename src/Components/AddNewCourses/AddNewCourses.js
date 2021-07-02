import React, { useState } from "react";
import TextEditor from "./TextEditor/TextEditor";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  FormLabel,
  Box,
  makeStyles,
  FormHelperText,
  TextField,
  OutlinedInput,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import courseCategories from "../../categories.json";

const useStyles = makeStyles((theme) => ({
  formLabel: {
    margin: "10px 0 5px 0",
    fontSize: "18px",
  },
  btns: {
    textAlign: "right",
    marginRight: "10px",
  },
  publishedBtn: {
    backgroundColor: "#29524A",
    fontSize: "18px",
    padding: "15px 25px",
    margin: "5px 5px 0 0",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#2A2A2A",
    },
  },
  saveToDraftBtn: {
    backgroundColor: "#2A2A2A",
    fontSize: "18px",
    padding: "15px 25px",
    margin: "5px 5px 0 0",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#6200ee",
    },
  },
  textFields: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#29524A !important",
    },
  },
}));

const AddNewCourses = () => {
  const classes = useStyles();
  const [courseDetails, setCourseDetails] = useState({
    category: "",
    code: "",
    name: "",
    title: "",
    description: "",
    courseOutline: "",
    price: "",
    visibility: "",
    duration: "",
  });

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" color="initial">
        Create A New Course:
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Choose Category:
            </Typography>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.textFields}
            >
              {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label=""
                labelWidth={0}
                notched={false}
                value={courseDetails.category}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    category: e.target.value,
                  })
                }
              >
                {Object.keys(courseCategories).map((elem) => {
                  return <MenuItem value={elem}>{elem}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Code:
            </Typography>
            <FormControl fullWidth className={classes.textFields}>
              <OutlinedInput
                id="course-code"
                label="Course Code"
                variant="outlined"
                notched={false}
                labelWidth={0}
                value={courseDetails.code}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    code: e.target.value.toUpperCase(),
                  })
                }
              />
              <FormHelperText>E.g PY-03, JS-01</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Name:
            </Typography>
            <FormControl fullWidth className={classes.textFields}>
              <OutlinedInput
                id="course-code"
                label="Course Name"
                variant="outlined"
                notched={false}
                labelWidth={0}
                value={courseDetails.name}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    name: e.target.value,
                  })
                }
              />
            </FormControl>
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Title:
            </Typography>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.textFields}
            >
              <OutlinedInput
                id="course-title"
                label="Course title"
                variant="outlined"
                notched={false}
                labelWidth={0}
                value={courseDetails.title}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    title: e.target.value,
                  })
                }
              />
            </FormControl>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Description:
            </Typography>
            <FormControl fullWidth className={classes.textFields}>
              <OutlinedInput
                id="course-description"
                label="Course description"
                variant="outlined"
                multiline={true}
                rows={7}
                notched={false}
                labelWidth={0}
                value={courseDetails.description}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    description: e.target.value,
                  })
                }
              />
            </FormControl>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Outline:
            </Typography>
            <TextEditor
              handleSetCourseOutline={setCourseDetails}
              courseDetails={courseDetails}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Price:
            </Typography>
            <FormControl fullWidth className={classes.textFields}>
              <OutlinedInput
                id="course-price"
                label="Course Price"
                variant="outlined"
                type="number"
                notched={false}
                value={courseDetails.price}
                labelWidth={0}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    price: e.target.value,
                  })
                }
              />
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Duration:
            </Typography>
            <FormControl fullWidth className={classes.textFields}>
              <OutlinedInput
                id="course-code"
                label="Course Price"
                variant="outlined"
                notched={false}
                labelWidth={0}
                value={courseDetails.duration}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    duration: e.target.value,
                  })
                }
              />
            </FormControl>
          </Grid>
          <Grid lg={12}>
            <Box className={classes.btns}>
              <Button
                variant="contained"
                color="default"
                className={classes.publishedBtn}
              >
                Published
              </Button>
              <Button
                variant="contained"
                color="default"
                className={classes.saveToDraftBtn}
              >
                Save to draft
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddNewCourses;
