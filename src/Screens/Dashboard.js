import React from "react"
import {Typography, Grid, Toolbar, AppBar, Box} from '@material-ui/core'
import {makeStyles, Button} from "@material-ui/core"
import AdminDashboardNavbar from "../Components/Admin/AdminDashboardNavbar"
import SideDrawer from "../Components/Admin/SideDrawer"
const useStyles= makeStyles(theme=>({


}));


const Dashboard = ()=>{
    const classes = useStyles()
    return(
        <div>
            <AdminDashboardNavbar />
            <SideDrawer />
            </div>
    )
}


export default Dashboard