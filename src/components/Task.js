import React, { useContext } from 'react';

// mui
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Button, Typography } from '@material-ui/core';

// contexts
import { TaskListContext } from '../contexts/TaskListContext';

// stylesheet
const useStyles = makeStyles(theme => ({
    listItem: {
        position: 'relative',
        display: 'flex',
        background: theme.palette.primary.dark,
        padding: 15,
        paddingRight: 0,
        marginBottom: 10,
        borderRadius: 5,
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRight: `1px solid ${theme.palette.secondary.main}`,
    },
    buttons: {
        padding: '10px 0'
    },
    button: {
        fontSize: 10,
        padding: '3px 8px',
        marginRight: 5
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    checkbox: {
        marginLeft: 'auto',
        color: theme.palette.primary.light
    },
    description: {
        width: 235,
        padding: 10,
        paddingLeft: 0,
        marginTop: 5,
        marginBottom: 5,
        color: theme.palette.primary.light,
        borderTop: `1px solid ${theme.palette.secondary.main}`,
        borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
    dates: {
        padding: 10,
        paddingLeft: 0,
        width: 245
    },
    label: {
        color: theme.palette.primary.light,
    },
    text: {
        textTransform: 'uppercase',
        color: theme.palette.primary.light,
    },
}));

const Task = props => {
    const classes = useStyles(props);
    const { task } = props;
    const { removeTask, findEditItem, toggleTaskCompleted } = useContext(TaskListContext);

    return (
        <li className={classes.listItem}>
            <div className={classes.body}>
                <div className={classes.content}>
                    <Typography variant='body1' className={classes.text}>{task.title}</Typography>
                    <Typography variant='body2' className={classes.description}>{task.description}</Typography>
                    <div className={classes.dates}>
                        <Typography variant='body2' className={classes.label} >Target Date: {task.targetDate}</Typography>
                        <Typography variant='body2' className={classes.label}>Completion Date: {task.completionDate}</Typography>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Button onClick={() => findEditItem(task.id)} variant="contained" className={classes.button}>Edit</Button>
                    <Button onClick={() => removeTask(task.id)} variant="contained" className={classes.button}>Delete</Button>
                </div>

            </div>
            <Checkbox
                className={classes.checkbox}
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </li>
    );
};

export default Task;