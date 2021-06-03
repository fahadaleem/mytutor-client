import React, { useState } from "react";
import {
  Container,
  Typography,
  makeStyles,
  TextField,
  Grid,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";
import CountrySelect from "./Components/SelectCountry";
import EducationSelect from "./Components/SelectEducation";
import SelectTeachingExperience from "./Components/SelectTeachingExperience";
import CourseSelect from "./Components/SelectCourse";
import CurrencySelect from "./Components/SelectCurrency";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "70px 20px",
  },
  applyHeading: {
    color: "#2F1793",
    fontSize: "3.2rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  form: {
    margin: "20px 10px",
  },

  formLabel: {
    margin: "15px 0",
    fontSize: "18px !important",
    color: "#2F1793",
  },

  textField: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2F1793 !important",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#2F1793 !important",
    },
  },

  radioBtn: {
    "& .PrivateRadioButtonIcon-checked-34": {
      color: "#2F1793 !important",
    },
  },
  countryCodeField: {
    width: "180px",
    margin: "0 10px 0 0",
  },
  salaryDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  
  
}));

const JobForm = () => {
  const classes = useStyles();

  const [country, setCountry] = useState({});
  const [phone, setPhone] = useState("");
  const [chargeHourly, setChargeHourly] = useState(false)

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography
        variant="h2"
        color="initial"
        align="center"
        className={classes.applyHeading}
      >
        Apply For Teaching
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={3}>
          <Grid item lg={4} sm={4} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your First Name
            </InputLabel>
            <TextField
              id="first-name"
              label="First Name*"
              variant="outlined"
              fullWidth
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
            />
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Last Name
            </InputLabel>
            <TextField
              id="last-name"
              label="Last Name*"
              variant="outlined"
              fullWidth
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
            />
          </Grid>
          <Grid item lg={4} sm={4} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Email
            </InputLabel>
            <TextField
              id="email"
              label="Email*"
              variant="outlined"
              fullWidth
              type="email"
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Country
            </InputLabel>
            <CountrySelect handleSetCountry={setCountry} />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Phone Number without country code
            </InputLabel>
            <div style={{ display: "flex" }}>
              <TextField
                id="country-code"
                disabled
                InputLabelProps={
                  ({ className: classes.inputLabel },
                  { shrink: country.phone ? true : false })
                }
                value={country.phone ? `+${country.phone}` : ""}
                label="Code"
                variant="outlined"
                className={`${classes.countryCodeField} ${classes.textField} `}
              />
              <TextField
                id="phone-no"
                label="Phone No*"
                variant="outlined"
                type="phone"
                fullWidth
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className={classes.textField}
              />
            </div>
          </Grid>

          <Grid item lg={12} sm={12} xs={12}>
            <RadioGroup name="gender">
              <FormLabel className={classes.formLabel}>Gender:</FormLabel>
              <FormControlLabel
                value="male"
                name="gender"
                label="Male"
                control={<Radio className={classes.radioBtn} />}
              />
              <FormControlLabel
                value="female"
                name="gender"
                label="Female"
                control={<Radio className={classes.radioBtn} />}
              />
            </RadioGroup>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Current Education Level
            </InputLabel>
            <EducationSelect />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Teaching Experience
            </InputLabel>
            <SelectTeachingExperience />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Which Course Do You Want To Teach? (Choose any Two)
            </InputLabel>
            <CourseSelect />
            <div style={{ margin: "15px 0" }}>
              <CourseSelect />
            </div>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <div className={classes.salaryDiv}>
              <div style={{ width: "48%" }}>
                <InputLabel className={classes.formLabel}>
                  Expected Salary
                </InputLabel>
                <TextField
                  id="salary"
                  label="Salary*"
                  variant="outlined"
                  type="number"
                  fullWidth
                  min="0"
                  className={classes.textField}
                  InputLabelProps={{ className: classes.inputLabel }}
                />
              </div>
              <div style={{ width: "48%" }}>
                <InputLabel className={classes.formLabel}>
                  Preferred Currency
                </InputLabel>
                <CurrencySelect />
              </div>
            </div>
            <FormControlLabel
              label="Do you want to charge it hourly?"
              control={
                <Checkbox
                  value="false"
                  checked={chargeHourly}
                  onChange={()=>{
                    setChargeHourly(!chargeHourly)
                  }}
                  color="primary"
                />
              }
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default JobForm;
