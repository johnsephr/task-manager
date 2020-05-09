import React from 'react';
import './App.css';

// 3rd party imports
import { makeStyles } from '@material-ui/core/styles'
import {isMobile} from 'react-device-detect';

// contexts
import TaskListContextProvider from './contexts/TaskListContext';

// components
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';

// stylesheet
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.primary.light
    },
    appWrapper: {
        backgroundColor: theme.palette.primary.dark,
        borderRadius: 10
    },
}));

const App = props => {
    const classes = useStyles(props);
    return (
        <TaskListContextProvider>
            <div className={classes.container} style={isMobile ? { height: 'auto', paddingTop: 10, paddingBottom: 10 } : { height: '100vh' }}>
                <div className={classes.appWrapper}>
                    <Header />
                    <div>
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
};

export default App;