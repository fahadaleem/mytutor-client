import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DropzoneDialogExample from "./ChooseFile"
import {makeStyles} from "@material-ui/core"


const useStyles = makeStyles(theme=>({
    dialogueTitle:{
        textAlign:"center"
    },
    dialogue:{
        width:"500px"
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChooseFileDialogue() {
  const [open, setOpen] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false)


  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = ()=>{
      setIsSubmit(true);
      handleClose();
  }
  return (
    <div style={{display:"inline-block"}}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Upload
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        classes={{
            paper:classes.dialogue
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className={classes.dialogueTitle}>{"Upload Your Resume"}</DialogTitle>
        <DialogContent>
        <DropzoneDialogExample />
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
