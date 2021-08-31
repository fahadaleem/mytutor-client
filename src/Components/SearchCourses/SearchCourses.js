import React from "react"
import { useParams } from "react-router"

const SearchCourse = ()=>{
    
    const {courseName} = useParams();
    
    return (
        <h1>{courseName}</h1>
    )
}

export default SearchCourse