import { Container, Typography, Grid } from "@material-ui/core"
import React, {useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import maleAvatar from "../Assests/male-avatar2.png"
import Details from "../Components/ApplicantDetails/Details"
import {ApplicantDetailsContext} from "../Contexts/ApplicantDetailsContext"

const ApplicantDetails = ()=>{


    const {id} = useParams()

    return (
        <Container maxWidth="lg">
         <Details />
        </Container>
    )
}


export default ApplicantDetails