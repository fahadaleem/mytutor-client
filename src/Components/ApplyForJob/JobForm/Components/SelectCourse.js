/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function CourseSelect(props) {
  const classes = useStyles();

  const [country, setCountry] = useState('');

  return (
    <Autocomplete
      id="country-select-demo"
      fullWidth
      options={courses}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      
     
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
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

const courses = [
    {courseName:'c#'},
    {courseName:'Maths'},
    {courseName:'States'},
    {courseName:'Physics'},
    {courseName:'Python'},
    {courseName:'JS'},
    {courseName:'HTML'},
    {courseName:'Flutter'}
]



