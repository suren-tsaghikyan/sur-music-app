import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { AppBar, Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { RemoveSong, SearchSong, SelectSong, SlideIn } from "../store/Actions";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: "calc(100vh - 320px)",
        overflowY: "auto",
        boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
        padding: "0 20px",
    },
    song: {
        display: "grid",
        gridTemplateColumns: "100px auto 100px",
        padding: "10px 0",
        width: "100%",
        textAlign: "left",
        alignItems: "center",
        textTransform: "capitalize",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
            gridTemplateColumns: "50px auto 50px",
        },
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        border: "2px #56B5AC solid",
        borderRadius: "50%",
        [theme.breakpoints.down('xs')]: {
            width: "50px",
            height: "50px",
        },
    },
    button: {
        width: "100%",
        borderRadius: "20px",
        "&.active": {
            background: '#1a1b1b',
        },
        "&:hover": {
            boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
        },
    },
    searchInput: {
        width: "100%",
    },
    appbar: {
        backgroundColor: "#282c34!important",
        boxShadow: "none!important",
        marginBottom: 0,
    },
    songDuration: {
        color: "grey",
        marginBottom: 0,
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            fontSize: "12px",
        },
    },
    songTitle: {
        color: "grey",
        [theme.breakpoints.down('xs')]: {
            fontSize: "12px",
        },
    },
    singerName: {
        color: "white",
        [theme.breakpoints.down('xs')]: {
            fontSize: "16px",
        },
    },
}));

const PlayLists = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const songs = useSelector((state) => {
        return state.SongReducer.songs
    })
    const activeSong = useSelector((state) => {
        return state.SongReducer.activeSong
    })

    const handleClick = (song, index) => {
        dispatch(SlideIn(false))
        
        setTimeout(() => {
            dispatch(SelectSong(song, index))
            dispatch(SlideIn(true))
        }, 500);
    };

    const initialState = {
        mouseX: null,
        mouseY: null,
    };

    const [state, setState] = React.useState(initialState);
    const [songId, setSongId] = React.useState();

    const handleContextMenuClick = (event, id) => {
        event.preventDefault();
        setState({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        });
        setSongId(id);
    };

    const handleClose = (id) => {
        setState(initialState);
        dispatch(RemoveSong(id));
    };

    return (
        <Box component="div" className={classes.root}>
            <AppBar position="sticky" className={classes.appbar}>
                <TextField
                    id="standard-basic"
                    label="Search song..."
                    className={classes.searchInput}
                    onInput={(e) => dispatch(SearchSong(e.target.value))}
                />
            </AppBar>
            {songs.map((song, index) => {
                return (
                    <React.Fragment key={song.id}>
                        <Tooltip title="Right click for options" arrow placement="left">
                            <Button
                                className={`${classes.button} ${song.id === activeSong.id && 'active'}`}
                                onClick={() => handleClick(song, index)}
                                onContextMenu={(e) => handleContextMenuClick(e, song.id)}
                                >
                                <Box component="div" className={classes.song}>
                                    <Box component="div">
                                        <Avatar alt={song.singer} variant="rounded" src={song.img} className={classes.large} />
                                    </Box>
                                    <Box component="div">
                                        <Typography variant="h6" className={classes.singerName}>{song.singer}</Typography>
                                        <Typography paragraph className={classes.songTitle}>{song.title}</Typography>
                                    </Box>
                                    <Box component="div">
                                        <Typography paragraph className={classes.songDuration}>{song.duration}</Typography>
                                    </Box>
                                </Box>
                            </Button>
                        </Tooltip>
                        <Menu
                            className="notInterested"
                            keepMounted
                            open={state.mouseY !== null}
                            onClose={handleClose}
                            anchorReference="anchorPosition"
                            anchorPosition={
                            state.mouseY !== null && state.mouseX !== null
                                ? { top: state.mouseY, left: state.mouseX }
                                : undefined
                            }
                        >
                            <MenuItem onClick={() => handleClose(songId)}><DeleteIcon color="secondary" style={{ marginRight: "5px" }} /> Not Interested</MenuItem>
                        </Menu>
                    </React.Fragment>
                )
            })}
        </Box>
    )
}

export default PlayLists; 