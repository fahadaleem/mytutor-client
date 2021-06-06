/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Currencies from "./Currency.json"

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

export default function CurrencySelect(props) {
  const classes = useStyles();

  const [country, setCountry] = useState('');
  console.log(Currencies,"curren")

  return (
    <Autocomplete
      id="country-select-demo"
      fullWidth
      options={Currencies}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      onChange={(event,val)=>{


        console.log(val)
        val!==null?props.handleSetPrefferedCurrency({
          ...props.applicantData,
          preferedCurrency:val.code
        }):props.handleSetCountry({
          ...props.applicantData,
          preferedCurrency:''
        })
    }}
     
      getOptionLabel={(option) => option.code}
      renderOption={(option) => (
        <React.Fragment>
          {/* <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone} */}
          {option.code}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose Currency"
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



