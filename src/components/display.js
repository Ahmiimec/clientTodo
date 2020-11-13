import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Todo from './todo';
import './../App.css';
import { apiUrl } from './../config';
import Popbu from './add-dialog';
import { setTodoList } from './actions';

const Display = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoList);

    const reloadTodos = () => {
        axios.get(apiUrl)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setTodoList(response.data));
                }
            })
    }

    React.useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setTodoList(response.data));
                }
            })
    }, [])


    return (
        <div className="list-wrapper">
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Popbu reloadTodos={reloadTodos}></Popbu>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item xs={6}>
                    <List component="nav" aria-label="main mailbox folders">
                        {todos.map((item,index) => {
                            if (item.status === 'pending') {
                                return (
                                    <ListItem>
                                        <Todo key={`${item.task}-${index}`} task={item.task} status={item.status} taskId={item.id} reloadTodos={reloadTodos}> </Todo>
                                    </ListItem>
                                )
                            }
                            else {
                                return null
                            }
                        })}
                        {todos.map((item,index) => {
                            if (item.status === 'completed') {
                                return (
                                    <ListItem>
                                        <Todo key={`${item.task}-${index}`} task={item.task} status={item.status} taskId={item.id} reloadTodos={reloadTodos}> </Todo>
                                    </ListItem>
                                )
                            }
                            else {
                                return null
                            }
                        })}

                    </List>
                    <Divider />
                </Grid>

            </Grid>
        </div>
    )
}

export default Display;