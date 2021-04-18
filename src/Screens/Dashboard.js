import React from "react"
import {Typography, Grid, Toolbar, AppBar, Box, Hidden} from '@material-ui/core'
import {makeStyles, Button} from "@material-ui/core"
import AdminDashboardNavbar from "../Components/Admin/AdminDashboardNavbar"
import {SideDrawer} from "../Components/Admin/SideDrawer"
const useStyles= makeStyles(theme=>({


}));


const Dashboard = ()=>{
    const classes = useStyles()
    return(
        <div>
            <AdminDashboardNavbar />
            <Hidden xsDown>
            <SideDrawer />
            </Hidden>
            </div>
    )
}


export default Dashboard