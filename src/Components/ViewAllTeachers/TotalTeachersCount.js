import React from "react"
import {Grid} from '@material-ui/core'
import TotalTeacherCard from "./TotalTeacherCard"
import TotalNewTeachersCard from "./TotalNewTeachersCard"


const TotalTeachersCount = (props)=>{
    return (
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <TotalTeacherCard totalTeachers = {props.totalTeachers}/>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
          <TotalNewTeachersCard totalNewTeachersHired={props.totalNewTeachersHired}/>
          </Grid>
        </Grid>
    )
}


export default TotalTeachersCount