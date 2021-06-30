import React, { createContext, useState } from "react";
import baseUrl from "../mytutor-backend";
import axios from "axios";

const TeachersContext = createContext();

const TeachersContextProvider = (props) => {
  const [teachersDetails, setTeachersDetails] = useState([]);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalNewTeachersHired, setTotalNewTeachersHired] = useState(0);

  async function handleGetTeachers() {
    try {
      const response = await axios.get(`${baseUrl}/get-all-teachers`);

      console.log(response);
      handleGetNewTeachersHiredCount(response.data.teachers);
      setTeachersDetails(response.data.teachers);
      setTotalTeachers(response.data.total_teachers);
    } catch (error) {}
  }

  const handleGetNewTeachersHiredCount = (data) => {
    let count = 0;

    data.forEach((elem) => {
      const dif = Math.abs((new Date() - new Date(elem.hiring_date)) / 8.64e7);

      if (dif <= 10) {
        count++;
      }
    });

    setTotalNewTeachersHired(count);
  };

  return (
    <TeachersContext.Provider
      value={{ handleGetTeachers, loading, teachersDetails, totalTeachers, totalNewTeachersHired }}
    >
      {props.children}
    </TeachersContext.Provider>
  );
};

export { TeachersContext, TeachersContextProvider };
