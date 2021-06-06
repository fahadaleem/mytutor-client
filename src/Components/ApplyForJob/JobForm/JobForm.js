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
  InputLabel, Button,
} from "@material-ui/core";
import CountrySelect from "./Components/SelectCountry";
import EducationSelect from "./Components/SelectEducation";
import SelectTeachingExperience from "./Components/SelectTeachingExperience";
import CourseSelect from "./Components/SelectCourse";
import CurrencySelect from "./Components/SelectCurrency";
import ChooseFileDialogue from "./Components/ChooseFileDialogue"
import DropzoneDialogExample from "./Components/ChooseFile"
import Swal from 'sweetalert2'


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
    "& .MuiRadio-colorSecondary.Mui-checked": {
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
  
  chargeHourlyCheckBox:{
    '& .MuiCheckbox-colorPrimary.Mui-checked':{
      color:"#2F1793 !important" 
    }
  },
  twoLabels:{
    display:"flex",
    justifyContent:"space-between"
  },
  chooseFile:{
    display:"flex"
  },
  submitBtn:{
    backgroundColor:"#e63946",
    color:"#f1faee",
    padding:"15px 45px",
    fontSize:"18px",
    borderRadius:"40px",
    '&:hover':{
      backgroundColor:"#2F1793"
    },
    [theme.breakpoints.down('xs')]:{
      width:"100%",
      fontSize:"18px"
    }
  }
  
  
}));

const JobForm = () => {
  const classes = useStyles();

  const [country, setCountry] = useState({});
  const [userName, setUserName] = useState({
    firstName:'',
    lastName:''
  })
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState('')
  const [resume, setResume] = useState([])
  const [errors, setErrors] = useState([])

  const [applicantData, setApplicantData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    country:{},
    phone:'',
    gender:'',
    education:'',
    teachingExperience:'',
    willingToTeachCourse1: '',
    willingToTeachCourse2: '',
    expectedSalary:'',
    preferredCurrency:'',
    shortIntro:'',
    resume:[]

  });

  
  
  const handleValidate = ()=>{
    if(applicantData.firstName)
    {
      setErrors([...errors, 'first-name'])
    }
    if(applicantData.lastName)
    {
      setErrors([...errors, 'last-name'])
    }
    if(applicantData.email)
    {
      setErrors([...errors, 'email'])
    }
    if(applicantData.phone)
    {
      setErrors([...errors, 'phone-no'])
    }
    if(applicantData.country)
    {
      setErrors([...errors, 'country-select'])
    }
    if(applicantData.education)
    {
      setErrors([...errors, 'education-select'])
    }
    if(applicantData.teachingExperience)
    {
      setErrors([...errors, 'teaching-experience-select'])
    }
    

  }


  

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
              error={errors.includes('first-name')}
              value={applicantData.firstName}
              onChange={(e)=>{
                setApplicantData({
                  ...applicantData,
                  firstName:e.target.value
                })
              }}
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
              value={applicantData.lastName}
              error={errors.includes('last-name')}
              onChange={(e)=>{
               setApplicantData({
                 ...applicantData,
                 lastName:e.target.value
               })
              }}
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
              error={errors.includes('email')}
              type="email"
              value = {applicantData.email}
              onChange={(e)=>{
                setApplicantData({
                  ...applicantData,
                  email:e.target.value
                })
              }}
              className={classes.textField}
              InputLabelProps={{ className: classes.inputLabel }}
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Country
            </InputLabel>
            <CountrySelect applicantData={applicantData} handleSetCountry={setApplicantData} />
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
                  { shrink: applicantData.country.phone ? true : false })
                }
                value={applicantData.country.phone ? `+${applicantData.country.phone}` : ""}
                label="Code"
                variant="outlined"
                className={`${classes.countryCodeField} ${classes.textField} `}
              />
              <TextField
                id="phone-no"
                label="Phone No*"
                variant="outlined"
                error={errors.includes('phone-no')}
                type="phone"
                fullWidth
                value={applicantData.phone}
                onChange={(e) => {
                  setApplicantData({
                    ...applicantData,
                    phone: e.target.value
                  })
                }}
                className={classes.textField}
              />
            </div>
          </Grid>

          <Grid item lg={12} sm={12} xs={12}>
            <RadioGroup name="gender" onChange={(e)=>{
              setApplicantData({
                ...applicantData,
                gender:e.target.value
              })
            }}>
              <FormLabel className={classes.formLabel}>Gender:</FormLabel>
              <FormControlLabel
                value="male"
                name="gender"
                label="Male"
                className={classes.radioBtn}
                control={<Radio />}
              />
              <FormControlLabel
                value="female"
                name="gender"
                label="Female"
                className={classes.radioBtn}
                control={<Radio />}
              />
            </RadioGroup>
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Current Education Level
            </InputLabel>
            <EducationSelect applicantData={applicantData} handleSetEducation = {setApplicantData} />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Enter Your Teaching Experience
            </InputLabel>
            <SelectTeachingExperience applicantData={applicantData} handleSetTeachingExperience= {setApplicantData} />
          </Grid>
          <Grid item lg={6} sm={6} xs={12}>
            <InputLabel className={classes.formLabel}>
              Which Course Do You Want To Teach? (Choose any Two)
            </InputLabel>
            <CourseSelect id="course-1" applicantData={applicantData} handleSetSelectedCourse= {setApplicantData}/>
            <div style={{ margin: "15px 0" }}>
              <CourseSelect id="course-2" applicantData={applicantData} handleSetSelectedCourse= {setApplicantData} />
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
                  value={applicantData.expectedSalary}
                  onChange={(e)=>[
                    setApplicantData({
                      ...applicantData,
                      expectedSalary:e.target.value
                    })
                  ]}
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
                <CurrencySelect applicantData={applicantData} handleSetPrefferedCurrency = {setApplicantData}/>
              </div>
            </div>
            
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
          <InputLabel className={classes.formLabel}>
                  Short Intro About Yourself
                </InputLabel>
            <TextField
              id="applicant-intro"
              label="About You"
              variant="outlined"
              value={applicantData.shortIntro}
              onChange={(e)=>[
                setApplicantData({
                  ...applicantData,
                  shortIntro:e.target.value

                })
              ]}
              fullWidth
              multiline={true}
              rows="7"
              maxRows="15"
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
          <InputLabel className={classes.formLabel} style={{display:"inline-block", marginRight:"25px"}}>
                  Upload Your Resume
                </InputLabel>
                <div className={classes.chooseFile}>
            <DropzoneDialogExample selectedFile = {resume} applicantData={applicantData} handleSelectFile = {setApplicantData} />
              <Typography variant="h6" color="initial">{applicantData.resume.length>0&&applicantData.resume[0].name}</Typography>
                </div>
              </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <div style={{textAlign:"right"}}>
            <Button variant="contained" color="default" type="submit" className={classes.submitBtn}>
              Submit Application
            </Button>
            </div>
              </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default JobForm;
