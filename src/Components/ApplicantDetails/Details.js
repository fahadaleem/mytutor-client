import React, {useContext, useEffect, useState} from "react"
import ApplicantMetaInformation from "./Components/MetaInformation"
import ApplicantMainInformation from "./Components/MainInformation"
import ApplicantActions from "./Components/Actions"
import {Grid, makeStyles} from '@material-ui/core'
import {JobRequestContext} from "../../Contexts/JobRequestContext"
import axios from "axios"
import baseUrl from "../../mytutor-backend"


const useStyles = makeStyles(theme=>({
    root:{
    marginTop:"5px",
    marginBottom:"5px",
    padding:"0 30px",
    border: "1px solid grey",
    [theme.breakpoints.down('sm')]:{
        padding:"0 10px"
    }
    }
}))




const Details = (props)=>{
    const classes = useStyles()

    // const [applicantDetails, setApplicantDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const {applicantDetails, handleFetchApplicantDetails, applicantDetailsLoading, handleDeleteApplicant, handleHireTeacher} = useContext(JobRequestContext)

    return (

       <Grid
       className={classes.root}
         container
         spacing={5}
         wrap="wrap"
       >
          <Grid item lg={3} md={3} sm={12} xs={12}>
          <ApplicantMetaInformation gender={applicantDetails.gender} country={applicantDetails.country} phone = {applicantDetails.phone_no} email = {applicantDetails.email} appliedDate = {applicantDetails.applied_date} resume={applicantDetails.resume} />
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
           <ApplicantMainInformation id={applicantDetails.id} name={applicantDetails.name} intro = {applicantDetails.intro} email = {applicantDetails.email} experience = {applicantDetails.teaching_experience} willingToTeachCourses = {applicantDetails.willing_to_teach_courses} expectedSalary = {applicantDetails.expected_salary} preferredCurrency={applicantDetails.preferred_currency} handleDeleteApplicant={handleDeleteApplicant} handleHireTeacher={handleHireTeacher} />
          </Grid>
         
       </Grid>
    )
}

export default Details