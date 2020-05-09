import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mui / theme
import { CssBaseline } from '@material-ui/core';
import ThemeProvider from './mui/ThemeProvider';

ReactDOM.render(
    <ThemeProvider>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById("root"));