import React, {useContext, useEffect} from "react";
import {Typography, Container, makeStyles} from "@material-ui/core";
import JobRequest from "../Components/JobRequests/Request";
import {JobRequestContext} from "../Contexts/JobRequestContext";
import Skeleton from "@material-ui/lab/Skeleton";
import LoadingSkeleton from "../Components/JobRequests/Component/LoadingSkeleton";

const JobRequests = () => {
  const {
    jobRequests,
    loading,
    handleFetchApplicantDetails,
    handleDeleteApplicant,
  } = useContext(JobRequestContext);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="initial">
        Job Requests
      </Typography>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        jobRequests.map((element, index) => {
          return (
            <JobRequest
              key={element.id}
              id={element.id}
              name={element.name}
              country={element.country}
              appliedDate={element.applied_date}
              teachingExperience={element.teaching_experience}
              gender={element.gender}
              handleFetchApplicantDetails={handleFetchApplicantDetails}
              handleDeleteApplicant={handleDeleteApplicant}
            />
          );
        })
      )}
    </Container>
  );
};

export default JobRequests;
