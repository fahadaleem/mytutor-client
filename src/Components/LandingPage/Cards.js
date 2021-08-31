import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image3 from "../../Assests/admin.png"
import Image2 from "../../Assests/teacher.jpg"
import Image1 from "../../Assests/student.png"


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: "320px",
        width: "350px",
        marginLeft: "50px",
    },
    cards: {
        display: "inline !important",
    },
});

export default function Cards() {
    const classes = useStyles();

    return (
        <Grid container style={{marginTop: "50px", marginBottom: "30px"}}>
            <Grid item lg={12}>
            <Typography variant="h3" color="initial" align="center" style={{margin:"20px 0"}}>Roles</Typography>
            </Grid>
                <Grid item lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Student"
                            height="140"
                            image={Image1}
                            title="Student"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                STUDENT
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                Get Access to 100+ courses from our professional and highly trained teachers and start learning today!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" style={{paddingLeft:"80px",paddingBottom:"40px",}}>
                            Login
                        </Button>
                        <Button size="small" color="primary" style={{paddingLeft:"80px",paddingBottom:"40px",}}>
                            Sign Up
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Teacher"
                            height="140"
                            image={Image2}
                            title="Teacher"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                TEACHER
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                Prepare your courses, get verified from us and start teaching now!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" style={{paddingLeft:"80px",paddingTop:"22px",}}>
                            Login
                        </Button>
                        <Button size="small" color="primary" style={{paddingLeft:"80px",paddingTop:"22px",}}>
                            Sign Up
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Admin"
                            height="140"
                            image={Image3}
                            title="Admin"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                ADMIN
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                For Administration use only!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" style={{paddingLeft:"80px",paddingTop:"40px",}}>
                            Login
                        </Button>
                        <Button size="small" color="primary" style={{paddingLeft:"80px", paddingTop:"40px",}}>
                            Sign Up
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>



        // <div className={classes.cards}>

        // <Card className={classes.root}>
        //   <CardActionArea>
        //     <CardMedia
        //       component="img"
        //       alt="Contemplative Reptile"
        //       height="140"
        //       image="../Assets/admin.png"
        //       title="Contemplative Reptile"
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="h2">
        //         STUDENT
        //       </Typography>
        //       <Typography variant="body2" color="textSecondary" component="p">
        //         Get Access to 100+ courses from our professional and highly trained teachers and start learning today!
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        //   <CardActions>
        //     <Button size="small" color="primary">
        //       Login
        //     </Button>
        //     <Button size="small" color="primary">
        //       Sign Up
        //     </Button>
        //   </CardActions>
        // </Card>

        // <Card className={classes.root}>
        //   <CardActionArea>
        //     <CardMedia
        //       component="img"
        //       alt="Contemplative Reptile"
        //       height="140"
        //       image="../Assets/admin.png"
        //       title="Contemplative Reptile"
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="h2">
        //        TEACHER
        //       </Typography>
        //       <Typography variant="body2" color="textSecondary" component="p">
        //         Prepare your courses, get verified from us and start teaching now! 
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        //   <CardActions>
        //     <Button size="small" color="primary">
        //       Login
        //     </Button>
        //     <Button size="small" color="primary">
        //       Sign Up
        //     </Button>
        //   </CardActions>
        // </Card>


        // <Card className={classes.root}>
        //   <CardActionArea>
        //     <CardMedia
        //       component="img"
        //       alt="Contemplative Reptile"
        //       height="140"
        //       image="../Assets/admin.png"
        //       title="Contemplative Reptile"
        //     />
        //     <CardContent>
        //       <Typography gutterBottom variant="h5" component="h2">
        //         ADMIN
        //       </Typography>
        //       <Typography variant="body2" color="textSecondary" component="p">
        //         For Administration use only! 
        //       </Typography>
        //     </CardContent>
        //   </CardActionArea>
        //   <CardActions>
        //     <Button size="small" color="primary">
        //       Login
        //     </Button>
        //     <Button size="small" color="primary">
        //       Sign Up
        //     </Button>
        //   </CardActions>
        // </Card>

        // </div>
    );
}
