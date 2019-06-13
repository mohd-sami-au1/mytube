import {createStore, combineReducers} from 'redux';

import videosReducer from './reducers/videosReducer.js';
import isVideosLoadingReducer from './reducers/isVideosLoadingReducer.js';
import currentPlayerVideoReducer from './reducers/currentPlayerVideoReducer.js';
import currentVideoCommentsReducer from './reducers/currentVideoCommentsReducer.js';
import playlistsReducer from './reducers/playlistsReducer.js';


let reducer = combineReducers({
    videos: videosReducer,
    isVideosLoading: isVideosLoadingReducer,
    currentPlayerVideo: currentPlayerVideoReducer,
    currentVideoComments: currentVideoCommentsReducer,
    playlists: playlistsReducer
})

let store = createStore(reducer);

store.subscribe(()=>{
    console.log( "Dispatched ===>", store.getState() );
})

function stateMapper(state){
    return state;
}



export {store, stateMapper};