import React from "react"
import {Typography, Grid, Toolbar, AppBar, Box} from '@material-ui/core'
import {makeStyles, Button} from "@material-ui/core"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles= makeStyles(theme=>({

    root:{
        backgroundColor:"#29524A", 
        padding:"5px 10px", 
        height:"75px"
    },
    logoutBtn:{
        backgroundColor:"#29524A",
        color:"white", 
        border:"2px solid white !important", 
        '&:hover':{
            backgroundColor:"#5c9c90",

        }
    }

}));


const AdminDashboardNavbar = ()=>{
    const classes = useStyles()
    return(
        <AppBar position="relative" className={classes.root}>
          <Toolbar>
            <Grid container spacing={3} justify="space-between">
                <Grid item lg={4}>
                <Typography variant="h6" color="initial">My Tutor Admin Panel</Typography>
                </Grid>
                <Grid item lg={4}>
                   <Box style={{textAlign:"right"}}>
                   <Button
                      variant="contained"
                      startIcon={<ExitToAppIcon />}
                      className={classes.logoutBtn}
                    >
                      Exit to dashboard
                    </Button>
                    
                   </Box>
                </Grid>
            </Grid>

          </Toolbar>
        </AppBar>
    )
}


export default AdminDashboardNavbar