/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Currencies from "./Currency.json"



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
          preferredCurrency:val.code
        }):props.handleSetCountry({
          ...props.applicantData,
          preferredCurrency:''
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
          id="currency"
          variant="outlined"
          value={props.applicantData.preferredCurrency}
          error={props.errors.includes("currency")}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}





