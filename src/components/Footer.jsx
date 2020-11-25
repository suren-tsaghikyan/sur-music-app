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
            <Typography style={{ marginTop: "10px" }} paragraph>Follow me on:</Typography>
            <Box>
                <Link href="https://www.facebook.com/suren.tsaghikyan" target="_blank"><FacebookIcon style={{ marginRight: "5px" }} /></Link>
                <Link href="https://www.linkedin.com/in/suren-tsaghikyan-190a42198/" target="_blank"><LinkedInIcon style={{ marginRight: "5px" }} /></Link>
                <Link href="https://www.instagram.com/suren_tsaghikyan/" target="_blank"><InstagramIcon style={{ marginRight: "5px" }} /></Link>
            </Box>
            <Typography style={{ marginTop: "10px" }} paragraph>&copy; {new Date().getFullYear()} All Rights Reserved.</Typography>
        </Box>
    )
}

export default Footer;