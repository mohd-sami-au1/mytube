import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {stateMapper} from '../store/store.js';

class VideosComponent extends React.Component{

    renderVideos(){
        return this.props.videos.map(v => {

            let videoId = v.id;

            if(typeof videoId != "string"){
                videoId = v.id.videoId
            }

            return (
                    <div key={v.etag} className="col-md-4">

                        <Link to={`/app/player/${videoId}`}>
                            <img className="img-fluid" src={v.snippet.thumbnails.high.url} alt={v.snippet.title} />
                        </Link>

                        <p>{v.snippet.title} by <em>{v.snippet.channelTitle}</em></p>

                    </div>                    
                );
        });
    }

    render(){

        if(this.props.isVideosLoading){
            return(
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border text-danger" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="row">
                    {this.renderVideos()}
                </div>
            );
        }

    }
}

let Videos = connect(stateMapper)(VideosComponent);

export default Videos;