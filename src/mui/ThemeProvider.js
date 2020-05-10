import React from 'react';
import theme from './theme';

// mui
import { MuiThemeProvider } from '@material-ui/core';

const ThemeProvider = props => {
    return (
            <MuiThemeProvider theme={theme}>
                {props.children}
            </MuiThemeProvider>
    );
};

export default ThemeProvider;