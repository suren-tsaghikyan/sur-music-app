import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#56B5AC",
        marginTop: "80px",
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.footer} id="footer">
            <Typography style={{ marginTop: "10px" }} paragraph>&copy; {new Date().getFullYear()} All Rights Reserved.</Typography>
        </Box>
    )
}

export default Footer;