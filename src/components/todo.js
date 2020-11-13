import React from 'react';
import { Card, CardContent, Button, Chip, ListItem, Dialog } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import {apiUrl} from './../config';
import Edit from './edit';

const Todo = (props) => {
    const [isEditOpen, setIsEditOpen] = React.useState(false);

    const handleButton = () => {
        setIsEditOpen(true);
    }

    const handleEditClose = () => {
        setIsEditOpen(false);
        console.log('yes')
    }
    
    const handleClick = () => {
        if (props.status === 'completed'){
            axios.put(`${apiUrl}/${props.taskId}`,{
                status: 'pending' 
            })
            .then(()=>{
                props.reloadTodos();
            
            })

        }
        else{
            axios.put(`${apiUrl}/${props.taskId}`,{
                status: 'completed' 
            })
            .then(()=>{
                props.reloadTodos();
            
            })

        }

    }

    return (
        <Card className="todo-wrapper">
            <CardContent>
                <div className="item-wrapper">
                    <div className="task-text"> {props.task} </div>
                    <div className="tast-status">
                    <div className="task-status111"> {props.status === 'completed' ? <Chip onClick={handleClick} className="task-chip-completed" label="COMPLETED" /> : <Chip onClick={handleClick} className="task-chip-pending" label="PENDING" />}
                    </div> <Edit task={props.task} taskId={props.taskId} reloadTodos={props.reloadTodos}> </Edit>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

}

export default Todo;