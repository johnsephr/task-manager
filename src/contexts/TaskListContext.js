import React, { createContext, useState, useEffect } from 'react';

// 3rd party packages
import { v4 as uuidv4 } from 'uuid';
import format from 'date-fns/format';

// create context
export const TaskListContext = createContext();

const TaskListContextProvider = props => {
    // retrieve task list from local storage and set it as initial state (if list is not present, set as empty array)
    const initialState = JSON.parse(localStorage.getItem('tasks') || []);
    // list of tasks (state var)
    const [tasks, setTasks] = useState(initialState);


    // edit in progress (state var)
    const [editItem, setEditItem] = useState(null);

    // store task list in local storage each time the list changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    // add task to task list
    const addTask = (title, description, targetDate) => {
        setTasks([...tasks,
        {
            title,
            description,
            targetDate,
            completed: false,
            completedDate: '',
            id: uuidv4()
        }]);
    };

    // remove task from task list
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // clear task list
    const clearList = () => {
        setTasks([]);
    };

    // (on edit item click) find task in list
    const findEditItem = id => {
        const item = tasks.find(task => task.id === id);

        setEditItem(item);
    };

    // (on form submit) update task list with new edited task and clear form
    const editTask = (title, id, description, targetDate ) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id, description, targetDate, completed: false } : task));

        setTasks(newTasks);
        setEditItem(null);
    };

    // toggle item completed
    const toggleTaskCompleted = id => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                if (task.completed === true) {
                    // if task was completed, update task as not completed and remove completion date
                    return {
                        title: task.title,
                        id,
                        description: task.description,
                        targetDate: task.targetDate,
                        completed: !task.completed,
                        completionDate: ''
                    }
                } else {
                    // if task was not completed, update task as completed and add completion date
                    return {
                        title: task.title,
                        id,
                        description: task.description,
                        targetDate: task.targetDate,
                        completed: !task.completed,
                        completionDate: format(new Date(), 'MMM d, yyyy h:mma')
                    }
                }
            } else return task
        })

        setTasks(newTasks);
    };

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findEditItem,
                editTask,
                editItem,
                toggleTaskCompleted,
            }}>
            {props.children}
        </TaskListContext.Provider>
    );
};

export default TaskListContextProvider;