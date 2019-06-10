import MYTUBE_CONFIG from '../../config.js';

function fetchVideos(store, action){
    
    if(action.videoType == "trending"){

        let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&chart=mostPopular&maxResuts=30`;

        fetch(url)
            .then(function(data){
                return data.json();
            })
            .then(function(response){
                store.dispatch({
                    type: "VIDEOS_LOADED",
                    videos: response.items
                });
            })
            .catch(function(err){
                console.log("Fetch error ==>", err);
            })       
    } else if(action.videoType == "search"){
        let url = `https://www.googleapis.com/youtube/v3/search?key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}&q=${action.query}&part=snippet&maxResults=30`;
    
        fetch(url)
            .then(function(data){
                return data.json();
            })
            .then(function(response){
                store.dispatch({
                    type: "VIDEOS_LOADED",
                    videos: response.items
                });
            })
            .catch(function(err){
                console.log("Fetch error ==>", err);
            })
    }
}

function fetchOneVideo(store, action){
    let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            store.dispatch({
                type: "VIDEO_DATA_LOADED",
                videoData: data.items[0]
            });
        })
        .catch(function(err){
            console.log("fetch error ==> ", err);
        })
}

function fetchVideoComments(store, action){
    let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${action.videoId}&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            store.dispatch({
                type: "VIDEO_COMMENTS_LOADED",
                comments: data.items
            });
        })
        .catch(function(err){
            console.log("fetch error ==> ", err);
        })
}

export {fetchVideos, fetchOneVideo, fetchVideoComments};