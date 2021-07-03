import React, { useState, useContext, useEffect } from "react";
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
import courseCategories from "../../../categories.json";
import { CourseContext } from "../../../Contexts/CourseContext";
import SimpleBackdrop from "../../Utilities/BackdropLoader";
import Swal from "sweetalert2";
import Snackbars from "../../Utilities/Snakbar";

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
    fontSize: "16px",
    padding: "15px 25px",
    margin: "5px 5px 0 0",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#2A2A2A",
    },
  },
  saveToDraftBtn: {
    backgroundColor: "#2A2A2A",
    fontSize: "16px",
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
  const [isDataSaved, setIsDataSaved] = useState(false);
  const { handleAddNewCourse, handleValidate, handleRemoveErrors, loading } =
    useContext(CourseContext);
  const [errors, setErrors] = useState([]);
  const [courseDetails, setCourseDetails] = useState({
    category: "",
    id: "",
    name: "",
    title: "",
    description: "",
    courseOutline: "",
    price: "",
    duration: "",
    language: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const err = handleValidate(courseDetails);
    setErrors(err);
    if (err.length === 0) {
      console.log("chala");
      handleAddNewCourse({
        ...courseDetails,
        visibility: "true",
      }).then((resp) => {
        if (resp.code === "200") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Course is successfully created!",
          }).then((success) => {
            setIsDataSaved(true);
            setCourseDetails({
              category: "",
              id: "",
              name: "",
              title: "",
              description: "",
              courseOutline: "",
              price: "",
              duration: "",
              language: "",
            });
          });
        } else if (resp.code === "201") {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "This course is Already Added!",
          });
        }
      });
    }
  };

  useEffect(() => {
    setErrors(handleRemoveErrors(courseDetails, errors));
  }, [courseDetails]);

  return (
    <Container maxWidth="lg">
      {loading && <SimpleBackdrop />}
      <Typography variant="h3" color="initial">
        Create A New Course:
      </Typography>
      <form onSubmit={handleSubmit}>
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
              error={errors.includes("category")}
            >
              {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label=""
                labelWidth={0}
                notched={false}
                value={courseDetails.category}
                error={errors.includes("category")}
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
            <FormControl
              fullWidth
              className={classes.textFields}
              error={errors.includes("id")}
            >
              <OutlinedInput
                id="course-code"
                label="Course Code"
                variant="outlined"
                notched={false}
                labelWidth={0}
                value={courseDetails.id}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    id: e.target.value.toUpperCase(),
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
            <FormControl
              fullWidth
              className={classes.textFields}
              error={errors.includes("name")}
            >
              <OutlinedInput
                id="course-name"
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
              error={errors.includes("title")}
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
              error={errors.includes("description")}
            >
              Course Description:
            </Typography>
            <FormControl
              fullWidth
              className={classes.textFields}
              error={errors.includes("description")}
            >
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
              isDataSaved={isDataSaved}
              errors={errors}
            />
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Language:
            </Typography>
            <FormControl
              fullWidth
              className={classes.textFields}
              error={errors.includes("language")}
            >
              <OutlinedInput
                id="course-language"
                label="Course langauage"
                variant="outlined"
                notched={false}
                value={courseDetails.language}
                labelWidth={0}
                onChange={(e) =>
                  setCourseDetails({
                    ...courseDetails,
                    language: e.target.value,
                  })
                }
              />
            </FormControl>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Price:
            </Typography>
            <FormControl
              fullWidth
              className={classes.textFields}
              error={errors.includes("price")}
            >
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
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Typography
              variant="body1"
              color="initial"
              className={classes.formLabel}
            >
              Course Duration:
            </Typography>
            <FormControl fullWidth className={classes.textFields}>
              <OutlinedInput
                id="course-duration"
                label="course duration"
                variant="outlined"
                error={errors.includes("duration")}
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
          <Grid lg={12} sm={12} md={12} xs={12}>
            <Box className={classes.btns}>
              <Button
                variant="contained"
                color="default"
                type="submit"
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
