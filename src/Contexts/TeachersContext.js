import React, { createContext, useState } from "react";
import baseUrl from "../mytutor-backend";
import axios from "axios";

const TeachersContext = createContext();

const TeachersContextProvider = (props) => {
  const [teachersDetails, setTeachersDetails] = useState([]);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [loading, setLoading] = useState(false);

  async function handleGetTeachers() {
    try {
      const response = await axios.get(`${baseUrl}/get-all-teachers`);

      console.log(response);
      setTeachersDetails(response.data.teachers);
      setTotalTeachers(response.data.total_teachers);
    } catch (error) {}
  }

  return (
    <TeachersContext.Provider
      value={{ handleGetTeachers, loading, teachersDetails, totalTeachers }}
    >
      {props.children}
    </TeachersContext.Provider>
  );
};

export { TeachersContext, TeachersContextProvider };
