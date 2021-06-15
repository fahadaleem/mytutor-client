import { Container, Typography, Grid } from "@material-ui/core"
import React, {useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import maleAvatar from "../Assests/male-avatar2.png"
import Details from "../Components/ApplicantDetails/Details"
import {ApplicantDetailsContext} from "../Contexts/ApplicantDetailsContext"
import {JobRequestContext} from "../Contexts/JobRequestContext"
import SimpleBackdrop from "../Components/Utilities/BackdropLoader"

const ApplicantDetails = (props)=>{


    const {id} = useParams()

    const {applicantDetails, handleFetchApplicantDetails, applicantDetailsLoading} = useContext(JobRequestContext)


    useEffect(()=>{
        console.log(handleFetchApplicantDetails)
        handleFetchApplicantDetails(id);
    },[])

    return (
        <Container maxWidth="lg">

         {applicantDetailsLoading?<SimpleBackdrop />:<Details id={id}/>}
        </Container>
    )
}


export default ApplicantDetails