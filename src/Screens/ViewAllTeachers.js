import React, {useContext, useEffect} from "react";
import TeachersTable from "../Components/ViewAllTeachers/Table"
// import TotalTeacherCard from "../Components/ViewAllTeachers/TotalTeacherCard"
import TotalTeachersCount from "../Components/ViewAllTeachers/TotalTeachersCount"
import Filter from "../Components/ViewAllTeachers/Filter"
import { TeachersContext } from "../Contexts/TeachersContext";

const ViewAllTeachers = ()=>{
    
    const {loading, teachersDetails, totalTeachers, totalNewTeachersHired, handleGetTeachers} = useContext(TeachersContext)

    useEffect(()=>{
        handleGetTeachers()
    },[])


    return(
        <div>
            <TotalTeachersCount totalTeachers = {totalTeachers} totalNewTeachersHired={totalNewTeachersHired}/>
            <TeachersTable teachersDetails={teachersDetails}/>
        </div>
    )
}

export default ViewAllTeachers