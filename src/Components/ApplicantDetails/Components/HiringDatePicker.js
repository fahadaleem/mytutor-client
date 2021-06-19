import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function HiringDatePicker(props) {

  const handleDateChange = (date) => {
    const newDate = new Date(date)
    const day = newDate.getDate().toString().length===1?`0${newDate.getDate()}`:newDate.getDate();
    const month = newDate.getMonth().toString().length===1?`0${newDate.getMonth()+1}`:newDate.getMonth()
    const year = newDate.getFullYear()
    const completeDate = `${year}-${month}-${day}` 
    props.handleSetHiredTeacherDetails({
      ...props.hiredApplicantDetails,
      hiringDate:completeDate
    })
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Hiring Date"
          format="MM/dd/yyyy"
          fullWidth
          value={props.hiredTeacherDetails.hiringDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
