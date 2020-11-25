import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, Divider } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { RemoveSong, SelectSong, SlideIn } from "../store/Actions";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: "calc(100vh - 320px)",
        overflowY: "auto",
        border: "1px solid grey",
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
        },
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        border: "2px #56B5AC solid",
        borderRadius: "50%",
    },
    button: {
        width: "100%",
        "&.active": {
            background: '#1a1b1b',
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
                                        <Typography variant="h6" style={{ color: "white" }}>{song.singer}</Typography>
                                        <Typography paragraph style={{ color: "grey" }}>{song.title}</Typography>
                                    </Box>
                                    <Box component="div">
                                        <Typography paragraph style={{ color: "grey", marginBottom: 0, textAlign: "center" }}>{song.duration}</Typography>
                                    </Box>
                                </Box>
                            </Button>
                        </Tooltip>
                        <Menu
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
                        {songs.length - 1 > index &&
                            <Divider style={{ background: "grey" }} />
                        }
                    </React.Fragment>
                )
            })}
        </Box>
    )
}

export default PlayLists; 