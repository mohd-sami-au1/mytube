import {createPlaylist} from '../api/youtube.js';
import {store} from '../store.js';


function newPlaylistReducer(newPlaylist={}, action){

    if(action.type == "CLEAR_PLAYLIST_CREATED"){
        return {};
    }


    if(action.type == "CREATE_PLAYLIST"){
        createPlaylist(store, action);
        return newPlaylist;
    }

    if(action.type == "PLAYLIST_CREATED"){
        return action.newPlaylist;
    }
    return newPlaylist;

}

export default newPlaylistReducer;
