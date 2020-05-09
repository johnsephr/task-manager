import React, { useMemo, useState, createContext } from 'react';
import theme from './theme';

// MUI
import { MuiThemeProvider } from '@material-ui/core';

const ThemeProvider = props => {
    return (
            <MuiThemeProvider theme={theme}>
                {props.children}
            </MuiThemeProvider>
    );
};

export default ThemeProvider;