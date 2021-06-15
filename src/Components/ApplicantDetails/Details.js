import React from "react"
import ApplicantMetaInformation from "./Components/MetaInformation"
import ApplicantMainInformation from "./Components/MainInformation"
import ApplicantActions from "./Components/Actions"
import {Grid, makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    root:{
    padding:"0 30px",
    border: "1px solid grey",
    [theme.breakpoints.down('sm')]:{
        padding:"0 10px"
    }
    }
}))


const Details = ()=>{
    const classes = useStyles()
    return (
       <Grid
       className={classes.root}
         container
         spacing={1}
         direction="row"
        //  justify="center"
        //  alignItems="center"
        //  alignContent="center"
         
       >
          <Grid item lg={3} md={3} sm={12} xs={12}>
          <ApplicantMetaInformation />
          </Grid>
          <Grid item lg={9} md={9} sm={12} xs={12}>
           <ApplicantMainInformation />
          </Grid>


         
       </Grid>
    )
}

export default Details