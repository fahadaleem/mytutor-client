import React from "react"
import LoginForm from "../Components/LoginForm/LoginForm"
import Navbar from "../Components/Navbar/MainNav"
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:"#e63946",
        width:"100%",
        height:"100%",
        paddingBottom:"20px",
        [theme.breakpoints.down('sm')]:{
            backgroundColor:"white"
        }
    }
}))

const Login = ()=>{
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Navbar />
        <LoginForm />
        </div>
    )
}

export default Login