import React from "react";
import TeachersTable from "../Components/ViewAllTeachers/Table"
// import TotalTeacherCard from "../Components/ViewAllTeachers/TotalTeacherCard"
import TotalTeachersCount from "../Components/ViewAllTeachers/TotalTeachersCount"

const ViewAllTeachers = ()=>{
    return(
        <div>
            <TotalTeachersCount />
            <TeachersTable />
        </div>
    )
}

export default ViewAllTeachers