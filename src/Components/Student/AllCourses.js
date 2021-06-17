import React from "react"
import {Grid, makeStyles, Grow} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme=>({
    root1:{
    padding:"0 30px",
    border: "1px solid grey",
    [theme.breakpoints.down('sm')]:{
        padding:"0 10px"
    }
    },
    root: {
        minWidth: "25%",
        marginTop: "30px",
        display: "block",
        backgroundColor: "lightGrey",

    },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
}))


const AllCourses = ()=>{
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
       
          <Grid  style={{display: "block"}}>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          My Tutor
        </Typography>
        <Typography variant="h5" component="h2">
          Python Course
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by: Sir Ammar
        </Typography>
        <Typography variant="body2" component="p">
        Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Full Details</Button>
      </CardActions>
      
    </Card>
   
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          My Tutor
        </Typography>
        <Typography variant="h5" component="h2">
            Javascript
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by: Sir Fahad
        </Typography>
        <Typography variant="body2" component="p">
        JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Full Details</Button>
      </CardActions>
      
    </Card>
             
     </Grid>
        
       
    );

}
export default AllCourses