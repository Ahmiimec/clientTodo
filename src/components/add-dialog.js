import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AddBoxIcon from '@material-ui/icons/AddBox';


import axios from 'axios';
import {apiUrl} from '../config';

const Popbu = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [text, setText] = React.useState();
  const handleTextChange=(event) => {setText(event.target.value)}


  const handleAddTask = () => {
    return(
      axios.post(`${apiUrl}`,{
        task:text, 
        status:`${value}`
    })).then(()=>{
        handleClose();
        props.reloadTodos()
    })
  };

  const [value, setValue] = React.useState('pending');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="button">
      <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
        <div className="button-text">Add Todo</div>
        <div className="addbutton-text"><AddBoxIcon variant="outlined"/></div>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div className="inside-addbox"><DialogContent>
          <DialogContentText>
            Feel free to type in any ToDo Task :)
          </DialogContentText>
          <TextField

            autoFocus
            margin="dense"
            id="id"
            label="Task text"
           type="task"
            fullWidth
            value={text}
            onChange={handleTextChange}
          />
          <FormControl component="fieldset">
            <div>
            <RadioGroup aria-label="Taskcheck" name="Taskcheck2" row value={value} onChange={handleChange}>
              <FormControlLabel value="completed" control={<Radio />} label="Completed" />
              <FormControlLabel value="pending" control={<Radio />} label="Pending" />
            </RadioGroup>
            </div>
          </FormControl>
        </DialogContent></div>
        <DialogActions>
          <Button  onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  onClick={handleAddTask} color="primary">
            Add New Task
            
          </Button>

        </DialogActions>
      </Dialog>




    </div>
  );
}

export default Popbu;