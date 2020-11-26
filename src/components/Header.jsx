import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "../assets/logo.png"
import { Avatar, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Tooltip from '@material-ui/core/Tooltip';

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
                    <Tooltip title="Facebook" arrow placement="bottom">
                        <Link href="https://www.facebook.com/suren.tsaghikyan" target="_blank"><FacebookIcon /></Link>
                    </Tooltip>
                    <Tooltip title="Linkedin" arrow placement="bottom">
                        <Link href="https://www.linkedin.com/in/suren-tsaghikyan-190a42198/" target="_blank"><LinkedInIcon /></Link>
                    </Tooltip>
                    <Tooltip title="Instagram" arrow placement="bottom">
                        <Link href="https://www.instagram.com/suren_tsaghikyan/" target="_blank"><InstagramIcon /></Link>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;