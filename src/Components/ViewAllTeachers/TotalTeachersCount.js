import React from "react"
import {Grid} from '@material-ui/core'
import TotalTeacherCard from "./TotalTeacherCard"
import TotalNewTeachersCard from "./TotalNewTeachersCard"


const TotalTeachersCount = ()=>{
    return (
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
          <TotalTeacherCard />
          </Grid>
          <Grid item lg={6} lg={6} md={6} sm={6} xs={12}>
          <TotalNewTeachersCard />
          </Grid>
        </Grid>
    )
}


export default TotalTeachersCount