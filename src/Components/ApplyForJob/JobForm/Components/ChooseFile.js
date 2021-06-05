import React, { Component } from 'react'
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles";


 
export default class DropzoneDialogExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }
 
    handleClose() {
        this.setState({
            open: false
        });
    }
 
    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.props.handleSelectFile(files)
        this.setState({
            open: false
        });

    }
 
    handleOpen() {
        this.setState({
            open: true,
        });
    }
 
    render() {
   
        return (
            
            <div>
                <Button onClick={this.handleOpen.bind(this)} style={{backgroundColor:"#2F1793", color:"#f1faee", marginRight:"20px", padding:"5px 25px"}}>
                  Upload
                </Button>
                <DropzoneDialog
                    open={this.state.open}
                    onSave={this.handleSave.bind(this)}
                    acceptedFiles={['application/pdf']}
                    showPreviews={false}
                    maxFileSize={5000000}
                    onClose={this.handleClose.bind(this)}
                    
                />
            </div>
        );
    }
}