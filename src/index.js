import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mui / theme
import { CssBaseline } from '@material-ui/core';
import ThemeProvider from './mui/ThemeProvider';

// fonts
import './fonts/SF-Pro-Text/SF-Pro-Text-Heavy.otf';
import './fonts/SF-Pro-Text/SF-Pro-Text-Medium.otf';
import './fonts/SF-Pro-Text/SF-Pro-Text-Regular.otf';

ReactDOM.render(
    <ThemeProvider>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById("root"));