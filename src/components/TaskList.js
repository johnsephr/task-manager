import React, { useContext } from 'react';

// mui
import { makeStyles } from '@material-ui/core/styles';

// contexts
import { TaskListContext } from '../contexts/TaskListContext';

// components
import Task from './Task';

// stylesheet
const useStyles = makeStyles(theme => ({
    list: {
        listStyle: 'none',
        marginBottom: 0,
        padding: 25,
        backgroundColor: theme.palette.secondary.light,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    noTasks: {
        padding: 30,
        backgroundColor: theme.palette.secondary.light,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: 'center',
        color: theme.palette.primary.light
    }
}));

const TaskList = props => {
    const classes = useStyles(props);
    const { tasks } = useContext(TaskListContext);
    return (
        <div>
            {tasks.length ? (
                <ul className={classes.list}>
                    {tasks.map(task => {
                        return <Task task={task} key={task.id} completed={task.completed} />;
                    })}
                </ul>
            ) : (
                    <div className={classes.noTasks}>No Tasks</div>
                )}
        </div>
    );
};

export default TaskList;