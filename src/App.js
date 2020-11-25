import React from "react";
import './App.css';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Player from "./components/Player";
import PlayLists from "./components/PlayLists";
import { Provider } from 'react-redux';
import store from "./store/Reducers";
import Grid from '@material-ui/core/Grid';
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
    return (
        <Provider store={store}>
            <Box component="div">
                <Container>
                    <Header />
                    <Grid container alignItems="center">
                        <Grid item lg={8} xs={12}>
                            <Player />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <PlayLists />
                        </Grid>
                    </Grid>
                    <Footer />
                </Container>
            </Box>
        </Provider>
    );
}

export default App;
