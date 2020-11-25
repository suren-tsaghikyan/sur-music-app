import Box from "@material-ui/core/Box";
import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { NextSong, SlideIn } from "../store/Actions";
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(50),
        height: theme.spacing(50),
        margin: "0 auto",
        borderRadius: "50%",
        border: "2px #56B5AC solid",
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(30),
            height: theme.spacing(30),
        },
    },
    iconColor: {
        color: "white",
    },
    songDetailsActions: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
    songDuration: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

const Player = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const activeSong = useSelector((state) => {
        return state.SongReducer.activeSong
    })
    const activeSongIndex = useSelector((state) => {
        return state.SongReducer.activeSongIndex
    })
    const slideIn = useSelector((state) => {
        return state.SongReducer.slideIn
    })

    const handleEnded = (idx) => {
        dispatch(SlideIn(false))
        
        setTimeout(() => {
            dispatch(NextSong(idx))
            dispatch(SlideIn(true))
        }, 500);
    }
    

    return (
        <Box component="div" mt={10}>
            {activeSong.id ? 
                <Grow in={slideIn}>
                    <Grid container spacing={5} justify="center">
                        <Grid item lg={12} xs={12}>
                            <Avatar alt="Remy Sharp" variant="rounded" src={activeSong.img} className={`${classes.large} animateImage`} />
                        </Grid>
                        <Grid item lg={10} xs={12}>
                            <Box component="div" className={classes.songDetailsActions}>
                                <Box component="div" textAlign="center">  
                                    <Typography variant="h4" style={{ color: "white" }}>{activeSong.singer}</Typography>
                                    <Typography paragraph style={{ color: "grey" }}>{activeSong.title}</Typography>
                                </Box>
                                <Box component="div">
                                    <AudioPlayer
                                        autoPlay
                                        src={activeSong.src}
                                        onEnded={() => handleEnded(activeSongIndex)}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grow> :
                <Box component="div" textAlign="center" style={{ color: "grey" }}>
                    <Typography variant="h4">Please choose a song...</Typography>
                </Box>
            }
        </Box>
    )
}

export default Player;
