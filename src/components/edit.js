import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

import { apiUrl } from '../config';

const Edit = (props) => {
  const [text, setText] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleButton = () => {
    setIsOpen(true);
  }

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleEditButtonClick = () => {
    axios.put(`${apiUrl}/${props.taskId}`, {
      task: text
    })
    .then(()=>{
      props.reloadTodos();
    })
    handleClose();
  }

  return (
    <div>
      <Button className="edit-button" onClick={handleButton} variant="outlined">
        <div className="cyankaro">
          <EditIcon variant="outlined" />
        </div>
      </Button>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <div className="dialog-content-wrapper">
          <DialogContentText>
            {props.task}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter New Task Name"
            type="Text"
            fullWidth
            value={text}
            onChange={handleTextChange}
          />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditButtonClick} color="primary">
            Rename
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Edit;