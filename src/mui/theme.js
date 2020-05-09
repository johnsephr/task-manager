// mui
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// breakpoints
const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

// theme
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#D1DEE1',
            dark: '#495867'
        },
        secondary: {
            light: '#6B7985',
            main: '#303A43',
        },
        error: {
            light: red[300],
            main: red[500],
            dark: red[700]
        }
    },
    spacing: 10,
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        up: key => `@media (min-width:${breakpoints[key]}px)`,
    },
    overrides: {
        MuiInputBase: {
            input: {
                color: '#D1DEE1',
                textAlign: 'center'
            }
        }
    },
});

export default theme;