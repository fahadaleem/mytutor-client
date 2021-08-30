import React from "react"
import {Container, makeStyles} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    root:{
        background:'url(./banner.webp)',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
    }
}));
const Header = ()=>{
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.root}>
          <h1>hello</h1>
        </Container>
    )
}

export default Header