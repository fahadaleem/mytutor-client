import React, {createContext} from "react"

const CourseContext = createContext()


const CourseContextProvider = (props)=>{
    return (
        <CourseContext.Provider>
            {props.children}
        </CourseContext.Provider>
    )
}


export {
    CourseContext, CourseContextProvider
}