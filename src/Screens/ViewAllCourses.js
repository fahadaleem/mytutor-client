import React from "react"
import courseCategories from "../categories.json"
import { CourseContext } from "../Contexts/CourseContext"
import CourseCard from "../Components/Courses/ViewAllCourses/Cards"
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import SimpleBackdrop from "../Components/Utilities/BackdropLoader"

const ViewAllCourses = ()=>{
    console.log(courseCategories)

    const {handleGetAllCourses, allCourses, loading} = React.useContext(CourseContext)

    React.useEffect(()=>{
        handleGetAllCourses()
    }, [])

    return(
        <Container maxWidth="lg">
            {loading&&<SimpleBackdrop />}
          <Grid container spacing={3}>
            {allCourses.map((elem)=>{
                return (
                    <Grid item lg={4}>
                        <CourseCard category={elem.category} name={elem.name} id={elem.id} title={elem.title} description={elem.description}/>
                    </Grid>
                )
            })}
          </Grid>
        </Container>
    )
}

export default ViewAllCourses