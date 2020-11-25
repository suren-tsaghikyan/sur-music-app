import { combineReducers } from 'redux';
import SongReducer from './SongReducer';
import { createStore } from 'redux'

const reducer = combineReducers({
    SongReducer
})

const store = createStore(reducer);

export default store;