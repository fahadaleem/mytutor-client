import React, {useContext} from "react";
import TeachersTable from "../Components/ViewAllTeachers/Table"
// import TotalTeacherCard from "../Components/ViewAllTeachers/TotalTeacherCard"
import TotalTeachersCount from "../Components/ViewAllTeachers/TotalTeachersCount"
import Filter from "../Components/ViewAllTeachers/Filter"
import { TeachersContext } from "../Contexts/TeachersContext";

const ViewAllTeachers = ()=>{
    
    const {loading, teachersDetails, totalTeachers} = useContext(TeachersContext)

    return(
        <div>
            <TotalTeachersCount totalTeachers = {totalTeachers}/>
            <TeachersTable teachersDetails={teachersDetails}/>
        </div>
    )
}

export default ViewAllTeachers