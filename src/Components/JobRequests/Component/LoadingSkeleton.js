import React from "react";
import { makeStyles, Box } from "@material-ui/core";

import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "25px 0",
  },
  skeleton: {
    width: "100%",
    height: "200px",
    marginTop: "-45px",
  },
}));

const LoadingSkeleton = () => {
  // use to map the skeleton, dummy data
  const skeletonData = [1, 2, 3];

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {skeletonData.map((element, index) => {
        return <Skeleton className={classes.skeleton}></Skeleton>;
      })}
    </Box>
  );
};

export default LoadingSkeleton;
