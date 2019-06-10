import React from 'react';
import {connect} from 'react-redux';

import {store, stateMapper} from '../store/store.js';
import Comments from './comments.js';

class VideoPlayerComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            showMoreClicked: false
        }

        this.showMoreClicked = this.showMoreClicked.bind(this);
    }



    componentDidMount(){
        this.props.dispatch({
            type: "FETCH_VIDEO_DATA",
            videoId: this.props.match.params.videoId
        })
    }

    componentWillUnmount(){
        this.props.dispatch({
            type: "CLEAR_VIDEO_DATA"
        })
    }

    showMoreClicked(){
        this.setState({
            showMoreClicked: true
        })
    }

    renderTitle(){
        
        if(!this.props.currentPlayerVideo.snippet){
            return "Loading...";
        } else {
            return this.props.currentPlayerVideo.snippet.title;
        }
    }

    renderDescription(){

        if(this.state.showMoreClicked){
            return(
                <p>
                    {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.description}
                </p>
            );
        } else {
            return(
                <p>
                    {this.props.currentPlayerVideo.snippet && this.props.currentPlayerVideo.snippet.shortDescription}
                    <button onClick={this.showMoreClicked} className="btn btn-info btn-sm">Show More</button>
                </p>

            )    
        }
    }

    render(){
        return(
            <div>
                <h2 className="text-danger">{this.renderTitle()}</h2>
                <hr />

                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`} allowFullScreen></iframe>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h2>
                            Views: {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.viewCount},
                            Likes: {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.likeCount},
                            Dislikes: {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.dislikeCount}
                        </h2>
                        <hr />
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-8">
                        {this.renderDescription()}
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">

                        <h2>
                            {this.props.currentPlayerVideo.statistics && this.props.currentPlayerVideo.statistics.commentCount} Comments
                        </h2>
                        <hr/>
                        <Comments videoId={this.props.match.params.videoId} />
                    </div>                    
                </div>

            </div>
        ) 

    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer; 