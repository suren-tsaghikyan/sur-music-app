import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../assets/logo.png"
import { Avatar, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center",
        },
    },
    large: {
        height: theme.spacing(15),
        width: theme.spacing(15),
    },
    contact: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [theme.breakpoints.down('xs')]: {
            justifyContent: "center",
            height: "120px",
        },
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    <Avatar variant="rounded" alt="Site Logo" src={logo} className={classes.large} />
                </Typography>
                <Box className={classes.contact}>
                    <Link href="tel:+37493848607"><PhoneIcon style={{ marginRight: "5px" }} /> (+374) 93-848-607</Link>
                    <Link href="mailto:stsaghikyan@gmail.com"><EmailIcon style={{ marginRight: "5px" }} /> stsaghikyan@gmail.com</Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;