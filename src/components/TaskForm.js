import React, { useContext, useState, useEffect } from 'react';

// mui
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

// 3rd party imports
import DateFnsUtils from '@date-io/date-fns';
import format from 'date-fns/format';

// contexts
import { TaskListContext } from '../contexts/TaskListContext';

// stylesheet
const useStyles = makeStyles(theme => ({
    form: {
        width: 325,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        color: theme.palette.primary.light,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    taskTitle: {
        textTransform: 'uppercase',
    },
    dateTimePickerContainer: {
        padding: 10
    },
    dateTimePicker: {
        width: '100%'
    },
}));

const TaskForm = props => {
    const classes = useStyles(props);
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState(new Date());

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        let formattedTargetDate = format(targetDate, 'MMM d, yyyy h:mma');
        if (!editItem) {
            addTask(title, description, formattedTargetDate);
            setTitle('');
            setDescription('');
            setTargetDate(new Date());
        } else {
            editTask(title, editItem.id, description, formattedTargetDate);
        };
    };

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
            setDescription(editItem.description);
            // this could be improved by comparing the target date on the task being edited to the current date, 
            // and setting a new Date() if the target date is less than the current date, and just using the initial target date if not.
            setTargetDate(new Date());
        } else {
            setTitle('');
            setDescription('');
            setTargetDate(new Date());
        };
    }, [editItem]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleSubmit} className={classes.form}>

                <p className={classes.text}>Title</p>
                <TextField
                    className={classes.taskTitle}
                    onChange={handleTitleChange}
                    type="text"
                    value={title}
                    required
                />
                
                <p className={classes.text}>Description</p>
                <TextField
                    className={classes.taskTitle}
                    onChange={handleDescriptionChange}
                    type="text"
                    value={description}
                    required
                />

                <div className={classes.dateTimePickerContainer}>
                    <p className={classes.text}>Target Completion Date</p>
                    <DateTimePicker
                        className={classes.dateTimePicker}
                        value={targetDate}
                        onChange={setTargetDate}
                        minDate={new Date()}
                        required />
                </div>

                <div style={{ padding: 20, display: 'flex', justifyContent: 'space-around', marginTop: 'auto' }}>
                    <Button variant='contained' type="submit">
                        {editItem ? 'Done' : 'Add Item'}
                    </Button>
                    <Button onClick={clearList} variant='contained'>Clear</Button>
                </div>

            </form>
        </MuiPickersUtilsProvider >
    );
};

export default TaskForm;