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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>{children}</Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const App = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Provider store={store}>
            <Box component="div">
                <Container>
                    <Header />
                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="All Songs" {...a11yProps(0)} />
                        <Tab label="Upload a new song" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <Grid container alignItems="center">
                            <Grid item lg={8} xs={12}>
                                <Player />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <PlayLists />
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Upload
                    </TabPanel>
                    <Footer />
                </Container>
            </Box>
        </Provider>
    );
}

export default App;
