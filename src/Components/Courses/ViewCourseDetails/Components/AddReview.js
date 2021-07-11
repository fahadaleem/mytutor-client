import React from "react"
import {makeStyles, TextField} from "@material-ui/core"

const AddReview = ()=>{
    return (
        <form>
            <TextField
              id="comment"
              label="Enter Your Review"
            />
            </form>
    )
}


export default AddReview