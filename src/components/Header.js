import React from 'react';

// mui
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// stylesheet
const useStyles = makeStyles(theme => ({
    header: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        padding: 20
    }
}));

const Header = props => {
    const classes = useStyles(props);
    return (
        <div>
            <Typography className={classes.header} variant="h4">
                Task Manager
            </Typography>
        </div>
    );
};

export default Header;