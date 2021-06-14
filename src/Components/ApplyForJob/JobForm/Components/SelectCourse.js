/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function CourseSelect(props) {
  const classes = useStyles();

  return (
    <Autocomplete
      id="country-select"
      fullWidth
      options={courses}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      onChange={(event, val) => {
        if (props.id === "course-1") {
          val !== null
            ? props.handleSetSelectedCourse({
                ...props.applicantData,
                willingToTeachCourse1: val.courseName,
              })
            : props.handleSetSelectedCourse({
                ...props.applicantData,
                willingToTeachCourse1: "",
              });
        } else if (props.id === "course-2") {
          val !== null
            ? props.handleSetSelectedCourse({
                ...props.applicantData,
                willingToTeachCourse2: val.courseName,
              })
            : props.handleSetSelectedCourse({
                ...props.applicantData,
                willingToTeachCourse2: "",
              });
        }
      }}
      getOptionLabel={(option) => option.courseName}
      renderOption={(option) => (
        <React.Fragment>
          {/* <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone} */}
          {option.courseName}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Course Name"
          variant="outlined"
          value={props.selectedText}
          error={props.errors.includes("course-select")}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

const courses = [
  { courseName: "c#" },
  { courseName: "Maths" },
  { courseName: "States" },
  { courseName: "Physics" },
  { courseName: "Python" },
  { courseName: "JS" },
  { courseName: "HTML" },
  { courseName: "Flutter" },
];
